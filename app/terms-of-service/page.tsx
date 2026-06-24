import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { Icon } from '@/components/ui/Icon';

export default function TermsOfService() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 overflow-hidden">
        <div className="fixed -top-40 -right-40 w-[600px] h-[600px] rounded-full -z-10 bg-primary/5 blur-[80px]" />
        <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] rounded-full -z-10 bg-primary/5 blur-[80px]" style={{ animationDelay: '2s' }} />

        <ScrollReveal>
          <section className="pb-20">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md mb-6 border border-primary/20">
                <Icon name="verified_user" className="text-[16px]" />
                Last Updated: May 24, 2024
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-tighter">
                Terms of Service
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Welcome to Orbit. These terms outline the rules and regulations for the use of our advanced technological solutions.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <section className="pb-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 p-8 rounded-xl glass-card">
                <h3 className="font-headline-md text-headline-md mb-6">In this document</h3>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a className="group flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#acceptance">
                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <span className="font-label-md">1. Acceptance of Terms</span>
                  </a>
                  <a className="group flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#obligations">
                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <span className="font-label-md">2. User Obligations</span>
                  </a>
                  <a className="group flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#intellectual">
                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <span className="font-label-md">3. Intellectual Property</span>
                  </a>
                  <a className="group flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#privacy">
                    <span className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <span className="font-label-md">4. Privacy &amp; Data</span>
                  </a>
                </nav>
              </div>
            </ScrollReveal>

            <div className="space-y-24">
              <ScrollReveal>
                <section className="scroll-mt-32" id="acceptance">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 tracking-tight">1. Acceptance of Terms</h2>
                  <div className="space-y-6 text-on-surface-variant leading-relaxed">
                    <p>By accessing and using the Orbit platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms apply to all visitors, users, and others who access or use the Service.</p>
                    <p>If you disagree with any part of the terms, then you may not access the Service. We reserve the right to modify these terms at any time, and your continued use of Orbit signifies your acceptance of any adjusted terms.</p>
                    <div className="p-6 bg-secondary-container/10 border-l-4 border-secondary rounded-r-lg mt-8">
                      <p className="italic text-on-secondary-container font-body-md">&ldquo;Orbit is committed to transparency. We encourage users to check this page periodically for updates to stay informed about their rights and responsibilities.&rdquo;</p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section className="scroll-mt-32" id="obligations">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 tracking-tight">2. User Obligations</h2>
                  <div className="space-y-6 text-on-surface-variant leading-relaxed">
                    <p>Users must provide accurate, complete, and current information when creating an account. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                    <ul className="space-y-4 list-none">
                      <li className="flex gap-4">
                        <Icon name="check_circle" className="text-primary shrink-0" />
                        <span>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</span>
                      </li>
                      <li className="flex gap-4">
                        <Icon name="check_circle" className="text-primary shrink-0" />
                        <span>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</span>
                      </li>
                      <li className="flex gap-4">
                        <Icon name="check_circle" className="text-primary shrink-0" />
                        <span>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization.</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section className="scroll-mt-32" id="intellectual">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 tracking-tight">3. Intellectual Property</h2>
                  <div className="space-y-6 text-on-surface-variant leading-relaxed">
                    <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Orbit Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                      <div className="p-6 rounded-xl glass-card">
                        <Icon name="design_services" className="text-primary text-4xl mb-4" />
                        <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Our Assets</h4>
                        <p className="text-body-md">Logos, visual designs, and source code are proprietary and cannot be used without explicit permission.</p>
                      </div>
                      <div className="p-6 rounded-xl glass-card">
                        <Icon name="manage_accounts" className="text-secondary text-4xl mb-4" />
                        <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Your Data</h4>
                        <p className="text-body-md">You retain all of your ownership rights in your User Content, but you grant Orbit a worldwide, non-exclusive license to use it.</p>
                      </div>
                    </div>
                    <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Orbit.</p>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section className="scroll-mt-32" id="privacy">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 tracking-tight">4. Privacy &amp; Data</h2>
                  <div className="space-y-6 text-on-surface-variant leading-relaxed">
                    <p>Your privacy is of the utmost importance to us. Our use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand our practices regarding data collection and security.</p>
                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden my-10 group">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-40" />
                      <img
                        className="w-full h-full object-cover"
                        alt="A cinematic, ultra-high-definition visual representing secure data transmission. Gleaming translucent fibers carry light through a futuristic, glass-like digital landscape. The lighting is ethereal and atmospheric, using the Orbit brand palette of violet and cyan. The image conveys a sense of high-end security and cosmic fluid technology."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9nA7jbJWQVaOqjx0kgKytLlsfJeANFgAP88CCAjkmEJuv3nFu-Ykju-uT-ZmF1_WYrh42i79AUNPQJ9xwK_p5fz8pLhXZha9fJ-lU63ZAX7ywEXXzKcA6zxqxpZv6jbCvvuJAOQAdLtW_I9fECRjV8IQzvnNokdvpo0p2yvf2zlZc120sXEO3HYW-pOfT96fcmOdyemFSZqcP7q1Z_oF5_briVfjyK5Cnfc9ME302fT07PSCqO0HmMs3cI2BIBw0rODzBR17Kmaw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-white/40 shadow-2xl">
                          <span className="font-label-md text-primary">Encryption Standards: AES-256</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="mt-32 text-center p-12 rounded-xl bg-primary-container text-on-primary-container relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Have questions?</h3>
                <p className="font-body-md mb-8 max-w-md mx-auto opacity-90">If you have any questions about these Terms, please contact our legal team for clarification.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:legal@orbit.com" className="font-label-md px-8 py-3 rounded-full bg-white text-primary hover:bg-surface-bright transition-all duration-300 transform hover:-translate-y-1">
                    Email Legal Team
                  </a>
                  <Link href="/privacy-policy" className="font-label-md px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <AgentChat />
    </div>
  );
}
