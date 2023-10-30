import { Protocol } from '@uniswap/router-sdk'
import { ChainId } from '@aperture_finance/uniswap-smart-order-router'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
