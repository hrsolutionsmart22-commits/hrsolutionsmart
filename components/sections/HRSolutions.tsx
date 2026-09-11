import { Users, FileCheck, BarChart, MessageSquare, Shield, FileText, UserCheck, Calendar, Repeat } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function HRSolutions() {
  const solutions = [
    { icon: Users, title: 'Employee Connect & Engagement' },
    { icon: BarChart, title: 'Performance Management Systems' },
    { icon: UserCheck, title: 'Employee Onboarding & Offboarding' },
    { icon: FileCheck, title: 'Payroll Coordination & HR Compliance Support' },
    { icon: FileText, title: 'HR Documentation' },
    { icon: MessageSquare, title: 'HR Communication' },
    { icon: Shield, title: 'HR Policy & Process Support' },
    { icon: Calendar, title: 'Appointment to Retirement Documentation' },
    { icon: Repeat, title: 'Employee Lifecycle Management' },
  ]

  return (
    <section id="hr-solutions" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Our HR Solutions"
          subtitle="End-to-end HR support to organizations looking to strengthen their people processes"
          centered
        />

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">HR Operations Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-900" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 leading-snug">{solution.title}</h4>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="bg-primary-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our HR solutions can be customized according to the size, structure and requirements of your organization.
          </p>
        </div>
      </div>
    </section>
  )
}