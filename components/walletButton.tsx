// components/WalletButton.tsx

'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

export default function WalletButton() {
  // const { address, isConnected } = useAccount()
  // const { connect } = useConnect()
  // const { disconnect } = useDisconnect()

  // if (isConnected) {
  //   return (
  //     <button
  //       onClick={() => disconnect()}
  //       className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow"
  //     >
  //       {address?.slice(0, 6)}...{address?.slice(-4)}
  //     </button>
  //   )
  // }

  return (
    <button
      // onClick={() => connect({ connector: injected() })}
      className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold shadow hover:bg-gray-100"
    >
      Connect Wallet
    </button>
  )
}


