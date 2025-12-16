// app/page.tsx

'use client'


import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Prove Knowledge <br /> On the Blockchain
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Knowledge Chain allows you to mint an NFT by paying USDC, verify your identity,
          and access exclusive knowledge-based tests secured on Polygon.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/mint"
            className="bg-white text-indigo-700 px-8 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="border border-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white text-gray-800 py-20 px-6">
        <h3 className="text-4xl font-bold text-center mb-16">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Pay USDC', desc: 'Pay a small USDC fee securely on Polygon.' },
            { title: 'Mint NFT', desc: 'Receive your Knowledge Chain NFT.' },
            { title: 'Verify Email', desc: 'Confirm your identity with OTP verification.' },
            { title: 'Take Test', desc: 'Access and complete the knowledge test.' }
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl font-extrabold text-indigo-600">{i + 1}</div>
              <h4 className="mt-4 text-xl font-bold">{step.title}</h4>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 text-center">
        <h3 className="text-4xl font-bold">Ready to Start?</h3>
        <p className="mt-4 text-gray-200">
          Mint your Knowledge NFT and prove what you know.
        </p>
        <Link
          href="/test"
          className="inline-block mt-8 bg-white text-indigo-700 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          Test
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Knowledge Chain. All rights reserved.
      </footer>
    </main>
  )
}
