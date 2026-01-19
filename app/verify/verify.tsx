'use client'

import { useState } from 'react'
import { useBlockchain } from "../../blockchain/blockchainContext";
import { createProfile, verifyEmail } from '@/api/user';

export default function Verify() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [isError, setIsError] = useState(false)


  const { walletAddress, } = useBlockchain(); 

  const handleEmailSubmit = async () => {
    try {
      if (walletAddress == null) {
        alert("Connect your wallet")
        // setIsError(true)
        return
      }

      if (name == '' || phoneNumber == '' || email == "") {
        alert("Fill all the field")
        // setIsError(true)
        return
      }

      createProfile({walletAddress: walletAddress, name: name, email: email, phoneNumber: phoneNumber}).then((res) => {
        console.log("res", res)
        alert(res.data.message)
        setStep('otp')
      }).catch((e) => {
        alert("unable to create profile")
        console.log("error", e)
        return
      })
    } catch (err) {
      console.error(err)
      alert('Failed to send OTP')
    }
  }

  const handleOtpSubmit = async () => {
    try {
      if (walletAddress == null) {
        alert("Connect your wallet")
        // setIsError(true)
        return
      }

      if (otp == '' || email == "") {
        alert("Fill all the field")
        // setIsError(true)
        return
      }

      verifyEmail({ email: email, otp: otp}).then((res) => {
        console.log("res", res)
        alert("Email verified successfully")
        setStep('otp')
      }).catch((e) => {
        alert("unable to verify email")
        console.log("error", e)
        return
      })
    } catch (err) {
      console.error(err)
      alert('Failed to verify OTP')
      return
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">

      <section className="flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-8">Verify Your Email</h1>

        {step === 'email' && (
          <div className="flex flex-col gap-4 w-full max-w-md">

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label
              className={`text-sm font-semibold ${
                isError ? "text-red-500" : "text-gray-200"
              }`}
            >
              Full Name
            </label>
        
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`
                px-4 py-3 rounded-xl border
                ${isError
                  ? "text-red-500 placeholder-red-300 border-red-300 focus:ring-red-400"
                  : "text-white/80 placeholder-gray-400 border-gray-300 focus:ring-indigo-400"}
                focus:outline-none focus:ring-2
              `}
              placeholder="Enter your full name"
            />
          </div>
        
          {/* Phone Number */}
          <div className="flex flex-col gap-1">
            <label
              className={`text-sm font-semibold ${
                isError ? "text-red-500" : "text-gray-200"
              }`}
            >
              Phone Number
            </label>
        
            <input
              type="text"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className={`
                px-4 py-3 rounded-xl border
                ${isError
                  ? "text-red-500 placeholder-red-300 border-red-300 focus:ring-red-400"
                  : "text-white/80 placeholder-gray-400 border-gray-300 focus:ring-indigo-400"}
                focus:outline-none focus:ring-2
              `}
              placeholder="Enter your phone number"
            />
          </div>
        
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              className={`text-sm font-semibold ${
                isError ? "text-red-500" : "text-gray-200"
              }`}
            >
              Email Address
            </label>
        
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`
                px-4 py-3 rounded-xl border
                ${isError
                  ? "text-red-500 placeholder-red-300 border-red-300 focus:ring-red-400"
                  : "text-white/80 placeholder-gray-400 border-gray-300 focus:ring-indigo-400"}
                focus:outline-none focus:ring-2
              `}
              placeholder="Enter your email"
            />
          </div>
        
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
              <div className="flex flex-col gap-1">
              <label
                className={`text-sm font-semibold ${
                  isError ? "text-red-500" : "text-gray-200"
                }`}
              >
                OTP
              </label>
          
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                className={`
                  px-4 py-3 rounded-xl border
                  ${isError
                    ? "text-red-500 placeholder-red-300 border-red-300 focus:ring-red-400"
                    : "text-white/80 placeholder-gray-400 border-gray-300 focus:ring-indigo-400"}
                  focus:outline-none focus:ring-2
                `}
                placeholder="Enter OTP"
              />
            </div>

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
