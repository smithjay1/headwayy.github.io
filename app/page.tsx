"use client"
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronLeft, PiggyBank, Briefcase, BarChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';


interface SlideData {
  image: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  title: string;
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: SlideData[] = [
    {
      image: "/image/Slide1.jpg?height=600&width=1200",
      title: "Welcome to Headway Microfinance Bank",
      description: "Empowering communities through financial inclusion"
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Secure Your Future",
      description: "Open a savings account today and watch your money grow"
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Grow Your Business",
      description: "Get quick access to business loans and expand your enterprise"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-yellow-400 text-black">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={18} />
            <span className="text-sm">+234 123 456 7890</span>
            <Mail size={18} />
            <span className="text-sm">info@headwaymfb.com</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="hover:text-green-200 transition duration-300">
              <Facebook size={18} aria-label="Facebook" />
            </Link>
            <Link href="#" className="hover:text-green-200 transition duration-300">
              <Twitter size={18} aria-label="Twitter" />
            </Link>
            <Link href="#" className="hover:text-green-200 transition duration-300">
              <Instagram size={18} aria-label="Instagram" />
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-black py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-400">
            Headway MFB
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-yellow-400 hover:text-green-200 transition duration-300">Home</Link>
            <Link href="/about" className="text-yellow-400 hover:text-green-200 transition duration-300">About Us</Link>
            <Link href="/services" className="text-yellow-400 hover:text-green-200 transition duration-300">Services</Link>
            <Link href="/contact" className="text-yellow-400 hover:text-green-200 transition duration-300">Contact</Link>
            <Link href="/faq" className="hover:text-green-200">FAQ</Link>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-yellow-400 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black">
            <Link href="/" className="block py-2 px-4 text-yellow-400 hover:text-green-200 transition duration-300">Home</Link>
            <Link href="/about" className="block py-2 px-4 text-yellow-400 hover:text-green-200 transition duration-300">About Us</Link>
            <Link href="/services" className="block py-2 px-4 text-yellow-400 hover:text-green-200 transition duration-300">Services</Link>
            <Link href="/contact" className="block py-2 px-4 text-yellow-400 hover:text-green-200 transition duration-300">Contact</Link>
            <Link href="/faq" className="hover:text-green-200">FAQ</Link>
          </div>
        )}
      </nav>

      <main>
        <section className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h1>
                  <p className="text-xl mb-8 text-white">{slide.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-200 transition duration-300"
                  >
                    Our Services <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<PiggyBank className="w-12 h-12 text-yellow-400" />}
                title="Savings Account"
                description="Secure your future with our high-yield savings accounts."
              />
              <ServiceCard
                icon={<Briefcase className="w-12 h-12 text-yellow-400" />}
                title="Loans"
                description="Get quick access to funds for personal or business needs."
              />
              <ServiceCard
                icon={<BarChart className="w-12 h-12 text-yellow-400" />}
                title="Investments"
                description="Grow your wealth with our diverse investment options."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Headway MFB?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard title="Low Interest Rates" />
              <FeatureCard title="Quick Loan Approval" />
              <FeatureCard title="Flexible Repayment" />
              <FeatureCard title="Financial Advisory" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Ready to get started?</h2>
            <p className="text-xl mb-8">Join Headway MFB today and take control of your financial future.</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-green-200 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
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
                <li><Link href="/" className="hover:text-green-200 transition duration-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-200 transition duration-300">About Us</Link></li>
                <li><Link href="/services" className="hover:text-green-200 transition duration-300">Services</Link></li>
                <li><Link href="/contact" className="hover:text-green-200 transition duration-300">Contact</Link></li>
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

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-green-200 p-6 rounded-lg text-black text-center transition duration-300 hover:shadow-xl">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link
        href="/services"
        className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400 transition duration-300"
      >
        Learn More
      </Link>
    </div>
  )
}

function FeatureCard({ title }: FeatureCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg text-center transition duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
    </div>
  )
}