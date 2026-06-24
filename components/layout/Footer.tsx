import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function Footer() {
  return (
    <footer className="bg-surface-container w-full py-20 px-margin-desktop border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
        <div className="space-y-6">
          <div className="font-display-lg text-headline-md font-bold text-on-surface">Orbit</div>
          <p className="font-body-md text-on-surface-variant max-w-[200px]">
            Empowering the next generation of digital leaders.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-md text-primary uppercase">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/blog" className="text-on-surface-variant hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/privacy-policy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-md text-primary uppercase">Company</h4>
          <ul className="space-y-2">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><Link href="/social" className="text-on-surface-variant hover:text-primary transition-colors">Social</Link></li>
            <li><Link href="/terms-of-service" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-md text-primary uppercase">Contact</h4>
          <ul className="space-y-2">
            <li className="text-on-surface-variant">hello@orbit.tech</li>
            <li className="text-on-surface-variant">+1 (555) 888-2024</li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-on-surface-variant text-sm">© 2024 Orbit Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Icon name="language" className="text-on-surface-variant cursor-pointer hover:text-primary" />
          <Icon name="share" className="text-on-surface-variant cursor-pointer hover:text-primary" />
          <Icon name="shield" className="text-on-surface-variant cursor-pointer hover:text-primary" />
        </div>
      </div>
    </footer>
  );
}
