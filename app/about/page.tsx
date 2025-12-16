'use client'

import Navbar from '@/components/navbar'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold mb-8 text-center">
          About Knowledge Chain
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Knowledge Chain is a blockchain-powered platform designed to validate
          knowledge in a transparent, secure, and verifiable way. By combining
          NFTs, stablecoin payments, and identity verification, we ensure that
          every participant is uniquely identified and fairly assessed.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Users begin by minting a Knowledge NFT on the Polygon network using USDC.
          This NFT represents verified participation and unlocks access to
          knowledge-based tests and assessments.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed mb-12">
          After minting, users verify their identity via email authentication.
          Once verified, they gain access to exclusive tests that measure real
          understanding — not just participation.
        </p>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To create a trusted system where knowledge, learning, and
              participation can be verified on-chain without manipulation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Why Blockchain?</h3>
            <p className="text-gray-200">
              Blockchain ensures transparency, immutability, and fairness.
              NFTs prevent duplicate participation while Polygon keeps costs low
              and transactions fast.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Knowledge Chain. All rights reserved.
      </footer>
    </main>
  )
}
