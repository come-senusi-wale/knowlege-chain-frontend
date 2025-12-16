import { createConfig, http } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'


export const wagmiConfig = createConfig({
chains: [polygon],
connectors: [
injected(),
walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_ID! })
],
transports: {
[polygon.id]: http()
}
})