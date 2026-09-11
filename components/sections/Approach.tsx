import { Target, Building2, Heart, Lightbulb, UserCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function Approach() {
  const steps = [
    { icon: Target, label: 'The Role' },
    { icon: Building2, label: 'The Organization' },
    { icon: Heart, label: 'The Culture' },
    { icon: Lightbulb, label: 'The Business Need' },
    { icon: UserCheck, label: 'The Candidate' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Approach – Beyond Recruitment"
          centered
        />

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            We understand that successful hiring is not simply about finding a candidate with the right qualifications.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our approach focuses on understanding:</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm">
                      <Icon className="text-primary-900" size={20} />
                      <span className="font-medium text-gray-900">{step.label}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <span className="text-primary-900 text-2xl hidden sm:inline">→</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We first invest time in understanding the client&apos;s organization, business objectives, team structure, 
              role expectations and workplace culture.
            </p>
            <p>
              This enables us to identify candidates who possess not only the required skills and experience, but 
              also the right mindset, personality, values and cultural alignment to build a successful long-term 
              association.
            </p>
            <p className="font-semibold text-primary-900">
              Our understanding of market realities, industry trends and talent availability enables us to provide 
              clients with practical and market-relevant recruitment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}