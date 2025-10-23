'use client';

import { Mail, Phone, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Sales on Your Mind</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Fractional sales leadership for startups, SMBs, and nonprofits seeking measurable growth without the overhead.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@learn.salesonyourmind.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  info@learn.salesonyourmind.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+1-202-975-9075"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +1-202-975-9075
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/in/srivatsa-srinivasan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© 2025 Sales on Your Mind. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and purpose-driven execution.
          </p>
        </div>
      </div>
    </footer>
  );
}
