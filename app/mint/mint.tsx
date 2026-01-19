'use client'

import { initNairaPayment } from "@/api/user";
import { useBlockchain } from "../../blockchain/blockchainContext";
import { useEffect, useState } from 'react'
import { approveContract, mintNft } from "@/blockchain/mint";
import { nftContractAddress, } from "../../blockchain/constant";
import { formatEther} from "ethers";

let USDC_AMOUNT = 2 // 10 USDC example
const NAIRA_AMOUNT = '15000' // example ₦ price

export default function MintPage() {

  const [baseUrl, setBaseUrl] = useState('')

  const { walletAddress, signer, nftTokenContractFunction} = useBlockchain(); 

  const handlePayUSDC = async () => {
    try {
      const nftTokenBalance = await nftTokenContractFunction(nftContractAddress, "balanceOf", [walletAddress])
      if (parseFloat(nftTokenBalance.toString()) >= 1) {
        alert("You already made payment")
        return
      }

      const mintPrice = await nftTokenContractFunction(nftContractAddress, "mintPrice", [])
      const formattedMintPrice = parseFloat(formatEther(mintPrice.toString()))
      console.log("formattedMintPrice", formattedMintPrice)

      if (formattedMintPrice < 1) {
        alert("Mint price have not be set")
        return
      }

      const approve= await approveContract( formattedMintPrice, signer )
      console.log("approve", approve)

      if (!approve.status) {
        alert(approve.result)
        return
      }

      const mint= await mintNft(signer)
      console.log("mint", mint)

      if (!mint.status) {
        alert(mint.result)
        return
      }

      alert("Transaction in progress")
  
      
    } catch (e) {
      console.log("error", e)
    }
  }

  const handlePayNaira = async () => {
    try {
      if (walletAddress == null) {
        alert("Connect your wallet")
        // setIsError(true)
        return
      }

      console.log("walletAddress", walletAddress)

      // const nftTokenBalance = await nftTokenContractFunction(nftContractAddress, "balanceOf", [walletAddress])
      // if (parseFloat(nftTokenBalance.toString()) >= 1) {
      //   alert("You already made payment")
      //   return
      // }

      console.log(1)

      const callback = `${baseUrl}/mint/verify?wallet=${walletAddress}`

      console.log(2)

      initNairaPayment({walletAddress: walletAddress, callback: callback}).then((res) => {
        console.log(3)
        const paystackUrl = res.data.data.data.url
        localStorage.setItem('paymentRef', res.data.data.data.reference)

        console.log(4)
        
        if (!paystackUrl) {
          alert('Paystack URL not found')
          return
        }

        console.log(5)

        // 🔥 Redirect to Paystack
        // window.location.href = paystackUrl
        window.open(paystackUrl, '_blank')
        
   
      }).catch((e) => {
        alert("Unable to Initial Payment")
        console.log("error", e)
        return
      })
    } catch (err) {
      console.error(err)
      alert('Unable to Initial Payment')
    }
  }

  useEffect(() => {
    setBaseUrl(window.location.origin)

  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          Mint Knowledge NFT
        </h1>

        <p className="text-gray-200 mb-10">
          Choose a payment method to mint your NFT and unlock access to
          the verification test.
        </p>

        {/* PAYMENT BUTTONS */}
        <div className="space-y-4">
          {/* USDC BUTTON */}
          <button
            onClick={handlePayUSDC}
            className="w-full bg-white text-indigo-700 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Pay {USDC_AMOUNT} USDC & Mint NFT
          </button>

          {/* NAIRA BUTTON */}
          <button
            onClick={handlePayNaira}
            className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-green-700 hover:scale-105 transition"
          >
            Pay ₦{NAIRA_AMOUNT} & Mint NFT
          </button>
        </div>

        {/* NOTE */}
        <p className="text-sm text-gray-300 mt-8">
          USDC payments require a connected wallet.  
          Naira payments support local bank & card transfers.
        </p>
      </section>
    </main>
  )
}

