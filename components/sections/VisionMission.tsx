import { Eye, Target } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function VisionMission() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Our Vision & Mission"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted global recruitment and HR solutions partner, recognized for quality talent, 
              professional service and long-term client relationships.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To connect organizations with the right talent and provide practical, reliable and customized HR 
              solutions that create value for both businesses and employees.
            </p>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-center text-lg">
              We believe every successful organization is built by the right people.
            </p>
            <p>
              Our commitment is to understand our clients&apos; businesses deeply, identify the right talent and provide 
              solutions that contribute to stronger teams, better employee experiences and sustainable business growth.
            </p>
            <p className="font-semibold text-primary-900">
              We aim to build long-term partnerships rather than transactional relationships, working closely with 
              our clients as a trusted recruitment and HR solutions partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}