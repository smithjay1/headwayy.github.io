"use client";
import { useState } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, PiggyBank, Briefcase, Users, CreditCard, Landmark, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-xl mb-8 text-center">Comprehensive financial solutions tailored to your needs</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<PiggyBank className="w-12 h-12 text-yellow-400" />}
                title="Savings Accounts"
                description="Secure your future with our range of savings accounts designed to help you meet your financial goals."
              />
              <ServiceCard
                icon={<Briefcase className="w-12 h-12 text-yellow-400" />}
                title="Business Loans"
                description="Fuel your business growth with our flexible and competitive business loan options."
              />
              <ServiceCard
                icon={<Users className="w-12 h-12 text-yellow-400" />}
                title="Personal Loans"
                description="Access quick and affordable personal loans to meet your immediate financial needs."
              />
              <ServiceCard
                icon={<CreditCard className="w-12 h-12 text-yellow-400" />}
                title="Mobile Banking"
                description="Manage your accounts, transfer funds, and pay bills conveniently from your mobile device."
              />
              <ServiceCard
                icon={<Landmark className="w-12 h-12 text-yellow-400" />}
                title="Fixed Deposits"
                description="Maximize your returns with our competitive fixed deposit rates and flexible tenure options."
              />
              <ServiceCard
                icon={<BarChart className="w-12 h-12 text-yellow-400" />}
                title="Financial Advisory"
                description="Get expert advice on financial planning, investments, and wealth management."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard title="Competitive Rates" description="We offer some of the best interest rates in the market." />
              <FeatureCard title="Quick Approval" description="Fast-track your financial needs with our quick approval process." />
              <FeatureCard title="Personalized Service" description="Our team provides tailored solutions to meet your unique needs." />
              <FeatureCard title="Secure Transactions" description="Your financial security is our top priority." />
            </div>
          </div>
        </section>

        <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">How to Apply</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StepCard
        number={1} // Pass as a number
        title="Choose a Service"
        description="Select the service that best fits your financial needs."
      />
      <StepCard
        number={2} // Pass as a number
        title="Submit Application"
        description="Fill out our simple online application or visit a branch."
      />
      <StepCard
        number={3} // Pass as a number
        title="Get Approved"
        description="Our team will review your application and provide quick feedback."
      />
    </div>
    <div className="text-center mt-12">
      <Link
        href="/contact"
        className="inline-flex items-center bg-green-200 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
      >
        Apply Now <ChevronRight className="ml-2" />
      </Link>
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

// Type for ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-green-200 p-6 rounded-lg text-black transition duration-300 hover:shadow-xl">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

// Type for FeatureCard props
interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg text-white text-center transition duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Type for StepCard props
interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-green-200 p-6 rounded-lg text-black text-center transition duration-300 hover:shadow-xl">
      <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
