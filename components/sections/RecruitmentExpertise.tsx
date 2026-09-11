import { Code, TrendingUp, Briefcase } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function RecruitmentExpertise() {
  const expertise = [
    {
      icon: Code,
      title: 'IT & Technology',
      items: [
        'IT Services',
        'Product & Technology',
        'Software & Technical Hiring',
        'IT Sales',
        'Technology Support Functions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Sales & Business Development',
      items: [
        'Industrial Sales',
        'Public Sector / Government Sales',
        'Automobile Sales',
        'Agriculture & Agri Products',
        'Consumer Products',
        'Channel Sales',
        'Service Sales',
        'PR & News',
        'Modern Trade',
        'BPO & Telecom Sales',
        'Business Development & Key Account Management'
      ]
    },
    {
      icon: Briefcase,
      title: 'Corporate & Support Functions',
      items: [
        'Human Resources',
        'Finance & Accounts',
        'Administration',
        'Operations',
        'Supply Chain & Procurement',
        'Customer Service',
        'Legal & Compliance',
        'Marketing',
        'Executive & Management Positions'
      ]
    }
  ]

  return (
    <section id="recruitment" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Recruitment Expertise"
          subtitle="Customized recruitment solutions based on your business requirements, organizational structure and talent strategy"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertise.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-900 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From Officer-level roles to Senior Management and Leadership positions, we help organizations 
            identify talent that fits both the role and the culture.
          </p>
        </div>
      </div>
    </section>
  )
}