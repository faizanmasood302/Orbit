import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { Icon } from '@/components/ui/Icon';

export default function Social() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-container/20 blur-[140px] rounded-full -z-10" />
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <section className="text-center mb-24 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Icon name="public" className="text-[18px]" />
              <span className="font-label-md text-label-md uppercase tracking-widest">Connect with Us</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">
              The Orbit <span className="text-gradient">Atmosphere</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Step into our digital universe. Stay updated with live feeds, expert insights, and a community that pushes the boundaries of cosmic innovation.
            </p>
            <div className="hidden lg:block absolute -left-20 top-0 float-animation opacity-60">
              <div className="w-32 h-32 glass-panel rounded-full flex items-center justify-center">
                <Icon name="auto_awesome" className="text-primary text-5xl" />
              </div>
            </div>
            <div className="hidden lg:block absolute -right-16 bottom-0 float-animation opacity-60" style={{ animationDelay: '1.5s' }}>
              <div className="w-24 h-24 glass-panel rounded-xl flex items-center justify-center rotate-12">
                <Icon name="rocket_launch" className="text-secondary text-4xl" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
            <div className="md:col-span-7 glass-card rounded-lg p-8 inner-glow hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="share" className="text-[120px] text-primary" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="alternate_email" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Twitter Feed</h3>
                  <p className="font-label-md text-label-md text-on-surface-variant">@OrbitTech_Global</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-surface/50 border border-outline-variant/30">
                  <p className="font-body-md text-body-md mb-4">&ldquo;We are excited to announce our new partnership with interstellar data streams! The future of cloud computing is here. 🚀 #OrbitInnovation #CloudTech&rdquo;</p>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <span className="flex items-center gap-1 font-label-md text-label-md"><Icon name="favorite" className="text-[16px]" /> 1.2k</span>
                    <span className="flex items-center gap-1 font-label-md text-label-md"><Icon name="repeat" className="text-[16px]" /> 432</span>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-surface/50 border border-outline-variant/30 opacity-70">
                  <p className="font-body-md text-body-md mb-4">&ldquo;What does digital fluidity mean to you? Join our thread on the evolving landscape of UX design.&rdquo;</p>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <span className="flex items-center gap-1 font-label-md text-label-md"><Icon name="favorite" className="text-[16px]" /> 890</span>
                    <span className="flex items-center gap-1 font-label-md text-label-md"><Icon name="repeat" className="text-[16px]" /> 120</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                See all tweets <Icon name="trending_flat" />
              </button>
            </div>

            <div className="md:col-span-5 glass-card rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500">
              <div className="h-64 relative">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXTbbJkf8MAbNW3fxd9xioqqAAO4vuUhjOrYI8PBN2q2MNfNRSYtJyoxn-jCdF8Nog-gn0MR_4nkUxNe7i3QKgixg9qeeiRT7o5i0E5niWhZv2PC4DClYgsRTvo4y0GSqSFv6nZ4Mowp9i14mlEm1n2qQPMv9O73pcmJM-icxoBc3BLpeqfpgK8fWWO9EVk-wltbAqcEslRs3KTD_8QNGn2QYpV7uP1LUBB8fOsc1ZPO9bXxkwirwLNT2t1RfCqYkUr3MfDbpiEcU')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Orbit Design profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuBBmk06x2VMHytm1gukmAGPc4SnUFipAfhO8EMxgz9jydw75ZEyqmYUgZJtzKIWwmNB7ZC6emyjmUesGO3QkcBKz52ug98vgOgkUCkgp1vrYBHDltLOA0k1lz9uQZtOk4qx7MdYPJXIMbZfHoPCilWP72nPTxYKxR1hDsEqXkzQIoaUnYPlZwj3zorrhnEjbq6heF3a2LR8wuRfK6y-rrwDMVsIpYZKlWF7fRwn9dGof9MeDD304NwXJQqbD9p_iFjpD4h3HNhqw" />
                  </div>
                  <span className="font-label-md text-label-md text-on-background font-bold">Orbit_Design</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="font-headline-md text-headline-md mb-2">Visual Journeys</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Explore the visual language of our tech through daily snapshots and cinematic captures.</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-surface-container rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Hardware components with purple accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk2YKuCUNDtKcjxiT_lDyY8_9YDj1RDbs4Qrhx6b4Li01mpGuScoizNsyDw_ZFMPeQnC3epf0oVSEd9zk30hiPOLHlFn-sl6fcmBhFUIE7I39EhBgpAXaVOACgy5toi0oZoaK00ZSGluht7vRQfBJWAt4KWcOQWitSYFMZvDKerrjWWGiHBPeuZ9iaHAsc9bWluWK2tjyw2tzAG0znUpcgDEvnBoFd9o4Z34sU2GaXsOaKoGiP-20tvh9bVy6WLHltcQHxVV4u_DA" />
                  </div>
                  <div className="aspect-square bg-surface-container rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Minimalist desk setup with generative art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqmBoCUA1e7M__A4CjRXn_5uWyXOSdJ5BsSPMHXnnYt-NksdF2nptKX3kXsuNthI9jHmBcriqcq-IS0YqlAO5_csPBXzPQ9WPbKUR2QNQ2PMI1oxw-AoeWH-4DIM5jYyCCQy5XPwqTyZ_kqFFBd_46ipfRYC3UnQuilILKn8O7EXRGAX8E7j-W3zlGk4I4kQ3k6q9D934kAcYlA81fdrmc78YH4YADgC2ZFE6Trxzj9j6TkftI8qgNf4GrgL4nf0gMw2ppj9kuNeY" />
                  </div>
                  <div className="aspect-square bg-surface-container rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Glass spheres reflecting vibrant gradients" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRagQJufEciWjb9p_iWui3qzipB3s1b71iW7Zewtkpq4mENy7q7Mvyn1K90wEtbaYztLqhsCEmT_BKbsB7doJwO-n90KQs4XuartjL29198atwRr00Rv0e7oX38VZOvoZhLW5czaUfXyOjGpSnlnPQau4RUE3o-rqmIA2n_6RPDIh-Dg1kz_DRM5QNWGuDDKWPJZWS9zSM9mJUEhxFgheI-Ua7ieyfSrNu5ar36X_aOvZ9mA5U_1O9t8TW5MTrCNCYIAfE_ZTj02E" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-12 glass-panel rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition-all duration-500">
              <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg">
                <img className="w-full h-full object-cover" alt="Business leaders in conference room discussing technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWeYx8iOxW0INvWaIQ2kbnBgtwWIEpbrqu65MB7FdNrxbiwP_sqf9zb4cSYCKzZ8mji6cndVg3gR4AQOndE8O3hg1cmiebbwANtyFNh0GY65cLMmUX6NIoz90mKre5azw9QujLpPwgwHbkc-sDSdwWt0NiHMYHHMrYXNshyytBRhvkU-2UhmqqpP4H9MvaVG8XkqQ8uROpUqC5dgIoXHxwlNoThCpYzHjeyDqImQURnRJm8XrTcPcWjwkLdtN-cZ33MTlzDmqXhtU" />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-2 text-on-secondary-container bg-secondary-fixed px-3 py-1 rounded-full w-fit mb-4">
                  <Icon name="business_center" className="text-[18px]" />
                  <span className="font-label-md text-label-md">LinkedIn Pulse</span>
                </div>
                <h3 className="font-headline-lg text-headline-md mb-4 text-on-surface">Thought Leadership &amp; Tech Growth</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Join 50k+ professionals following our deep dives into enterprise infrastructure, AI scaling, and the future of remote-first engineering cultures.
                </p>
                <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-md hover:opacity-90 transition-all shadow-md">Connect on LinkedIn</button>
              </div>
            </div>
          </section>

          <section className="rounded-xl overflow-hidden py-24 px-8 md:px-20 text-center bg-primary">
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-primary mb-6">Join the Orbit Ecosystem</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
                Don&apos;t just watch from the sidelines. Participate in developer roundtables, beta programs, and exclusive social events in our digital home.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-headline-md shadow-2xl hover:scale-105 transition-all group" href="#">
                  <Icon name="forum" className="text-3xl" />
                  Join Discord
                </a>
                <a className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white/10 text-white px-10 py-5 rounded-full font-headline-md border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all" href="#">
                  <Icon name="groups" className="text-3xl" />
                  Slack Community
                </a>
              </div>
              <div className="mt-16 flex justify-center items-center gap-12 opacity-80">
                <div className="flex flex-col items-center">
                  <span className="font-display-lg text-headline-lg text-on-primary">12k+</span>
                  <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">Active Members</span>
                </div>
                <div className="w-px h-16 bg-white/20" />
                <div className="flex flex-col items-center">
                  <span className="font-display-lg text-headline-lg text-on-primary">24/7</span>
                  <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">Live Support</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24 py-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
              <h4 className="font-headline-md text-headline-md mb-2">Weekly Orbit Digest</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">The best of our community, delivered to your inbox every Monday morning.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input className="flex-grow md:w-80 px-6 py-4 rounded-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Email address" type="email" />
              <button className="bg-primary text-on-primary px-8 rounded-full font-label-md hover:scale-105 transition-all">Subscribe</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <AgentChat />
    </div>
  );
}
