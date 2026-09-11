import { Target, Users, Globe, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: 'Diverse Industries',
      description: 'Experience across multiple sectors and functions'
    },
    {
      icon: Globe,
      title: 'Pan-India & International',
      description: 'Supporting clients across national and global markets'
    },
    {
      icon: Target,
      title: 'All Levels',
      description: 'From entry-level to leadership positions'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partners',
      description: 'Trusted extension of your HR team'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="About HRSolutions Mart"
          subtitle="Professional Recruitment and HR Services firm supporting organizations in building high-performing teams"
          centered
        />

        <div className="max-w-4xl mx-auto mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              HRSolutions Mart is a professional Recruitment and HR Services firm supporting start-ups, SMEs, 
              MNCs and leading organizations in building high-performing teams.
            </p>
            <p>
              With experience across diverse industries and functions, we support organizations in identifying, 
              attracting and retaining the right talent at every level — from junior and entry-level positions to 
              middle management, senior management and leadership roles.
            </p>
            <p>
              Our reach extends across national and international clients, enabling us to understand different 
              business environments, talent markets, organizational cultures and hiring requirements.
            </p>
            <p className="font-semibold text-primary-900">
              At HRSolutions Mart, we believe our role goes far beyond headhunting. Our objective is to become a 
              trusted extension of our clients&apos; HR and Talent Acquisition teams and contribute meaningfully to 
              their team-building and business growth journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} hover>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-primary-900" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}