import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Skyline Yoga Studio. Please read our terms and conditions before using our services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Placeholder Notice */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="container-custom">
          <p className="text-center text-sm text-yellow-800">
            <strong>Portfolio Placeholder:</strong> This is a sample terms of service for portfolio demonstration purposes only. This is not a real or legally binding terms of service.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-700 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-text-muted mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              By accessing and using Skyline Yoga Studio's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">2. Use License</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on Skyline Yoga Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">3. Class Bookings and Cancellations</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              All class bookings are subject to availability. We require 2 hours notice for class cancellations. Late cancellations or no-shows will be charged the full class fee. Monthly members receive one free late cancellation per month.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">4. Health and Safety</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              By participating in our classes, you acknowledge that yoga involves physical activity and that there is an inherent risk of injury. You agree to:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>Consult with your healthcare provider before beginning any exercise program</li>
              <li>Listen to your body and modify or stop any pose that causes pain or discomfort</li>
              <li>Inform your instructor of any injuries, limitations, or health conditions</li>
              <li>Follow all safety instructions provided by instructors</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">5. Payment Terms</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Payment is due at the time of booking or before the start of class. We accept cash, credit cards, and digital payments. All sales are final unless otherwise specified. Refunds are at the discretion of management and may be subject to processing fees.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">6. Membership Terms</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Monthly and annual memberships are non-transferable and non-refundable. Memberships automatically renew unless cancelled with 30 days notice. Unused classes do not roll over to the next month. We reserve the right to modify membership terms with 30 days notice.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">7. Privacy Policy</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">8. Prohibited Uses</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              You may not use our services:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">9. Limitation of Liability</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              In no event shall Skyline Yoga Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">10. Governing Law</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the state of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">11. Changes to Terms</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">12. Contact Information</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="text-text-muted mb-2">
                <strong>Email:</strong> {siteConfig.contact.email}
              </p>
              <p className="text-text-muted mb-2">
                <strong>Phone:</strong> {siteConfig.contact.phone}
              </p>
              <p className="text-text-muted">
                <strong>Address:</strong> {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
