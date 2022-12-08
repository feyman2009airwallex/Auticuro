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
use crate::errors;
use hologram_protos::firm_walletpb::errorpb::Error as ErrorPb;
use std::result;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
    #[error("BalanceOperationError {0:?}")]
    BalanceOperationError(#[from] errors::balance_operation_error::Error),

    #[error("AccountManagementError {0:?}")]
    AccountManagementError(#[from] errors::account_management_error::Error),

    #[error("CommonError {0:?}")]
    CommonError(#[from] errors::common_error::Error),
}

pub type GeneralResult<T> = result::Result<T, Error>;

impl Error {
    pub fn into_proto(self) -> ErrorPb {
        match self {
            Error::BalanceOperationError(e) => e.into_proto(),
            Error::AccountManagementError(e) => e.into_proto(),
            Error::CommonError(e) => e.into_proto(),
        }
    }
}