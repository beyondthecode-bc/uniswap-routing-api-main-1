import { TradeType } from '@tendieswap/sdk-core'
import { ChainId } from '@tendieswap/uniswap-smart-order-router'

import { CachedRoutes } from '@tendieswap/uniswap-smart-order-router'

interface PairTradeTypeChainIdArgs {
  tokenIn: string
  tokenOut: string
  tradeType: TradeType
  chainId: ChainId
}

/**
 * Class used to model the partition key of the CachedRoutes cache database and configuration.
 */
export class PairTradeTypeChainId {
  private tokenIn: string
  private tokenOut: string
  private tradeType: TradeType
  private chainId: ChainId

  constructor({ tokenIn, tokenOut, tradeType, chainId }: PairTradeTypeChainIdArgs) {
    this.tokenIn = tokenIn.toLowerCase() // All token addresses should be lower case for normalization.
    this.tokenOut = tokenOut.toLowerCase() // All token addresses should be lower case for normalization.
    this.tradeType = tradeType
    this.chainId = chainId
  }

  public toString(): string {
    return `${this.tokenIn}/${this.tokenOut}/${this.tradeType}/${this.chainId}`
  }

  public static fromCachedRoutes(cachedRoutes: CachedRoutes): PairTradeTypeChainId {
    return new PairTradeTypeChainId({
      tokenIn: cachedRoutes.tokenIn.address,
      tokenOut: cachedRoutes.tokenOut.address,
      tradeType: cachedRoutes.tradeType,
      chainId: cachedRoutes.chainId,
    })
  }
}
