/**
 * ts-node --project=tsconfig.cdk.json scripts/get_quote.ts
 */
import axios, { AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import { QuoteQueryParams } from '../lib/handlers/quote/schema/quote-schema'
import { QuoteResponse } from '../lib/handlers/schema'
dotenv.config()
  ; (async function () {
    const quotePost: QuoteQueryParams = {
      tokenInAddress: 'WTENET',
      tokenInChainId: 1559,
      tokenOutAddress: 'USDC',
      tokenOutChainId: 1559,
      amount: '50',
      type: 'exactIn',
      recipient: '0x8966E7d5A0999224628Dc239e18978103711BE9E',
      slippageTolerance: '5',
      deadline: '360',
      algorithm: 'alpha',
    }

    const response: AxiosResponse<QuoteResponse> = await axios.post<QuoteResponse>(
      process.env.UNISWAP_ROUTING_API! + 'quote',
      quotePost
    )

    console.log({ response })
  })()
