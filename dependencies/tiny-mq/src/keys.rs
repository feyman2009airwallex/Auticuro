#![allow(warnings)]
/**
 * Copyright 2022 Airwallex (Hong Kong) Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 *
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

use byteorder::{BigEndian, ByteOrder};
use std::mem;

pub const MIN_KEY: &[u8] = &[];
pub const MAX_KEY: &[u8] = &[0xFF];

pub const EMPTY_KEY: &[u8] = &[];

// local is in (0x01, 0x02);
pub const LOCAL_PREFIX: u8 = 0x01;
pub const LOCAL_MIN_KEY: &[u8] = &[LOCAL_PREFIX];
pub const LOCAL_MAX_KEY: &[u8] = &[LOCAL_PREFIX + 1];

pub const DATA_PREFIX: u8 = b'z';
pub const DATA_PREFIX_KEY: &[u8] = &[DATA_PREFIX];
pub const DATA_MIN_KEY: &[u8] = &[DATA_PREFIX];
pub const DATA_MAX_KEY: &[u8] = &[DATA_PREFIX + 1];

pub const DEDUP_PREFIX: u8 = b'y';
pub const DEDUP_PREFIX_KEY: &[u8] = &[DEDUP_PREFIX];
pub const DEDUP_MIN_KEY: &[u8] = &[DEDUP_PREFIX];
pub const DEDUP_MAX_KEY: &[u8] = &[DEDUP_PREFIX + 1];

pub const EVENT_PREFIX: u8 = b'x';
pub const EVENT_PREFIX_KEY: &[u8] = &[EVENT_PREFIX];
pub const EVENT_MIN_KEY: &[u8] = &[EVENT_PREFIX];
pub const EVENT_MAX_KEY: &[u8] = &[EVENT_PREFIX + 1];

pub const STORE_IDENT_KEY: &[u8] = &[LOCAL_PREFIX, 0x01];

pub const REGION_RAFT_PREFIX: u8 = 0x02;
pub const REGION_RAFT_PREFIX_KEY: &[u8] = &[LOCAL_PREFIX, REGION_RAFT_PREFIX];

pub const REGION_META_PREFIX: u8 = 0x03;
pub const REGION_META_PREFIX_KEY: &[u8] = &[LOCAL_PREFIX, REGION_META_PREFIX];

pub const RAFT_LOG_SUFFIX: u8 = 0x01;
pub const RAFT_STATE_SUFFIX: u8 = 0x02;
pub const APPLY_STATE_SUFFIX: u8 = 0x03;

// For region meta
pub const REGION_STATE_SUFFIX: u8 = 0x01;

#[inline]
fn make_region_prefix(region_id: u64, suffix: u8) -> [u8; 11] {
    let mut key = [0; 11];
    key[..2].copy_from_slice(REGION_RAFT_PREFIX_KEY);
    BigEndian::write_u64(&mut key[2..10], region_id);
    key[10] = suffix;
    key
}

#[inline]
fn make_region_key(region_id: u64, suffix: u8, sub_id: u64) -> [u8; 19] {
    let mut key = [0; 19];
    key[..2].copy_from_slice(REGION_RAFT_PREFIX_KEY);
    BigEndian::write_u64(&mut key[2..10], region_id);
    key[10] = suffix;
    BigEndian::write_u64(&mut key[11..19], sub_id);
    key
}

pub fn raft_log_key(region_id: u64, log_index: u64) -> [u8; 19] {
    make_region_key(region_id, RAFT_LOG_SUFFIX, log_index)
}

pub fn raft_state_key(region_id: u64) -> [u8; 11] {
    make_region_prefix(region_id, RAFT_STATE_SUFFIX)
}

pub fn apply_state_key(region_id: u64) -> [u8; 11] {
    make_region_prefix(region_id, APPLY_STATE_SUFFIX)
}

/// Get the log index from raft log key generated by `raft_log_key`.
pub fn raft_log_index(key: &[u8]) -> u64 {
    let expect_key_len = REGION_RAFT_PREFIX_KEY.len()
        + mem::size_of::<u64>()
        + mem::size_of::<u8>()
        + mem::size_of::<u64>();
    if key.len() != expect_key_len {
        panic!("key.len != expect_key_len");
    }
    BigEndian::read_u64(&key[expect_key_len - mem::size_of::<u64>()..])
}

/// Get the region id and index from raft log key generated by `raft_log_key`.
pub fn decode_raft_log_key(key: &[u8]) -> (u64, u64) {
    let suffix_idx = REGION_RAFT_PREFIX_KEY.len() + mem::size_of::<u64>();
    let expect_key_len = suffix_idx + mem::size_of::<u8>() + mem::size_of::<u64>();
    if key.len() != expect_key_len
        || !key.starts_with(REGION_RAFT_PREFIX_KEY)
        || key[suffix_idx] != RAFT_LOG_SUFFIX
    {
        panic!("invalid key");
    }
    let region_id = BigEndian::read_u64(&key[REGION_RAFT_PREFIX_KEY.len()..suffix_idx]);
    let index = BigEndian::read_u64(&key[suffix_idx + mem::size_of::<u8>()..]);
    (region_id, index)
}

pub fn raft_log_prefix(region_id: u64) -> [u8; 11] {
    make_region_prefix(region_id, RAFT_LOG_SUFFIX)
}

pub fn validate_data_key(key: &[u8]) -> bool {
    key.starts_with(DATA_PREFIX_KEY)
}

pub fn data_key(key: &[u8]) -> Vec<u8> {
    let mut v = Vec::with_capacity(DATA_PREFIX_KEY.len() + key.len());
    v.extend_from_slice(DATA_PREFIX_KEY);
    v.extend_from_slice(key);
    v
}

pub fn origin_data_key(key: &[u8]) -> &[u8] {
    assert!(
        validate_data_key(key),
        "invalid data key {:?}",
        key
    );
    &key[DATA_PREFIX_KEY.len()..]
}

pub fn validate_dedup_key(key: &[u8]) -> bool {
    key.starts_with(DEDUP_PREFIX_KEY)
}

pub fn dedup_key(key: &[u8]) -> Vec<u8> {
    let mut v = Vec::with_capacity(DEDUP_PREFIX_KEY.len() + key.len());
    v.extend_from_slice(DEDUP_PREFIX_KEY);
    v.extend_from_slice(key);
    v
}

pub fn origin_dedup_key(key: &[u8]) -> &[u8] {
    assert!(
        validate_dedup_key(key),
        "invalid dedup key {:?}",
        key
    );
    &key[DEDUP_PREFIX_KEY.len()..]
}

pub fn validate_event_key(key: &[u8]) -> bool {
    key.starts_with(EVENT_PREFIX_KEY)
}

pub fn event_key(key: &[u8]) -> Vec<u8> {
    let mut v = Vec::with_capacity(EVENT_PREFIX_KEY.len() + key.len());
    v.extend_from_slice(EVENT_PREFIX_KEY);
    v.extend_from_slice(key);
    v
}

#[inline]
fn make_region_meta_key(region_id: u64, suffix: u8) -> [u8; 11] {
    let mut key = [0; 11];
    key[0..2].copy_from_slice(REGION_META_PREFIX_KEY);
    BigEndian::write_u64(&mut key[2..10], region_id);
    key[10] = suffix;
    key
}

pub fn region_state_key(region_id: u64) -> [u8; 11] {
    make_region_meta_key(region_id, REGION_STATE_SUFFIX)
}

#[cfg(test)]
mod tests {
    use std::cmp::Ordering;
    use super::*;
    use byteorder::{BigEndian, WriteBytesExt};

    #[test]
    fn test_raft_log_key() {
        for region_id in 1..10 {
            for idx_id in 1..10 {
                let key = raft_log_key(region_id, idx_id);
                assert_eq!(idx_id, raft_log_index(&key));
                assert_eq!((region_id, idx_id), decode_raft_log_key(&key));
            }
        }

        let key = b"abc";
        let result = std::panic::catch_unwind(|| {raft_log_index(key.as_slice())});

        let state_key = raft_state_key(1);
        // invalid length
        let result = std::panic::catch_unwind(|| {decode_raft_log_key(&state_key)});
        assert!(result.is_err());

        let mut state_key = state_key.to_vec();
        state_key.write_u64::<BigEndian>(2).unwrap();
        // invalid suffix
        let result = std::panic::catch_unwind(|| {decode_raft_log_key(&state_key)});
        assert!(result.is_err());

        let mut region_state_key = region_state_key(1).to_vec();
        region_state_key.write_u64::<BigEndian>(2).unwrap();
        // invalid prefix
        let result = std::panic::catch_unwind(|| {decode_raft_log_key(&region_state_key)});
        assert!(result.is_err());
    }

    #[test]
    fn test_data_key() {
        let key = b"abcd";
        assert!(!validate_data_key(key));
        let data_key = data_key(key);
        assert!(validate_data_key(data_key.as_slice()));
        let origin_key = origin_data_key(data_key.as_slice());
        assert_eq!(origin_key, key);
        let result = std::panic::catch_unwind(|| {origin_data_key(key.as_slice())});
        assert!(result.is_err());

    }

    #[test]
    fn test_raft_log_sort() {
        let tbls = vec![
            (1, 1, 1, 2, Ordering::Less),
            (2, 1, 1, 2, Ordering::Greater),
            (1, 1, 1, 1, Ordering::Equal),
        ];

        for (lid, l_log_id, rid, r_log_id, order) in tbls {
            let lhs = raft_log_key(lid, l_log_id);
            let rhs = raft_log_key(rid, r_log_id);
            assert_eq!(lhs.partial_cmp(&rhs), Some(order));
        }
    }

    #[test]
    fn test_dup_key() {
        let key = b"abcd";
        let dedup_key = dedup_key(key.as_slice());
        assert!(validate_dedup_key(&dedup_key));
        let origin_key = origin_dedup_key(&dedup_key);
        assert_eq!(key, origin_key);
        let result = std::panic::catch_unwind(|| {origin_dedup_key(key.as_slice())});
        assert!(result.is_err());
    }

    #[test]
    fn test_event_key() {
        let key = b"abcd";
        let event_key = event_key(key);
        assert!(validate_event_key(&event_key));
    }
}
