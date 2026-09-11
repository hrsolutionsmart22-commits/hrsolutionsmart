import { ArrowRight, Mail, Phone } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            Professional Recruitment & HR Solutions
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building High-Performing Teams for Your Success
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed">
            Recruitment | Talent Acquisition | HR Solutions
          </p>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Supporting start-ups, SMEs, MNCs and leading organizations across India and internationally 
            in identifying, attracting and retaining the right talent at every level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="#contact" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl">
              Get Started <ArrowRight size={20} />
            </Button>
            <Button href="#about" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary-900">
              Learn More
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a 
              href="mailto:hrsolutionsmart22@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <Mail size={18} />
              hrsolutionsmart22@gmail.com
            </a>
            <a 
              href="tel:+919560855448"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <Phone size={18} />
              +91-9560855448
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full" />
    </section>
  )
}