import CompanyLayout from "../Components/CompanyLayout.jsx";

const PrivacyPolicy = () => (
  <CompanyLayout>
    <div className="bg-blue-50 min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy & Policy</h1>
          <div className="h-1 w-24 bg-red-500 mt-4 mb-6" />
          <p className="text-gray-600 mb-8">
            Effective Date: <span className="font-semibold text-gray-800">01/05/2025</span>
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section className="space-y-3">
              <p>
                At Banquethall.co, we are committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
              <p>
                By using Banquethall.co, you agree to the collection and use of information in
                accordance with this policy.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
              <p>We collect several types of information to provide and improve our services:</p>
              <h3 className="text-lg font-semibold text-gray-900">a. Personal Information</h3>
              <p>When you register, make a booking, or list a venue, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Payment information (processed via third-party gateways)</li>
                <li>Billing address</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">b. Non-Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>IP address</li>
                <li>Usage data (pages visited, time spent, clicks, etc.)</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process bookings and payments</li>
                <li>Facilitate communication between users and venue owners</li>
                <li>Respond to inquiries and support requests</li>
                <li>Improve and personalize user experience</li>
                <li>
                  Send important updates, confirmations, and promotional materials (with your
                  consent)
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">3. Sharing Your Information</h2>
              <p>
                We do <strong>not</strong> sell or rent your personal data. We may share your data
                in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  With <strong>venue owners</strong> (only the necessary booking details)
                </li>
                <li>
                  With <strong>third-party service providers</strong> (e.g., payment processors,
                  analytics tools)
                </li>
                <li>
                  When required by <strong>law or legal process</strong>
                </li>
                <li>
                  To <strong>protect rights, property, or safety</strong> of Banquethall.co, users,
                  or the public
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">
                4. Cookies and Tracking Technologies
              </h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understand user behavior</li>
                <li>Improve website performance</li>
                <li>Remember your preferences</li>
                <li>Serve relevant advertisements (where applicable)</li>
              </ul>
              <p>
                You may modify your browser settings to reject cookies, but this may affect the
                functionality of the site.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this policy unless a longer retention period is required by law.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time (if applicable)</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:banquethall.co@gmail.com" className="text-red-600 hover:underline">
                  banquethall.co@gmail.com
                </a>
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your data.
                However, no method of transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the
                privacy practices or content of those sites.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not
                knowingly collect data from children.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated “Effective Date.” Continued use of our website after such
                changes constitutes your consent to the updated policy.
              </p>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                <a href="mailto:banquethall.co@gmail.com" className="text-red-600 hover:underline">
                  banquethall.co@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </CompanyLayout>
);

export default PrivacyPolicy;
