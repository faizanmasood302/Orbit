import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { Icon } from '@/components/ui/Icon';

export default function Contact() {
  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <ScrollReveal>
        <section className="px-margin-desktop max-w-container-max mx-auto mb-20 relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary-container/10 blur-[100px] rounded-full -z-10" />
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md mb-6">
              <Icon name="rocket_launch" className="text-[16px]" />
              <span>SAY HELLO</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Let&apos;s build the <span className="text-primary">future</span> together.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to guide your digital journey.
            </p>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal stagger={0.1}>
        <section className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 glass-card p-10 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
            <h2 className="font-headline-lg text-headline-lg mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant uppercase tracking-wider text-[12px]">Full Name</label>
                  <input className="w-full bg-white/50 border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant uppercase tracking-wider text-[12px]">Email Address</label>
                  <input className="w-full bg-white/50 border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant uppercase tracking-wider text-[12px]">Subject</label>
                <select className="w-full bg-white/50 border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-all outline-none appearance-none">
                  {['Digital Strategy', 'Branding & Identity', 'Web Development', 'General Inquiry'].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant uppercase tracking-wider text-[12px]">Message</label>
                <textarea className="w-full bg-white/50 border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-all outline-none resize-none" placeholder="Tell us about your project..." rows={5} />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary-container text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                Launch Inquiry
                <Icon name="send" className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-gutter">
            <div className="glass-card p-1 rounded-lg h-64 relative overflow-hidden group">
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="floating-animation">
                  <Icon name="language" className="text-[64px] text-primary" fill />
                </div>
                <h3 className="font-headline-md text-headline-md mt-4">Global Reach</h3>
                <p className="font-body-md text-on-surface-variant">Connecting innovative minds across the cosmos.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="font-headline-md text-headline-md mb-6">The Mothership</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <Icon name="location_on" />
                  </div>
                  <div>
                    <p className="font-bold">San Francisco HQ</p>
                    <p className="text-on-surface-variant">123 Innovation Drive, Suite 400<br />California, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                    <Icon name="call" />
                  </div>
                  <div>
                    <p className="font-bold">Voice Comms</p>
                    <p className="text-on-surface-variant">+1 (555) 000-ORBIT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="font-label-md text-on-surface-variant mb-6 uppercase tracking-widest">Connect Digitally</h3>
              <div className="flex flex-wrap gap-4">
                {['public', 'alternate_email', 'video_library', 'camera'].map((icon) => (
                  <a key={icon} className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                    <Icon name={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="mt-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="w-full h-[400px] rounded-lg overflow-hidden glass-card relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="San Francisco map visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2D9CuQSSRdZPFh8EC46Is90JkIybavxeD7mXDwKZVJoyCpsZCFlS0o1q5NesD3uHaIEMsjEOdwh8wTvdJPijn4PGsdzM3zGHAgceftj14b5wbSpOp_yZu9fv_tXspFWyx5H2P9aFZgrOGHD47PfmhrmfuYA3uexSeziwogzCfIjbJ1c5dBm1sPoK0nE-4mdXdUCxFtrEZ_7lnXRDgvenuYB8OfNhDzi4kevJ26vvmOtbFCI0c8tlASGJMxiXXA-DVTEWbQSrDm8U"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 glass-card p-6 rounded-lg max-w-sm">
              <p className="font-bold mb-1">Our San Francisco Studio</p>
              <p className="text-on-surface-variant text-sm">Where the orbital mechanics of digital design happen every day.</p>
            </div>
          </div>
        </section>
        </ScrollReveal>
      </main>
      <Footer />
      <AgentChat />
    </div>
  );
}
