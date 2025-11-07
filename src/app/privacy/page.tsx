import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Skyline Yoga Studio. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Placeholder Notice */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="container-custom">
          <p className="text-center text-sm text-yellow-800">
            <strong>Portfolio Placeholder:</strong> This is a sample privacy policy for portfolio demonstration purposes only. This is not a real or legally binding privacy policy.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-700 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-text-muted mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">1. Information We Collect</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>Create an account or book a class</li>
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Participate in our classes or events</li>
            </ul>
            <p className="text-text-muted mb-6 leading-relaxed">
              This information may include your name, email address, phone number, emergency contact information, health information relevant to your practice, and payment information.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">2. How We Use Your Information</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about classes, events, and promotions</li>
              <li>Ensure the safety and well-being of our students</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">4. Health Information</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We may collect health information that you voluntarily provide to help us ensure your safety during classes. This information is:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>Used only to provide appropriate modifications and ensure your safety</li>
              <li>Kept strictly confidential and not shared with third parties</li>
              <li>Stored securely and accessed only by authorized staff</li>
              <li>Retained only as long as necessary for your safety and our records</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">5. Data Security</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">7. Third-Party Services</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">8. Your Rights and Choices</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-text-muted mb-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="text-text-muted mb-6 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">9. Data Retention</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">10. Children's Privacy</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">12. California Privacy Rights</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>

            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-4">13. Contact Us</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
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
