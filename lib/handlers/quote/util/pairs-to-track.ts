import { TradeType } from '@tendieswap/sdk-core'
import { ChainId } from '@tendieswap/uniswap-smart-order-router'


export const PAIRS_TO_TRACK: Map<ChainId, Map<TradeType, string[]>> = new Map([
  [
    ChainId.TENET,
    new Map([
      [
        TradeType.EXACT_INPUT,
        ['WTENET/*', 'TENDIE/*', 'WETH/*', 'USDC/*', 'USDT/*'],
      ],
      [TradeType.EXACT_OUTPUT, ['*/WTENET', '*/TENDIE', '*/WETH', '*/USDC', '*/USDT']],
    ]),
  ],
])
