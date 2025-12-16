// app/mint/page.tsx

'use client'

// import { useAccount, useWriteContract } from 'wagmi'
// import { parseUnits } from 'viem'
import Navbar from '@/components/navbar'
import { NFT_ABI, NFT_ADDRESS, USDC_ABI, USDC_ADDRESS } from '@/lib/contract'
import axios from 'axios'

const USDC_AMOUNT = '10' // 10 USDC example

export default function MintPage() {
//   const { address, isConnected } = useAccount()
//   const { writeContractAsync } = useWriteContract()

//   const handleMint = async () => {
//     if (!address) return alert('Connect wallet first')

//     try {
//       // 1. Approve USDC
//       await writeContractAsync({
//         address: USDC_ADDRESS,
//         abi: USDC_ABI,
//         functionName: 'approve',
//         args: [NFT_ADDRESS, parseUnits(USDC_AMOUNT, 6)] // USDC = 6 decimals
//       })

//       // 2. Call backend to record payment intent
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/user/payment-intent`,
//         { wallet: address, amount: USDC_AMOUNT }
//       )

//       // 3. Mint NFT
//       await writeContractAsync({
//         address: NFT_ADDRESS,
//         abi: NFT_ABI,
//         functionName: 'mint',
//         args: [address]
//       })

//       // 4. Save wallet after mint
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/user/wallet`,
//         { wallet: address }
//       )

//       alert('NFT minted successfully!')
//     } catch (err) {
//       console.error(err)
//       alert('Mint failed')
//     }
//   }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      <Navbar />

      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold mb-6">Mint Knowledge NFT</h1>
        <p className="text-gray-200 mb-10">
          Pay <strong>{USDC_AMOUNT} USDC</strong> to mint your Knowledge Chain NFT
          and unlock access to the verification test.
        </p>

        {/* {!isConnected ? (
          <p className="text-red-300">Please connect your wallet to continue.</p>
        ) : ( */}
          <button
            // onClick={handleMint}
            className="w-full bg-white text-indigo-700 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Pay USDC & Mint NFT
          </button>
        {/* )} */}
      </section>

      <footer className="bg-black/30 py-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Knowledge Chain. All rights reserved.
      </footer>
    </main>
  )
}
