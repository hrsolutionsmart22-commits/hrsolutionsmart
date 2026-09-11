import { Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Let's Build Your Next Great Team"
          subtitle="Whether you are looking to hire your first employee, build a new team, strengthen your leadership pipeline or scale your organization, HRSolutions Mart is ready to support you."
          centered
          light
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail size={24} />
                  Email Us
                </h3>
                <a 
                  href="mailto:hr@hrsolutionsmart.com"
                  className="text-lg text-gray-100 hover:text-white transition-colors block mb-2"
                >
                  hr@hrsolutionsmart.com
                </a>
                <p className="text-sm text-gray-300">We typically respond within 24 hours</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Phone size={24} />
                  Call Us
                </h3>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="tel:+919560855448"
                      className="text-lg text-gray-100 hover:text-white transition-colors block"
                    >
                      +91-9560855448
                    </a>
                    <p className="text-sm text-gray-300">Neetu Verma, Director</p>
                  </div>
                  <div>
                    <a 
                      href="tel:+919354264146"
                      className="text-lg text-gray-100 hover:text-white transition-colors block"
                    >
                      +91-9354264146
                    </a>
                    <p className="text-sm text-gray-300">Nidhi Sharma, Director</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="mailto:hr@hrsolutionsmart.com"
                  className="bg-white text-primary-900 hover:bg-gray-100"
                >
                  <MessageCircle size={20} />
                  Send us an Email
                </Button>
                <Button 
                  href="tel:+919560855448"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-primary-900"
                >
                  <Phone size={20} />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-200 text-lg italic">
              &ldquo;Finding, Connecting, Building Success&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}