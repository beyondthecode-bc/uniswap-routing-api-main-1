import { CachedRoutes } from '@tendieswap/uniswap-smart-order-router'
import { TradeType } from '@tendieswap/sdk-core'
import { ChainId } from '@tendieswap/uniswap-smart-order-router'

import { Protocol } from '@tendieswap/router-sdk'
import { MarshalledToken, TokenMarshaller } from './token-marshaller'
import { CachedRouteMarshaller, MarshalledCachedRoute } from './cached-route-marshaller'

export interface MarshalledCachedRoutes {
  routes: MarshalledCachedRoute[]
  chainId: ChainId
  tokenIn: MarshalledToken
  tokenOut: MarshalledToken
  protocolsCovered: Protocol[]
  blockNumber: number
  tradeType: TradeType
  originalAmount: string
  blocksToLive: number
}

export class CachedRoutesMarshaller {
  public static marshal(cachedRoutes: CachedRoutes): MarshalledCachedRoutes {
    return {
      routes: cachedRoutes.routes.map((route) => CachedRouteMarshaller.marshal(route)),
      chainId: cachedRoutes.chainId,
      tokenIn: TokenMarshaller.marshal(cachedRoutes.tokenIn),
      tokenOut: TokenMarshaller.marshal(cachedRoutes.tokenOut),
      protocolsCovered: cachedRoutes.protocolsCovered,
      blockNumber: cachedRoutes.blockNumber,
      tradeType: cachedRoutes.tradeType,
      originalAmount: cachedRoutes.originalAmount,
      blocksToLive: cachedRoutes.blocksToLive,
    }
  }

  public static unmarshal(marshalledCachedRoutes: MarshalledCachedRoutes): CachedRoutes {
    return new CachedRoutes({
      routes: marshalledCachedRoutes.routes.map((route) => CachedRouteMarshaller.unmarshal(route)),
      chainId: marshalledCachedRoutes.chainId,
      tokenIn: TokenMarshaller.unmarshal(marshalledCachedRoutes.tokenIn),
      tokenOut: TokenMarshaller.unmarshal(marshalledCachedRoutes.tokenOut),
      protocolsCovered: marshalledCachedRoutes.protocolsCovered,
      blockNumber: marshalledCachedRoutes.blockNumber,
      tradeType: marshalledCachedRoutes.tradeType,
      originalAmount: marshalledCachedRoutes.originalAmount,
      blocksToLive: marshalledCachedRoutes.blocksToLive,
    })
  }
}
