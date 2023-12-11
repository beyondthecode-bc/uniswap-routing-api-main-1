import { Protocol } from '@tendieswap/router-sdk'
import { ChainId } from '@tendieswap/uniswap-smart-order-router'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
