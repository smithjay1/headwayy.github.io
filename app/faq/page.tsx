// "use client";
// import { useState } from 'react'
// import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown, ChevronUp } from 'lucide-react'
// import Link from 'next/link'

// export default function FAQ() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [openQuestion, setOpenQuestion] = useState(null)

//   const faqData = [
//     {
//       question: "What is Headway Microfinance Bank?",
//       answer: "Headway Microfinance Bank is a licensed financial institution that provides a range of banking services to individuals and small businesses. We focus on promoting financial inclusion and empowering communities through accessible financial solutions."
//     },
//     {
//       question: "How do I open an account with Headway MFB?",
//       answer: "To open an account, visit any of our branches with a valid ID, proof of address, and a passport photograph. You can also start the process online through our website. Our staff will guide you through the account opening process."
//     },
//     {
//       question: "What types of loans do you offer?",
//       answer: "We offer various types of loans including personal loans, business loans, agricultural loans, and group loans. Each loan type has specific requirements and terms. Please visit our Services page or contact us for more detailed information."
//     },
//     {
//       question: "How long does it take to process a loan application?",
//       answer: "The processing time for loan applications varies depending on the type and amount of loan. Generally, we strive to process applications within 3-5 business days. However, some loans may be approved faster, while others might require additional documentation."
//     },
//     {
//       question: "Do you offer mobile banking services?",
//       answer: "Yes, we offer mobile banking services. Our mobile app allows you to check your account balance, transfer funds, pay bills, and perform other banking operations from your smartphone. You can download our app from the App Store or Google Play Store."
//     },
//     {
//       question: "What interest rates do you offer on savings accounts?",
//       answer: "Our interest rates on savings accounts vary depending on the type of account and the balance maintained. We offer competitive rates that are reviewed periodically. Please contact our customer service or visit a branch for the most current rates."
//     },
//     {
//       question: "How can I report a lost or stolen ATM card?",
//       answer: "If your ATM card is lost or stolen, please call our 24/7 customer service line immediately at +234 123 456 7890. You can also visit any of our branches during business hours to report the issue and request a replacement card."
//     },
//     {
//       question: "Does Headway MFB offer financial literacy programs?",
//       answer: "Yes, we are committed to improving financial literacy in our communities. We regularly organize workshops and seminars on topics such as budgeting, saving, and responsible borrowing. Check our website or inquire at your local branch for upcoming programs."
//     }
//   ]

//   const toggleQuestion = (index) => {
//     if (openQuestion === index) {
//       setOpenQuestion(null)
//     } else {
//       setOpenQuestion(index)
//     }
//   }

//   return (
//     <div className="bg-black text-white min-h-screen">
//       <header className="bg-yellow-400 text-black">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Phone size={18} />
//             <span>+234 123 456 7890</span>
//             <Mail size={18} />
//             <span>info@headwaymfb.com</span>
//           </div>
//           <div className="hidden md:flex space-x-4">
//             <Link href="#" className="hover:text-green-200">
//               <Facebook size={18} />
//             </Link>
//             <Link href="#" className="hover:text-green-200">
//               <Twitter size={18} />
//             </Link>
//             <Link href="#" className="hover:text-green-200">
//               <Instagram size={18} />
//             </Link>
//           </div>
//         </div>
//       </header>

//       <nav className="bg-black py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-yellow-400">
//             Headway MFB
//           </Link>
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="text-yellow-400 hover:text-green-200">Home</Link>
//             <Link href="/about" className="text-yellow-400 hover:text-green-200">About Us</Link>
//             <Link href="/services" className="text-yellow-400 hover:text-green-200">Services</Link>
//             <Link href="/contact" className="text-yellow-400 hover:text-green-200">Contact</Link>
//             <Link href="/faq" className="text-yellow-400 hover:text-green-200">FAQ</Link>
//           </div>
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-yellow-400">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden mt-2 bg-black">
//             <Link href="/" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Home</Link>
//             <Link href="/about" className="block py-2 px-4 text-yellow-400 hover:text-green-200">About Us</Link>
//             <Link href="/services" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Services</Link>
//             <Link href="/contact" className="block py-2 px-4 text-yellow-400 hover:text-green-200">Contact</Link>
//             <Link href="/faq" className="block py-2 px-4 text-yellow-400 hover:text-green-200">FAQ</Link>
//           </div>
//         )}
//       </nav>

//       <main>
//         <section className="py-20 bg-green-200 text-black">
//           <div className="container mx-auto px-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
//             <p className="text-xl mb-8 text-center">Find answers to common questions about our services and operations.</p>
//           </div>
//         </section>

//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto">
//               {faqData.map((faq, index) => (
//                 <div key={index} className="mb-4">
//                   <button
//                     className="flex justify-between items-center w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
//                     onClick={() => toggleQuestion(index)}
//                   >
//                     <span className="text-lg font-semibold">{faq.question}</span>
//                     {openQuestion === index ? (
//                       <ChevronUp className="text-yellow-400" size={24} />
//                     ) : (
//                       <ChevronDown className="text-yellow-400" size={24} />
//                     )}
//                   </button>
//                   {openQuestion === index && (
//                     <div className="p-4 bg-gray-700">
//                       <p>{faq.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-16 bg-yellow-400 text-black">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
//             <p className="text-xl mb-8">Our customer support team is here to help you.</p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-green-200 hover:text-black transition duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-yellow-400 text-black py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Headway MFB</h3>
//               <p>Empowering communities through financial inclusion since 2010.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/" className="hover:text-green-200">Home</Link></li>
//                 <li><Link href="/about" className="hover:text-green-200">About Us</Link></li>
//                 <li><Link href="/services" className="hover:text-green-200">Services</Link></li>
//                 <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
//                 <li><Link href="/faq" className="hover:text-green-200">FAQ</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//               <address className="not-italic">
//                 <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> 123 Banking Street, Lagos, Nigeria</p>
//                 <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +234 123 456 7890</p>
//                 <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> info@headwaymfb.com</p>
//               </address>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-black text-center">
//             <p>&copy; 2023 Headway Microfinance Bank. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
"use client";
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { MapPin } from 'react-icons/fa';

export default function FAQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Allow null and number

  const faqData = [
    {
      question: "What is Headway Microfinance Bank?",
      answer: "Headway Microfinance Bank is a licensed financial institution that provides a range of banking services to individuals and small businesses. We focus on promoting financial inclusion and empowering communities through accessible financial solutions."
    },
    {
      question: "How do I open an account with Headway MFB?",
      answer: "To open an account, visit any of our branches with a valid ID, proof of address, and a passport photograph. You can also start the process online through our website. Our staff will guide you through the account opening process."
    },
    {
      question: "What types of loans do you offer?",
      answer: "We offer various types of loans including personal loans, business loans, agricultural loans, and group loans. Each loan type has specific requirements and terms. Please visit our Services page or contact us for more detailed information."
    },
    {
      question: "How long does it take to process a loan application?",
      answer: "The processing time for loan applications varies depending on the type and amount of loan. Generally, we strive to process applications within 3-5 business days. However, some loans may be approved faster, while others might require additional documentation."
    },
    {
      question: "Do you offer mobile banking services?",
      answer: "Yes, we offer mobile banking services. Our mobile app allows you to check your account balance, transfer funds, pay bills, and perform other banking operations from your smartphone. You can download our app from the App Store or Google Play Store."
    },
    {
      question: "What interest rates do you offer on savings accounts?",
      answer: "Our interest rates on savings accounts vary depending on the type of account and the balance maintained. We offer competitive rates that are reviewed periodically. Please contact our customer service or visit a branch for the most current rates."
    },
    {
      question: "How can I report a lost or stolen ATM card?",
      answer: "If your ATM card is lost or stolen, please call our 24/7 customer service line immediately at +234 123 456 7890. You can also visit any of our branches during business hours to report the issue and request a replacement card."
    },
    {
      question: "Does Headway MFB offer financial literacy programs?",
      answer: "Yes, we are committed to improving financial literacy in our communities. We regularly organize workshops and seminars on topics such as budgeting, saving, and responsible borrowing. Check our website or inquire at your local branch for upcoming programs."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

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
            <Link href="/faq" className="text-yellow-400 hover:text-green-200">FAQ</Link>
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
            <Link href="/faq" className="block py-2 px-4 text-yellow-400 hover:text-green-200">FAQ</Link>
          </div>
        )}
      </nav>

      <main>
        <section className="py-20 bg-green-200 text-black">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-xl mb-8 text-center">Find answers to common questions about our services and operations.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="text-yellow-400" size={24} />
                    ) : (
                      <ChevronDown className="text-yellow-400" size={24} />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="p-4 bg-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl mb-8">Our customer support team is here to help you.</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-green-200 hover:text-black transition duration-300"
            >
              Contact Us
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
              <p>+234 123 456 7890</p>
              <p>info@headwaymfb.com</p>
              <p>123 Main St, City, Country</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
