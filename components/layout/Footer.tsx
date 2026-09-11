import { Mail, Phone } from 'lucide-react'
import Logo from '../ui/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <Logo footer />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional Recruitment and HR Services firm building high-performing teams for organizations across India and internationally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#recruitment" className="text-gray-300 hover:text-white transition-colors">
                  Recruitment Services
                </a>
              </li>
              <li>
                <a href="#hr-solutions" className="text-gray-300 hover:text-white transition-colors">
                  HR Solutions
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4 text-white transition-all duration-300 flash-contact-target">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:hr@hrsolutionsmart.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  hr@hrsolutionsmart.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919354264146"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={15.5} />
                  Nidhi Sharma: +91-9354264146
                  
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919354264146"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={15.5} />
                  Nitesh Verma: +91-9560855448
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} HRSolutions Mart. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Recruitment | Talent Acquisition | HR Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
