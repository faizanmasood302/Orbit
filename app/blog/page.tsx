import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { Icon } from '@/components/ui/Icon';

const blogPosts = [
  {
    category: 'Innovation',
    readTime: '8 min read',
    title: 'Designing for the Next Billion Users',
    description:
      'A deep dive into cross-cultural design patterns and how we&apos;re adapting our orbital system for global scalability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0hkS1LR3wJhTwz4GzxtbvqvBBvDTHicrS3gMAhEOVqAtq80HYcxL5cPPURwE2MiV41RVuqPb96MNKMPYevk5d0cVuwnPSTQges0Z9g3mOekf6NL8OAoeSAE0OwojXnoXXUEKVxTWA78ebSox-oX1nn_G36_Bq1ePFmfFKI8srh_olajhuryGyZhe372NkKeOCfuQ79jm8oSYweJX435UIvyYY9CSEcQP7dovzFZ7qGwkWTQu-_Y3MdzjoL9mHChqARURFvhBSnE',
    alt: 'A minimalist 3D rendering of abstract floating glass spheres in soft pink and deep purple space.',
  },
  {
    category: 'Technology',
    readTime: '15 min read',
    title: 'The Quantum Shift in SaaS',
    description:
      'Why local-first architectures are the inevitable future of high-performance cloud applications.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiEAdeFwKTKRDJNZoUF0Pez1a1_7ZZbz-K2FmkS8wZj_puqHEKOVeEqadXYZQPzZCmJckHEBthl_-uEBFFwIDuSdnn4qxHLP5OTyrv7zUj-K9AbarsxQiXuMgFNotGJAaH8V_NBO03upZsuTuj-Zc1LTPt_rOF7F0pIeXcgUB4l5vttkZURWyQ8vCiJJQrpePmD_Q6dUupSnZYmz7prYYII4bGBQpROGz5qBB7tt2UiSpoXlUauaoyA0yvRv126qjAPX6fUaS7Z5I',
    alt: 'Close-up of a high-tech circuit board with glowing cyan pathways and miniature components.',
  },
  {
    category: 'Culture',
    readTime: '5 min read',
    title: 'Remote Flow: A Guide',
    description:
      'Maintaining deep focus and creative momentum while working across distributed planetary timezones.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaygPaqoOTSZiqc6CUqQVLoc-TS6XGA5ddGYGp1AtB3NV3wI_DHpwVmIoYw3Ok_relnIBX9unX7cO86-yScol4IpPxzTXQaxuCXqbasEOI_FEF4btEtELhjVI4iHv3X__ruzdvzdx7OedUva5iZv2bytWcBOLJKF4MDeE-179Lvzv4J0UHrRreFxp9mSoHRlqUfAMImBLMXPS1yA82EIXjTdDFWZj4d4horG67O3cN5Jvpz53RpKoEqoIXlMTNdMPt5mxSMMmUcng',
    alt: 'A clean, minimalist home office setup with a high-end curved monitor and sleek ergonomic chair.',
  },
  {
    category: 'Design',
    readTime: '10 min read',
    title: 'Atmospheric UX Design',
    description:
      'How subtle motion and ambient lighting in UI can significantly reduce cognitive load for pro users.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEfXylsqS2aGR4B6yh5ERRYm474wAmmsqgtTNj62sC9XhYdgkau4ZDZYP_lXtYd-vTnfTwAO-iqDNYx9UGNcr_0mKHEfF1q2zwdKk_vkAMZrIlRxeqr2oT4afTrkjlEtS4E1FRoX5mE_5WoisyfBMgWNrKfy2v5SY0Z2mLgPiptWSM3o_BSzvj9LPnuPGM2d_1z11TTV3ODrUI17iIWF2jKfs5WHxWezmj1DuRV45wOTruJLaqhsmuaVE6R3urqVqh8FvdGmo5sYI',
    alt: 'Abstract digital visualization of flowing data streams in vibrant electric blue and deep violet.',
  },
];

const categories = [
  { name: 'Technology', count: 24 },
  { name: 'Design Trends', count: 18, active: true },
  { name: 'Development', count: 31 },
  { name: 'Productivity', count: 12 },
  { name: 'Announcements', count: 5 },
];

const trendingPosts = [
  { rank: '01', title: 'The Psychology of Blur', views: '3,420 views' },
  { rank: '02', title: 'Mastering Three.js Lighting', views: '2,890 views' },
  { rank: '03', title: 'Building for Vision Pro', views: '1,650 views' },
];

export default function Blog() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 overflow-hidden">
        <ScrollReveal>
            <section className="pb-20 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden glass-card group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="A futuristic workspace with holographic interface projections displaying data visualizations, bathed in a soft violet and neon blue light with high-key cinematic exposure. The setting is clean and minimalist with sleek metallic surfaces and large windows overlooking a blurred cybernetic city. The overall atmosphere is premium, sophisticated, and technologically advanced."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1EaE9rPeRMKdcg0gebXSNbCfqJTvYis41K3Mxpe3yeqNdIHNoGMWnWD6Qvtz0ryidu7Y5Zzvu1ASGZp8duwpCSxCeQ1-je2m2Gm6vrPztJ9bvjz6MOq0_1kYLMeBOMy03TVIMH_SuFMLGo6fWLhkqCOkWnN1m3P2PAJjcIrslRfgWzciofZnzWq3mtWHIVW5sC__SEvR7sZPBYfbdlVQRNG9yU4ckfwGhsEgpRfyI4hesUMEVNANn2RRkayH5X4Txoh_Ze3gFaFo"
                  />
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-md">Featured Story</span>
                    <span className="text-on-surface-variant text-label-md">• 12 min read</span>
                  </div>
                  <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight">
                    The Future of Orbital
                 <br />
                   <span className="text-gradient">Interface.</span></h1>
                  <p className="font-body-lg text-on-surface-variant max-w-xl">
                    Explore how spatial computing and glassmorphic design principles are reshaping the way we interact with
                    digital assets in the year 2025.
                  </p>
                  <div className="flex items-center space-x-6 pt-4">
                    <Link className="group flex items-center space-x-2 text-primary font-bold transition-all" href="#">
                      <span className="text-headline-md">Read the Article</span>
                      <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8 space-y-gutter">
              <ScrollReveal>
                <div className="flex justify-between items-end mb-8">
                  <h2 className="font-headline-lg text-on-background">Latest Perspectives</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full border border-outline/20 hover:bg-primary/5 transition-colors">
                      <Icon name="grid_view" />
                    </button>
                    <button className="p-2 rounded-full border border-outline/20 hover:bg-primary/5 transition-colors">
                      <Icon name="format_list_bulleted" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <ScrollReveal stagger={0.1}>
                  {blogPosts.map((post) => (
                    <div
                      key={post.title}
                      className="glass-card rounded-lg overflow-hidden group hover:translate-y-[-4px] transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          alt={post.alt}
                          src={post.image}
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-label-md text-primary font-bold">{post.category}</span>
                          <span className="text-label-md text-on-surface-variant">{post.readTime}</span>
                        </div>
                        <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-on-surface-variant line-clamp-3">{post.description}</p>
                        <Link
                          className="inline-flex items-center space-x-1 text-primary font-bold group/link"
                          href="#"
                        >
                          <span>Read More</span>
                          <Icon
                            name="chevron_right"
                            className="text-[18px] group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </ScrollReveal>
              </div>

              <div className="flex justify-center items-center space-x-2 pt-12">
                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline/20 hover:bg-primary/5 transition-all">
                  <Icon name="chevron_left" />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  1
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline/20 hover:bg-primary/5 transition-all">
                  2
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline/20 hover:bg-primary/5 transition-all">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline/20 hover:bg-primary/5 transition-all">
                  12
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline/20 hover:bg-primary/5 transition-all">
                  <Icon name="chevron_right" />
                </button>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-gutter">
              <ScrollReveal>
                <div className="glass-card p-6 rounded-lg">
                  <h4 className="font-headline-md text-on-surface mb-4">Search Stories</h4>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container/50 border-outline/20 rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Search articles..."
                      type="text"
                    />
                    <Icon
                      name="search"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="glass-card p-6 rounded-lg">
                  <h4 className="font-headline-md text-on-surface mb-6">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        className={`flex justify-between items-center p-3 rounded-full transition-all ${
                          cat.active
                            ? 'bg-primary/5 border border-primary/20'
                            : 'hover:bg-primary/10 group'
                        }`}
                        href="#"
                      >
                        <span
                          className={`font-body-md ${
                            cat.active ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'
                          }`}
                        >
                          {cat.name}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-label-md ${
                            cat.active
                              ? 'bg-primary text-white'
                              : 'bg-surface-container-high text-on-surface-variant'
                          }`}
                        >
                          {cat.count.toString().padStart(2, '0')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-primary text-white p-8 rounded-lg relative overflow-hidden shadow-xl shadow-primary/20">
                  <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-float">
                      <Icon name="mail" className="text-white" />
                    </div>
                    <h4 className="font-headline-md leading-tight">
                      Stay Orbiting.
                      <br />
                      Join our Newsletter.
                    </h4>
                    <p className="text-white/80 font-body-md">
                      Get the latest insights on design, tech, and the future delivered to your inbox every Tuesday.
                    </p>
                    <form className="space-y-3">
                      <input
                        className="w-full bg-white/10 border-white/20 rounded-full py-3 px-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/50 border-none transition-all"
                        placeholder="email@example.com"
                        type="email"
                      />
                      <button className="w-full bg-white text-primary font-bold py-3 rounded-full hover:bg-opacity-90 active:scale-95 transition-all">
                        Subscribe Now
                      </button>
                    </form>
                    <p className="text-[12px] text-white/50 text-center">Zero spam. Just orbit-shifting content.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="glass-card p-6 rounded-lg">
                  <h4 className="font-headline-md text-on-surface mb-6">Trending Now</h4>
                  <div className="space-y-6">
                    {trendingPosts.map((post) => (
                      <div
                        key={post.rank}
                        className="flex items-start space-x-4 group cursor-pointer"
                      >
                        <span className="text-headline-md font-bold text-outline/30 group-hover:text-primary transition-colors">
                          {post.rank}
                        </span>
                        <div>
                          <h5 className="font-body-md font-bold text-on-surface group-hover:underline">{post.title}</h5>
                          <p className="text-label-md text-on-surface-variant">{post.views}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <AgentChat />
    </div>
  );
}
