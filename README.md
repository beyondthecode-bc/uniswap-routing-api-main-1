# Uniswap Routing API

This repository contains routing API for TendieSwap's Uniswap V3 fork on Manta Pacific.

It deploys an API to AWS that uses @tendiedev/uniswap-smart-order-router to search for the most efficient way to swap token A for token B.

## Development

To develop on the Routing API you must have an AWS account where you can deploy your API for testing.

### Deploying the API

The best way to develop and test the API is to deploy your own instance to AWS.

1. Install and configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [AWS CDK V1](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
2. Create .env file in the root directory of the project with :
   ```
   THROTTLE_PER_FIVE_MINS = '' # Optional
   JSON_RPC_PROVIDER_155 = https://rpc.testnet.tenet.org
   JSON_RPC_PROVIDER_1559=https://rpc.tenet.org
   ```
3. Install and build the package
   ```
   npm install && npm run build
   ```
4. To deploy the API run:
   ```
   cdk deploy RoutingAPIStack
   ```
   This will deploy to the default account your AWS CLI is configured for. Once complete it will output something like:
   ```
   RoutingAPIStack.Url = https://...
   ```
   We have a deployed stack with url https://vbcuqwld9d.execute-api.us-west-2.amazonaws.com/prod/. Our custom domain https://tenet-routing.tendieswap.app points to this stack.
   You can then try it out:
   ```
   curl --request GET 'https://tenet-routing.tendieswap.app/quote?tokenInAddress=0xd6cb8a253e12893b0cF39Ca78F7d858652cCa1fe&tokenInChainId=1559&tokenOutAddress=0x0260F440AEa04a1690aB183Dd63C5596d66A9a43&tokenOutChainId=1559&amount=1000&type=exactIn'
   ```

### Integration Tests

Note: integration tests have not been updated for Manta Pacific yet. Instructions kept below for future references.

The integration tests fetch quotes from your deployed API, then execute the swaps on a Hardhat mainnet fork.

1. First deploy your test API using the intructions above. Then update your `.env` file with the URL of the API, and the RPC URL of an archive node:

   ```
   UNISWAP_ROUTING_API='...'
   ARCHIVE_NODE_RPC='...'
   ```

2. Run the tests with:
   ```
   npm run integ-test
   ```
