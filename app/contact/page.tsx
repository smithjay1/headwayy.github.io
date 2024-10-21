"use client";
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-yellow-400 text-black">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={18} />
            <span>+234 123 456 7890</span>
            <Mail size={18} />
            <span>info@headwaymfb.com</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="hover:text-green-200">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-green-200">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="hover:text-green-200">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-400">
            Headway MFB
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-yellow-400 hover:text-green-200">Home</Link>
            <Link href="/about" className="text-yellow-400 hover:text-green-200">About Us</Link>
            <Link href="/services" className="text-yellow-400 hover:text-green-200">Services</Link>
            <Link href="/contact" className="text-yellow-400 hover:text-green-200">Contact</Link>
            <Link href="/faq" className="hover:text-green-200">FAQ</Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-yellow-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black">
            <Link href="/" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Home</Link>
            <Link href="/about" className="block py-2 px-4 text-yellow-400 hover:text-green-200">About Us</Link>
            <Link href="/services" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Services</Link>
            <Link href="/contact" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Contact</Link>
            <Link href="/faq" className="hover:text-green-200">FAQ</Link>
          </div>
        )}
      </nav>

      <main>
        <section className="py-20 bg-green-200 text-black">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-xl mb-8 text-center">We're here to help. Reach out to us for any inquiries or support.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-yellow-400 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>+234 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-yellow-400 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@headwaymfb.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-yellow-400 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>123 Banking Street, Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-green-200 transition duration-300 flex items-center"
                  >
                    Send Message
                    <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BranchCard
                name="Lagos Main Branch"
                address="123 Banking Street, Lagos"
                phone="+234 123 456 7890"
              />
              <BranchCard
                name="Abuja Branch"
                address="456 Finance Avenue, Abuja"
                phone="+234 987 654 3210"
              />
              <BranchCard
                name="Port Harcourt Branch"
                address="789 Commerce Road, Port Harcourt"
                phone="+234 456 789 0123"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 text-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Headway MFB</h3>
              <p>Empowering communities through financial inclusion since 2010.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-green-200">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-200">About Us</Link></li>
                <li><Link href="/services" className="hover:text-green-200">Services</Link></li>
                <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-green-200">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> 123 Banking Street, Lagos, Nigeria</p>
                <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +234 123 456 7890</p>
                <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> info@headwaymfb.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black text-center">
            <p>&copy; 2023 Headway Microfinance Bank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
}

function BranchCard({ name, address, phone }: BranchCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg text-white">
      <h3 className="text-xl font-bold mb-2 text-yellow-400">{name}</h3>
      <p className="mb-2">{address}</p>
      <p>{phone}</p>
    </div>
  );
}
