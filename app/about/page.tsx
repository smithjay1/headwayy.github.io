"use client";
import { useState } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutUs() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Headway Microfinance Bank</h1>
            <p className="text-xl mb-8 text-center">Empowering communities through financial inclusion since 2010</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Story</h2>
                <p className="mb-4">
                  Headway Microfinance Bank was established in 2010 with a vision to provide accessible financial services to underserved communities in Nigeria. Our journey began with a small team of dedicated professionals who believed in the power of financial inclusion to transform lives and boost economic growth.
                </p>
                <p>
                  Over the years, we have grown into a trusted financial institution, serving thousands of individuals and small businesses across the country. Our commitment to excellence, innovation, and customer satisfaction has been the driving force behind our success.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Images
                  src="/placeholder.svg?height=400&width=600"
                  alt="Headway MFB Team"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission, Vision, and Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-lg text-white">
                <Users className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>To provide accessible and affordable financial services that empower individuals and businesses to achieve their goals and contribute to community development.</p>
              </div>
              <div className="bg-black p-6 rounded-lg text-white">
                <Target className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>To be the leading microfinance institution in Nigeria, recognized for our innovative solutions, customer-centric approach, and positive impact on society.</p>
              </div>
              <div className="bg-black p-6 rounded-lg text-white">
                <Award className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <ul className="list-disc list-inside">
                  <li>Integrity</li>
                  <li>Customer Focus</li>
                  <li>Innovation</li>
                  <li>Teamwork</li>
                  <li>Social Responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AchievementCard number="50,000+" description="Customers Served" />
              <AchievementCard number="₦5 Billion+" description="Loans Disbursed" />
              <AchievementCard number="30+" description="Branches Nationwide" />
              <AchievementCard number="10+" description="Years of Service" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-200 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-xl mb-8">Experience the Headway advantage and be part of our mission to create positive change in communities across Nigeria.</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-yellow-400 transition duration-300"
            >
              Contact Us <ChevronRight className="ml-2" />
            </Link>
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

// function AchievementCard({ number, description }) {
//   return (
//     <div className="bg-green-200 p-6 rounded-lg text-black text-center">
//       <h3 className="text-3xl font-bold mb-2">{number}</h3>
//       <p>{description}</p>
//     </div>
//   )
// }

interface AchievementCardProps {
  number: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ number, description }) => {
  return (
    <div className="bg-green-200 p-6 rounded-lg text-black text-center">
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p>{description}</p>
    </div>
  );
};
