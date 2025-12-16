// app/verify/page.tsx

'use client'

import { useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/navbar'

export default function VerifyPage() {
  const [wallet, setWallet] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'email' | 'otp'>('email')

  const handleEmailSubmit = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-email`, {
        wallet,
        email
      })
      setStep('otp')
      alert('OTP sent to your email')
    } catch (err) {
      console.error(err)
      alert('Failed to send OTP')
    }
  }

  const handleOtpSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`, {
        wallet,
        otp
      })
      if (res.data.success) {
        alert('Email verified successfully! You can now take the test.')
      } else {
        alert('Invalid OTP')
      }
    } catch (err) {
      console.error(err)
      alert('OTP verification failed')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      {/* Navbar */}
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-8">Verify Your Email</h1>

        {step === 'email' && (
          <div className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Wallet Address"
              value={wallet}
              onChange={e => setWallet(e.target.value)}
              className="px-4 py-3 rounded-xl text-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl text-gray-800"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-white text-indigo-700 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 'otp' && (
          <div className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className="px-4 py-3 rounded-xl text-gray-800"
            />
            <button
              onClick={handleOtpSubmit}
              className="bg-white text-indigo-700 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
            >
              Verify OTP
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
