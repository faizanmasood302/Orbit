import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { ScrollReveal } from '@/components/anim/ScrollReveal';
import { CountUp } from '@/components/anim/CountUp';
import { Icon } from '@/components/ui/Icon';

export default function Home() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="relative pt-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 orbital-glow" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-secondary-container/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h1 className="font-black text-[clamp(2.25rem,5.5vw,112px)] leading-none tracking-tighter text-on-surface">
                Creating The<br />
                Perfect Approach<br />
                To <span className="text-gradient">Marketing</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                More than just storing ideas. Letting you have the best business outcome. Overflow yourself with ideas and cutting-edge digital execution.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/contact" className="group flex items-center gap-3 font-label-md text-label-md text-primary">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name="play_arrow" className="text-[20px]" />
                </span>
                Join Our Live Session
              </Link>
            </div>
            <ScrollReveal delay={0.3} className="glass-card p-8 rounded-lg inline-flex flex-col gap-2 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full border-4 border-surface flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-headline-lg text-primary"><CountUp end={99} suffix="%" /></span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-[240px]">
                Success Rates Guarantee. We create the base of your business.
              </p>
              <Link href="/contact" className="text-primary font-bold underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all">
                Get a Live Demo
              </Link>
            </ScrollReveal>
          </ScrollReveal>
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <div className="relative z-10 w-full h-full float-animation">
                <div className="w-full h-full rounded-full glass-card inner-glow relative flex items-center justify-center overflow-hidden border-white/40">
                  <img
                    className="w-[110%] h-[110%] object-cover opacity-90 mix-blend-multiply"
                    alt="Abstract 3D glass orb"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsMbsIz9LdsUcg0ewacxe0a4crjru1PyA5rOBFeBjNSbkXSqe5aVMSXVVMkNf8k5Q4LPWPif26lrSXtqOK51QZLZlDoE5r_m2iwDP_W6_N7nuoiRSXnShQ1bFbxsMSQ2I6q7z4YEJU7AQlHqNDSIGehlGN4dPQOY_WunwTVr_lmacwyKDO8vlnjJ3pzbeD1UXTluBocDhCdluqZLuSIIHX0HCf3MkpCOH1rs7qy7esdVWTxfOqQJ2XgPfrvMIwAy_hhlsiDeEtBYE"
                  />
                </div>
              </div>
              <div className="absolute -right-8 top-1/4 z-20 glass-card px-4 py-2 rounded-full flex items-center gap-2 animate-bounce transition-all duration-[3000ms] delay-700">
                <Icon name="hub" className="text-primary text-[18px]" />
                <span className="font-label-md text-label-md">Transforming solutions</span>
              </div>
              <div className="absolute -right-16 top-1/2 z-20 glass-card px-4 py-2 rounded-full flex items-center gap-2 animate-pulse transition-all duration-[4000ms]">
                <Icon name="lightbulb" className="text-secondary text-[18px]" />
                <span className="font-label-md text-label-md">Inspire the masses</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 z-20 glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <Icon name="verified_user" className="text-on-surface-variant text-[18px]" />
                <span className="font-label-md text-label-md">Commitment of trust</span>
              </div>
              <div className="absolute inset-0 scale-125 opacity-20 -z-10 rotate-12">
                <img
                  className="w-full h-full object-contain"
                  alt="Topography wireframe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgqsI_Ysg7UJDoPxoHahr14h5nEDpEmm_aML-XnuZmV7eIa-6XxhfmnSMa9qUOGpM1GY1im-yzco0StzIK-mTA2IqZplmCd5XjZzh_dBP7byPFq6t4-8-1I_wjv4ITgbmvQHn2wIW6dusHHhK2eu8k6pddYjzPhpKMBl7sKePrRtIf3-uQ6nG6rUpfGGVyBsb7YJYeQW2WvRbnzMJ6tA75ExEthPgNflSSrzNEYevtc3JV93KYA5OaMPXnLZpuxt0g_YUgpaNn9y4"
                />
              </div>
            </div>
          </div>
        </div>
        <ScrollReveal>
          <section className="mt-40 mb-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full aspect-square relative mb-8">
                <div className="w-full h-full glass-card rounded-lg flex items-center justify-center p-8 overflow-hidden group">
                  <img
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    alt="Abstract 3D glass sculpture"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0vzZP1qLar2FQBimHvjh7I40fbjpfjC-bKwrcdP18fsqJN_fhgmUJhZ0NSJjjVTdjiOXY8c3JWPFWe-kw_KaIfhLno9ce6j8h7xDofozG5cDnJBjtyPvlF-9GhdWMxcL5weMTRD58Q1QUONjbtiRRAKIKXW6UsO6mSuYlfAP4mZLmbN61S1n99VKFOeZhiYPM6sGy4nQS8ol_OI3BiqIfKC1lSfNqrwFwX4CBVtwAa0q7KPrhmyJ76iHMhi3Xra6IKF00agWcfSs"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Team member"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPDe1JoMVNzVMeFE089ZaF-qLl99gv6jKjYHGKJ--HfpvHwWUKkof8dVYVpBVLNiIgtBEXFJsq7IKAmLqfR8gZcVTwY4zz2xt6c14rDGVUzqAV3cM9dd81ZWu1x0liukUIRYGc7AmZISCI34l2j4I-Jd12hDZfFom-OnOOxr_qqMnIJ50eZSUDrsNV0c7H5dZG75FdKhjz4wm5Ukl4MvRJDN2u00aNofJZNaccG6OYKBjb185H00oyskeO6BudVmwz42mN3jxv4Go"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Team member"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfS8MyZIE1d94Yjc5pBO-qg3-42L3_hsRTyj9eSQ43j2dSbtknKLHdO6VacBlkKGWfGCp2CNLHHWMvL8SJl8o27mlfRl4jPAxmZC5M2bUdnUYDTzwBI6z2ROCLyyiyVRMVVNYOod4j3GfGixeLsCwUFikeUKuA3W8atNqP2V5sdHb9BAZo4SfGdq60mZ47OCS34x-saKCu8dwX7mw9Xr11yHBupeysHFz_tg8YXmkEFsMQ5r4oJKq1UP6pUmVK3xf1-FFFbb_qxmY"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Team member"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbG9XtWfG9zbPWsJxq9KVMeTELb2N5xC-0VB5qcOVmkxofMmUH4ZWkrXtBrF_kjDTw4P5ARfmjhHz2XWF5kopBHDnsTr7D5fx9fYkCJ-9Jtl1Ky6syfUXn8M-vxh6dyBz2a2Dhww9NNUKazfh3E-WzjmDpVqDy_neUF6bnQT957lfUvRsGc9Sb9Ap1I-iypPf9EWPiCIm-zQ2bcDcg1mU51WOtDV_swCEIMVSWkx06zIMJA8h4LhlYOnXrFwibM3OyZAi8fpYlm6U"
                    />
                  </div>
                </div>
                <p className="font-label-md text-[13px] text-on-surface-variant leading-tight">
                  100+ guided solutions covering <br /> growth and success ratio of your business.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="glass-card p-10 rounded-lg space-y-8">
                <div className="flex flex-wrap gap-3">
                  {['Crypto', 'Web Application', 'Data', 'Analysis', 'SEO', 'Management', 'Social Media'].map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border border-outline-variant font-label-md text-label-md hover:bg-primary hover:text-white transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Our Excellent Services</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    The research your brand needs. Advertise anything. Brilliance is our business model for modern growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 pb-4">
              <div className="flex items-center gap-3 text-primary">
                <Icon name="rocket_launch" fill />
                <span className="font-label-md text-label-md uppercase tracking-wider">Concept is what we do</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                Organizing Your Ideas For Your Next Venture
              </h2>
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
