// components/Navbar.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import WalletButton from '@/components/walletButton'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent px-4 sm:px-6 md:px-8 py-4 md:py-6">
      <div className="flex items-center justify-between">
        {/* Logo linking to Home */}
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide">
          Knowledge Chain
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:underline text-sm sm:text-base">About</Link>
          <Link href="/contact" className="hover:underline text-sm sm:text-base">Contact</Link>
          <Link href="/verify" className="hover:underline text-sm sm:text-base">Profile</Link>
          <WalletButton />
          <Link
            href="/mint"
            className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold shadow-lg hover:bg-gray-100 text-sm sm:text-base"
          >
            Mint NFT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden gap-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/verify" className="hover:underline">Profile</Link>
          <WalletButton />
          <Link
            href="/mint"
            className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold shadow-lg hover:bg-gray-100"
          >
            Mint NFT
          </Link>
        </div>
      )}
    </nav>
  )
}
