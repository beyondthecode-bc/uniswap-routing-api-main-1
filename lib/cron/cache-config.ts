import { Protocol } from '@tendieswap/router-sdk'
import { ChainId, V2SubgraphProvider, V3SubgraphProvider } from '@tendieswap/uniswap-smart-order-router'

export const chainProtocols = [
  // V3.
  {
    protocol: Protocol.V3,
    chainId: ChainId.TENET,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.TENET, 3, 90000),
  },
  // Currently there is no working V3 subgraph for Optimism so we use a static provider.

  // V2.
  {
    protocol: Protocol.V2,
    chainId: ChainId.TENET,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.TENET, 3, 900000, true, 1000),  // 1000 is the largest page size supported by thegraph
  },
]
