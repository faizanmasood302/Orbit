import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { Icon } from '@/components/ui/Icon';

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 overflow-hidden">
        <div className="orbital-glow absolute top-0 -left-20 w-[500px] h-[500px] rounded-full -z-10" />
        <div className="orbital-glow absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(57, 184, 253, 0.08) 0%, rgba(99, 14, 212, 0.05) 50%, transparent 70%)' }} />

        <ScrollReveal>
          <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
              <Icon name="verified_user" className="text-[18px]" />
              <span className="font-label-md text-label-md">Privacy Commitment</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">Privacy Policy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Last updated: October 24, 2024. At Orbit, your data privacy is the core of our digital constellation. We believe in transparency and security by design.
            </p>
          </section>
        </ScrollReveal>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-12">
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-32 space-y-4">
              <nav className="flex flex-col gap-1">
                <a className="px-4 py-2 rounded-lg font-label-md text-label-md bg-primary/10 text-primary border-l-4 border-primary transition-all" href="#introduction">1. Introduction</a>
                <a className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#data-collection">2. Data Collection</a>
                <a className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#usage">3. Usage &amp; Purpose</a>
                <a className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#user-rights">4. Your Rights</a>
                <a className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#security">5. Security Measures</a>
              </nav>
              <div className="pt-8 border-t border-outline-variant">
                <p className="font-label-md text-label-md text-outline mb-4">Questions?</p>
                <button className="w-full py-3 rounded-xl bg-surface-container-high border border-outline/20 font-label-md text-label-md text-on-surface hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Icon name="mail" className="text-[20px]" />
                  Contact Legal
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-12">
            <ScrollReveal>
              <section className="glass-card p-8 md:p-12 rounded-xl" id="introduction">
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-6">1. Introduction</h2>
                <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
                  <p>Welcome to Orbit Technologies. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our orbital ecosystem.</p>
                  <p>We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. By using Orbit, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section id="data-collection">
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-8 px-4">2. Data Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-8 rounded-xl border-l-4 border-primary">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                      <Icon name="person" />
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-3">Identity Data</h3>
                    <p className="font-body-md text-on-surface-variant">Includes your first name, last name, username or similar identifier, and title. This allows us to personalize your experience across the Orbit network.</p>
                  </div>
                  <div className="glass-card p-8 rounded-xl border-l-4 border-secondary">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                      <Icon name="contact_page" />
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-3">Contact Information</h3>
                    <p className="font-body-md text-on-surface-variant">Includes billing address, delivery address, email address, and telephone numbers used for administrative purposes and support.</p>
                  </div>
                  <div className="glass-card p-8 rounded-xl md:col-span-2 flex flex-col md:flex-row gap-8 items-center bg-surface-container-low/50">
                    <div className="shrink-0">
                      <div className="w-20 h-20 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary-container">
                        <Icon name="monitoring" className="text-[40px]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md mb-2">Technical &amp; Usage Data</h3>
                      <p className="font-body-md text-on-surface-variant">We collect data about your internet protocol (IP) address, browser type and version, time zone setting, operating system, and platform. This helps us optimize our orbital performance and security protocols.</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden" id="usage">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Icon name="psychology" className="text-[120px]" />
                </div>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-6">3. Usage &amp; Purpose</h2>
                <div className="space-y-6">
                  <p className="font-body-md text-on-surface-variant">We use your data to provide the best possible experience within Orbit. Specifically:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-white/50">
                      <Icon name="check_circle" className="text-primary shrink-0" />
                      <span className="font-body-md">To process and deliver your services</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-white/50">
                      <Icon name="check_circle" className="text-primary shrink-0" />
                      <span className="font-body-md">To manage our relationship with you</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-white/50">
                      <Icon name="check_circle" className="text-primary shrink-0" />
                      <span className="font-body-md">To improve our website and services</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-white/50">
                      <Icon name="check_circle" className="text-primary shrink-0" />
                      <span className="font-body-md">To make suggestions about new features</span>
                    </li>
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section id="user-rights">
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-8 px-4">4. Your User Rights</h2>
                <div className="space-y-4">
                  <div className="group flex items-center justify-between p-6 rounded-xl glass-card hover:border-primary/50 transition-all cursor-default">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <span className="font-label-md">01</span>
                      </div>
                      <span className="font-headline-md">The right to access your personal data</span>
                    </div>
                    <Icon name="arrow_forward" className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <div className="group flex items-center justify-between p-6 rounded-xl glass-card hover:border-primary/50 transition-all cursor-default">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <span className="font-label-md">02</span>
                      </div>
                      <span className="font-headline-md">The right to request data correction</span>
                    </div>
                    <Icon name="arrow_forward" className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <div className="group flex items-center justify-between p-6 rounded-xl glass-card hover:border-primary/50 transition-all cursor-default">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <span className="font-label-md">03</span>
                      </div>
                      <span className="font-headline-md">The right to request erasure (&ldquo;right to be forgotten&rdquo;)</span>
                    </div>
                    <Icon name="arrow_forward" className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <div className="group flex items-center justify-between p-6 rounded-xl glass-card hover:border-primary/50 transition-all cursor-default">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <span className="font-label-md">04</span>
                      </div>
                      <span className="font-headline-md">The right to object to data processing</span>
                    </div>
                    <Icon name="arrow_forward" className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="p-12 rounded-xl bg-primary-container text-on-primary-container shadow-xl shadow-primary/20 relative overflow-hidden" id="security">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Icon name="encrypted" className="text-[32px]" />
                  </div>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-4">Fortified Security</h2>
                  <p className="max-w-2xl font-body-md mb-8 opacity-90">
                    Orbit implements AES-256 encryption for all data at rest and TLS 1.3 for all data in transit. We conduct bi-annual security audits to ensure your digital assets remain within a secure perimeter.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 font-label-md text-label-md flex items-center gap-2">
                      <Icon name="verified" className="text-[18px]" /> ISO 27001 Certified
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 font-label-md text-label-md flex items-center gap-2">
                      <Icon name="gpp_good" className="text-[18px]" /> GDPR Compliant
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 font-label-md text-label-md flex items-center gap-2">
                      <Icon name="shield" className="text-[18px]" /> SOC2 Type II
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
      <AgentChat />
    </div>
  );
}
