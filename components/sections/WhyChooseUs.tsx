import { Globe, TrendingUp, Target, Zap, Users, Award, HeartHandshake, Workflow, FileCheck, Lock } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function WhyChooseUs() {
  const reasons = [
    { icon: Globe, title: 'Pan-India & International Client Support' },
    { icon: TrendingUp, title: 'Hiring across Junior to Leadership Levels' },
    { icon: Workflow, title: 'Strong understanding of diverse industries and functions' },
    { icon: Target, title: 'Customized recruitment strategies' },
    { icon: Users, title: 'Access to active and passive talent pools' },
    { icon: Award, title: 'Focus on quality, cultural fit and long-term retention' },
    { icon: HeartHandshake, title: 'Dedicated and responsive client engagement' },
    { icon: Zap, title: 'End-to-end recruitment support' },
    { icon: FileCheck, title: 'HR Operations & People Solutions' },
    { icon: Lock, title: 'Professional and confidential approach' },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Why Choose HRSolutions Mart?"
          centered
        />

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Right Talent. Right Fit. Right Time.
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our strength lies in combining recruitment expertise, market understanding and an HR mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} hover>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-900" size={20} />
                  </div>
                  <p className="font-medium text-gray-900 leading-snug pt-1">{reason.title}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            We don&apos;t just fill positions.
          </p>
          <p className="text-lg md:text-xl">
            We help build teams, strengthen organizations and enable growth.
          </p>
        </div>
      </div>
    </section>
  )
}