import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { CountUp } from '@/components/anim/CountUp';
import { Icon } from '@/components/ui/Icon';

export default function About() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 pb-20 overflow-hidden">
        <div className="orbital-glow absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full -z-10" />
        <div className="orbital-glow absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full -z-10" />
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center relative z-10">
          <ScrollReveal>
            <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md mb-6">
              <Icon name="verified" className="text-[18px]" />
              OUR CORE MISSION
            </span>
            <h1 className="font-display-lg text-display-lg mb-8">
              Organizing Your Ideas For Your <span className="text-gradient">Next Venture</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Orbit was founded on the belief that every visionary idea deserves a structured path to reality. We bridge the gap between abstract thought and concrete execution through advanced digital strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline-md text-label-md flex items-center gap-3 hover:shadow-2xl transition-all">
                <Icon name="play_circle" />
                Join Our Live Session
              </a>
              <a href="/services" className="px-8 py-4 glass-panel rounded-xl font-headline-md text-label-md border-primary/20 hover:border-primary transition-all">
                View Roadmap
              </a>
            </div>
            </div>
          </ScrollReveal>
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative z-10 floating">
              <div className="w-[400px] h-[400px] glass-panel rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Abstract 3D glass sculpture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe3U3BbR6ImbSEmYbxF1MIhKIkpOYNPV99vxxGPyZc_0znXYkKkVc83JOeASrLewJzmdQHQqHFkvnWNsuL1je6qFh_wiUsQ50FG4I5KD1ZO18n8uiwYmib9-MaMrURNSBgi90CuMrRTYpKbfVQBTtbPGTTRedqfmm1XpXJC7-uPYZKpRVrNEPgu69aFdmXuuivxkO1LJkQNc0RXog4Dd-vmoJB2O3LMw1QMRXSfTU1318C_CuEWVpoqvk-UqQDXVaul1HahDosWPw"
                />
              </div>
              <div className="absolute -right-10 top-1/4 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-white/50">
                <Icon name="insights" className="text-primary" fill />
                <span className="text-label-md">Strategic Vision</span>
              </div>
              <div className="absolute -left-5 bottom-1/4 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-white/50">
                <Icon name="rocket_launch" className="text-secondary" fill />
                <span className="text-label-md">Venture Growth</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-headline-lg mb-4">Our Evolutionary Journey</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">From a small studio in 2018 to a global technology powerhouse, Orbit has always prioritized innovation over convention.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            <div className="md:col-span-2 glass-panel rounded-lg p-10 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  alt="Tech workspace"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZma-obZp4aYAmulgX5OKqsBXKh_076lZtiFxOFoQGfycWeb2t1gWZN___IYgaSU0gZ6hsuLdJLwXXnvO5Nym2YrER19rV-CppmwKtsAd0zc0VD8MI7RSQIKG_J8YGoOsRSTAZQP3uLqDFG-596qsnaNDOb6bkaV1pH3nHMSLx3M23zhpPFSMw1ycDZ49kR7YM5ebaOSLlyeepgx731bL77ViwjSKgTUEhZXuFueZjq33k8HX4jcBtcwDLYy_7gsSHosBgCJppqRc"
                />
              </div>
              <div className="relative z-10">
                <span className="text-primary font-bold text-headline-md">2018—2020</span>
                <h3 className="font-display-lg text-headline-lg mt-2 mb-4">The Nucleus</h3>
                <p className="text-on-surface-variant max-w-md">Founded by a collective of designers and engineers who wanted to solve complex scaling issues for emerging startups.</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-10 bg-primary/5 border-primary/20 flex flex-col justify-between">
              <Icon name="public" className="text-primary text-display-lg" />
              <div>
                <h3 className="font-display-lg text-headline-md mb-2">Global Expansion</h3>
                <p className="text-on-surface-variant">2021 marked our expansion across three continents, serving over 500 enterprise clients.</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-10 flex flex-col items-center justify-center text-center">
              <div className="text-primary font-display-lg text-display-lg mb-2"><CountUp end={99} suffix="%" /></div>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Success Guarantee</p>
              <p className="mt-4 text-body-md">Our methodology ensures ideas don&apos;t just launch&mdash;they thrive.</p>
            </div>
            <div className="md:col-span-2 glass-panel rounded-lg p-10 flex items-center justify-between overflow-hidden">
              <div className="max-w-sm">
                <h3 className="font-display-lg text-headline-md mb-2">The Orbit OS</h3>
                <p className="text-on-surface-variant text-body-md">In 2023, we launched our proprietary internal management framework that revolutionizes how teams collaborate on complex digital architectures.</p>
              </div>
              <div className="w-48 h-48 rounded-full border-4 border-primary/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="w-4 h-4 bg-primary rounded-full absolute -top-2" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-display-lg text-headline-lg">Meet The Visionaries</h2>
                <p className="text-on-surface-variant mt-2">The architects of your next digital breakthrough.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
                  <Icon name="arrow_back" />
                </button>
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
                  <Icon name="arrow_forward" />
                </button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { name: 'Marcus Chen', role: 'Creative Strategist', color: 'from-primary/80' },
              { name: 'Elena Rodriguez', role: 'Lead Architect', color: 'from-secondary/80' },
              { name: 'Jordan Smith', role: 'Product Designer', color: 'from-primary/80' },
              { name: 'Sarah Jenkins', role: 'Operations Lead', color: 'from-tertiary/80' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden glass-panel mb-4 relative">
                  <div className="w-full h-full bg-surface-variant" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6`}>
                    <div className="flex gap-4">
                      <a className="text-on-primary" href="#"><Icon name="alternate_email" /></a>
                      <a className="text-on-primary" href="#"><Icon name="link" /></a>
                    </div>
                  </div>
                </div>
                <h4 className="font-display-lg text-headline-md">{member.name}</h4>
                <p className="text-on-surface-variant text-label-md">{member.role}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
      <section className="py-32 relative">
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="glass-panel rounded-lg p-16 md:p-24 text-center overflow-hidden relative">
            <div className="orbital-glow absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10" />
            <h2 className="font-display-lg text-display-lg mb-6 relative z-10">Ready to <span className="text-primary">Orbit</span> Your Idea?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">
              Join our upcoming live strategy session to see how we transform concepts into market leaders. Exclusive insights, real-time auditing, and expert Q&amp;A.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <a href="/contact" className="group px-10 py-5 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md flex items-center gap-4 hover:shadow-2xl hover:shadow-primary/40 transition-all">
                Join Our Live Session
                <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="w-12 h-12 rounded-full border-4 border-white bg-surface-dim overflow-hidden">
                    <div className="w-full h-full bg-surface-variant" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-[12px] border-4 border-white">
                  +<CountUp end={1} />k
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
