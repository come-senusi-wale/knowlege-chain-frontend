'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { verifyNairaPayment } from '@/api/user'

export default function VerifyPayment() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [reference, setReference] = useState('')
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // 1️⃣ Get reference + wallet from URL / localStorage
  useEffect(() => {
    const refFromUrl = searchParams.get('reference')
    const wallet = searchParams.get('wallet')
    // const refFromStorage = localStorage.getItem('paystack_reference')
    // const walletFromStorage = localStorage.getItem('walletAddress')

    if (refFromUrl) {
      setReference(refFromUrl)
    } 

    if (wallet) {
      setWalletAddress(wallet)
    }
  }, [searchParams])

  // 2️⃣ Verify payment
  const handleVerifyPayment = async () => {
    if (!reference) {
      alert('Payment reference not found')
      return
    }

    if (!walletAddress) {
      alert('Wallet address not found. Please reconnect wallet.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
    //   await axios.post(
    //     `${process.env.NEXT_PUBLIC_API_URL}/payment/verify`,
    //     {
    //       reference,
    //       walletAddress,
    //     }
    //   )

    //   setMessage('✅ Payment verified successfully')

    //   // Clear stored reference
    //   localStorage.removeItem('paystack_reference')

    //   setTimeout(() => {
    //     router.push('/mint-success')
    //   }, 1500)

        verifyNairaPayment({walletAddress: walletAddress, reference: reference }).then((res) => {
            console.log("ress", res)
            setMessage('✅  Payment verified successfully')
            setTimeout(() => {
                router.push('/mint')
            }, 1500)
        }).catch((e) => {
            alert("unable to create profile")
            console.log("error", e)
            return
        })
    } catch (err: any) {
      setMessage(
        err?.response?.data?.message ||
          '❌ Payment verification failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Verify Your Payment
        </h1>

        <p className="text-sm text-gray-600">
          Click the button below to verify your Naira payment.
        </p>

        {/* Reference */}
        <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 break-all">
          <strong>Reference:</strong> {reference || 'Not found'}
        </div>

        {/* Wallet (read-only) */}
        <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-700 break-all">
          <strong>Wallet:</strong>{' '}
          {walletAddress || 'Wallet not found'}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerifyPayment}
          disabled={loading || !walletAddress}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Verify Payment'}
        </button>

        {/* Message */}
        {message && (
          <p className="text-sm text-green-500 text-center mt-2">{message}</p>
        )}
      </div>
    </main>
  )
}

