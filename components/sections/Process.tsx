import { Search, Users, ClipboardCheck, Calendar, Shield, Handshake, UserPlus } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Understanding the Requirement',
      description: 'We work closely with the client to establish a clear understanding of the position, responsibilities, experience requirements and success criteria.'
    },
    {
      number: '02',
      icon: Users,
      title: 'Customized Talent Search',
      description: 'We develop a tailor-made search strategy to identify suitable candidates, including passive talent who may not be actively looking for opportunities.'
    },
    {
      number: '03',
      icon: ClipboardCheck,
      title: 'Candidate Evaluation',
      description: 'Candidates are carefully assessed against the defined requirements. Profiles are presented with relevant insights and consultant observations.'
    },
    {
      number: '04',
      icon: Calendar,
      title: 'Interview Coordination',
      description: 'We facilitate the complete interaction between the client and candidates and ensure smooth coordination throughout the interview process.'
    },
    {
      number: '05',
      icon: Shield,
      title: 'Reference & Background Checks',
      description: 'Where required, we support extensive reference checks to provide additional confidence in the selection decision.'
    },
    {
      number: '06',
      icon: Handshake,
      title: 'Offer & Negotiation Support',
      description: 'We assist in offer discussions, compensation negotiations and candidate engagement to support successful closure.'
    },
    {
      number: '07',
      icon: UserPlus,
      title: 'Joining & Post-Selection Support',
      description: 'Our engagement does not end with candidate selection. We remain connected through the joining process to help ensure a smooth transition.'
    }
  ]

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-primary-950 to-primary-900 text-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Search & Selection Process"
          subtitle="An integrated recruitment process designed to deliver quality talent efficiently and professionally"
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-900" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white/40">{step.number}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}