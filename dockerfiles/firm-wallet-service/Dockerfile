FROM feyman2019/auticuro-run-image:20.04

ADD ./firm-wallet-service /wallet/firm-wallet-service
ADD ./entrypoint.sh /wallet/entrypoint.sh

WORKDIR /wallet

ENTRYPOINT ["/wallet/entrypoint.sh"]
