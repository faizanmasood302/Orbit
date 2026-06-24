import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { Icon } from '@/components/ui/Icon';

export default function Services() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <ScrollReveal>
      <section className="relative pt-40 pb-20 overflow-hidden orbit-gradient">
        <div className="absolute top-20 right-0 w-1/2 h-full opacity-50 z-0">
          <div className="animate-float">
            <img
              className="w-full h-auto"
              alt="Abstract 3D glass sculpture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOzfuAHJKmAvZVkkM87VgJ2FVp-wFGPLlBK9rO7hbkNQjskp42tKIzOA-OIlHOA5V8wncLNKD4S145Mc2lJvTbxorXX30SXMOLsYY0duN9m6Qqy8u04d5HLoC9K-Sm_HfrfQLmuyonwhvKa_b7mWK9Pnjh9z0ADbxRNGsIzTYFT-DL0_tj29wfrCeO45495_xRo7941eMc0o8Ep0DFdiBh6huo29tTmKOtbcGAxCeJXGLroJv-Bo_ZC0MmenHiGlU5uItRT_ZhLd0"
            />
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md mb-6">OUR CAPABILITIES</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
              Elevating Your <span className="text-gradient">Digital Universe</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              We combine cosmic creativity with scientific precision to deliver enterprise-grade solutions that orbit your business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 group">
                Explore Solutions
                <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/about" className="px-8 py-4 rounded-full glass-card font-bold text-on-surface hover:bg-white/90 transition-colors">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-display-lg text-headline-lg mb-4">Core Offerings</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Tailored strategies and technological excellence designed for the modern exploration of market spaces.</p>
          </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 group">
              <div className="glass-card rounded-xl p-10 h-full overflow-hidden relative group-hover:border-primary/30 transition-all duration-500">
                <div className="relative z-10 md:flex items-center gap-10">
                  <div className="md:w-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6">
                      <Icon name="insights" className="text-secondary text-4xl" fill />
                    </div>
                    <h3 className="font-display-lg text-headline-lg mb-4">Data Analysis</h3>
                    <p className="text-on-surface-variant mb-6 font-body-md">Our approach turns raw data into actionable intelligence. We use advanced predictive modeling and cosmic visualization techniques to map your growth trajectory.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-on-surface font-label-md">
                        <Icon name="check_circle" className="text-primary text-sm" />
                        Predictive Customer Modeling
                      </li>
                      <li className="flex items-center gap-3 text-on-surface font-label-md">
                        <Icon name="check_circle" className="text-primary text-sm" />
                        Real-time Market Analytics
                      </li>
                    </ul>
                    <a className="text-primary font-bold inline-flex items-center gap-2 group-hover:underline" href="/contact">
                      Learn our methodology <Icon name="north_east" className="text-sm" />
                    </a>
                  </div>
                  <div className="md:w-1/2 mt-10 md:mt-0">
                    <img
                      className="w-full rounded-lg shadow-2xl"
                      alt="Data network visualization"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr1YPYVJ1YMHL16teC-dl9TXc1tWJpmQ_Hedh6JwZg_f40EbhaoR_3dL1UEXIzQrkdxR031-Kl1wZ7msB4sqFx_t299yKApgfksuccKJuoSoYQvI6z-x93ZtzP30AV51LE8oerSCyHdgo7WdiHwANkvqJsYl-IP2kfHF8d2lYnkF1ZzWqIYed8fSk4X78hVlFs3LL7D3-LuiQbNvMNLB-9MIFDkiK7tAnGAi_be-H136Hu_QmTaD921APLX95Zsk7nr66ZvfskpcU"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="glass-card rounded-xl p-8 h-full flex flex-col justify-between hover:bg-white/90 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name="campaign" className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-headline-md mb-4">Marketing Strategy</h3>
                  <p className="text-on-surface-variant font-body-md mb-6">Omnichannel campaigns that resonate across the digital vacuum. We create gravitational pull for your brand.</p>
                </div>
                <div className="pt-6 border-t border-primary/5">
                  <div className="flex -space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-variant" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-fixed" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-fixed" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim flex items-center justify-center text-[10px] font-bold">+12k</div>
                  </div>
                  <p className="text-label-md font-label-md">Trusted by market leaders</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="glass-card rounded-xl p-8 group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-tertiary-container/10 flex items-center justify-center">
                    <Icon name="terminal" className="text-tertiary text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md mb-3">Web Application Development</h3>
                    <p className="text-on-surface-variant font-body-md mb-4">Building robust, high-performance engines for your digital presence. Our code is as clean as a vacuum and as resilient as a starship.</p>
                    <div className="flex flex-wrap gap-2">
                      {['React/Next.js', 'Cloud Architecture', 'API Design'].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="glass-card rounded-xl p-8 group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-secondary-container/10 flex items-center justify-center">
                    <Icon name="cloud_sync" className="text-secondary text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md mb-3">Cloud Infrastructure</h3>
                    <p className="text-on-surface-variant font-body-md mb-4">Seamless scaling and infinite uptime. We manage the vastness of the cloud so you can focus on the mission at hand.</p>
                    <div className="flex flex-wrap gap-2">
                      {['AWS/GCP', 'Kubernetes', 'DevOps'].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="space-y-8 relative z-10">
                  {[
                    { num: '1', title: 'Observation & Discovery', desc: 'We begin by observing your current ecosystem, identifying friction points and hidden opportunities.' },
                    { num: '2', title: 'Orbital Planning', desc: 'Crafting a strategic roadmap that aligns technology with business objectives for maximum velocity.' },
                    { num: '3', title: 'Launch & Calibration', desc: 'Rapid execution followed by continuous data-driven optimization to ensure perfect alignment.' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-primary text-white' : 'bg-primary/20 text-primary'} flex items-center justify-center font-bold shrink-0`}>
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-headline-md mb-2">{step.title}</h4>
                        <p className="text-on-surface-variant">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display-lg text-headline-lg mb-6">A Scientific Approach to <span className="text-primary">Creative Growth</span></h2>
              <p className="text-body-lg text-on-surface-variant mb-8">Our methodology is rooted in the &ldquo;Orbital Effect&rdquo;&mdash;creating self-sustaining ecosystems where technology and design work in perfect harmony.</p>
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
                <p className="italic text-on-surface mb-4">&ldquo;Orbit transformed our legacy systems into a streamlined digital powerhouse in less than six months.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-dim" />
                  <div>
                    <p className="font-bold">Sarah Chen</p>
                    <p className="text-sm text-on-surface-variant">CTO, Starlight Industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
      <Footer />
      <AgentChat />
    </div>
  );
}
