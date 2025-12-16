// app/test/page.tsx

'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/navbar'

export default function TestPage() {
  const [wallet, setWallet] = useState('')
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Replace with your logic to get connected wallet (wagmi or ethers)
    const storedWallet = localStorage.getItem('wallet') || ''
    setWallet(storedWallet)

    if (storedWallet) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/is-verified?wallet=${storedWallet}`)
        .then(res => {
          setVerified(res.data.verified)
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setVerified(false)
          setLoading(false)
        })
    } else {
      setVerified(false)
      setLoading(false)
    }
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold mb-8">Knowledge Test</h1>

        {!wallet && <p className="text-red-300 mb-6">Connect your wallet to access the test.</p>}
        {wallet && !verified && (
          <p className="text-red-300 mb-6">
            Your email is not verified. Please verify your email to access the test.
          </p>
        )}

        {wallet && verified && (
          <a
            href="https://your-test-link.com" // Replace with actual test URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Take the Test
          </a>
        )}
      </section>

      <footer className="bg-black/30 py-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Knowledge Chain. All rights reserved.
      </footer>
    </main>
  )
}
