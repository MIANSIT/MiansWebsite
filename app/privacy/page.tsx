import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MIANS',
  description: 'MIANS Privacy Policy — Your privacy is our priority.',
}

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: `We collect data to improve our services and give our users a more efficient and optimized experience. We may gather the following information:

• Personal Information: This includes the information you willingly supply while contacting us or using our services. Your name, email address, phone number, business details, and other contact information.

• Automatically Retrieved Information: We sometimes gather information about your visits to our website, which can include your IP address, browser type, device details, and browsing activities. This enables us to evaluate trends and enhance our website.

• Cookies and Monitoring Technologies: We access cookies and other technologies to gather information regarding the way you access our website and to improve your browsing experience. You can remove cookies in your browser's settings, but some parts of our website could fail to function properly as a consequence.`,
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: `The information we collect is used to:

• Provide, operate, and maintain our services.
• Improve and personalize your experience on our website.
• Understand and analyze how you use our website.
• Communicate with you, including for customer service, updates, and marketing.
• Process transactions and send related information.
• Find and prevent fraud and abuse.`,
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    content: `We value your privacy and do not sell or rent your personal information to third parties. We may share your information in the following limited circumstances:

• With service providers who assist us in operating our website.
• When required by law or legal process.
• To protect the rights, safety, or property of MIANS and users.
• During a merger, acquisition, or sale of assets.`,
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: `We take the security of your personal information seriously:

• We use SSL encryption.
• We regularly review security practices.
• Access is limited to authorized personnel.`,
  },
  {
    id: 'your-rights',
    title: 'Your Rights and Choices',
    content: `Depending on your location you may have the following rights:

• Access your data
• Update or delete your data
• Restrict processing
• Withdraw consent
• File complaints with authorities`,
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    content: `We use cookies to improve your browsing experience.

You can disable cookies in your browser settings, though some features may not work properly.`,
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    content: `Our website may contain links to third-party websites.

We are not responsible for their privacy practices.`,
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: `We retain personal information only as long as necessary to fulfill the purposes outlined in this policy.`,
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: `Your data may be transferred and processed outside your country where data protection laws may differ.`,
  },
  {
    id: 'updates',
    title: 'Updates to Our Privacy Policy',
    content: `We may update this Privacy Policy occasionally. Updates will be posted on this page.`,
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: `If you have any questions:

Email: miansofficial@gmail.com  
Website: https://www.miansofficial.com/contact`,
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-12 px-6 relative overflow-hidden grid-bg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-line" />
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: 'var(--text-secondary)' }}
            >
              Legal
            </span>
          </div>

          <h1
            className="font-bold text-5xl lg:text-6xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Your Privacy is <br />
            <span style={{ color: 'var(--text-secondary)' }}>
              Our Priority
            </span>
          </h1>

          <p
            className="leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            MIANS is fully dedicated to protecting your privacy. This policy
            explains how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Contents
                </p>

                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm hover:opacity-80"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {sections.map((section, i) => (
                <div key={section.id} id={section.id}>
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2
                      className="text-xl font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  <div
                    className="pl-8 border-l space-y-4"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {section.content.split('\n\n').map((para, j) => (
                      <p
                        key={j}
                        className="leading-relaxed text-sm whitespace-pre-line"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}