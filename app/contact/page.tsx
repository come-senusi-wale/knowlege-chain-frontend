// app/contact/page.tsx

'use client'

import Navbar from '@/components/navbar'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-200 mb-16">
          Have questions about Knowledge Chain? Reach out and we’ll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-200">support@knowledgechain.io</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-200">Telegram / Discord (Coming soon)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-200">Global · Built on Polygon</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 outline-none"
              />
            </div>

            <button
              type="button"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-xl font-bold shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Knowledge Chain. All rights reserved.
      </footer>
    </main>
  )
}
