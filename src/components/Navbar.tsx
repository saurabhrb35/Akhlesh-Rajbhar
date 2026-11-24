import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { Language, TRANSLATIONS } from '../data/content';

interface NavbarProps {
  lang: Language;
  onBookHomeService: () => void;
}

export function Navbar({ lang, onBookHomeService }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#booking', label: t.book },
    { href: '#coverage', label: t.coverage },
    { href: '#about', label: t.about },
    { href: '#faq', label: t.faq },
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-sky-400/15 bg-[#06080F]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          aria-label="AKHLESH MOBILE REPAIRING Home"
          className="shrink-0 focus-visible:rounded-md"
        >
          <BrandMark compact />
        </a>

        {/* Zone 2: Concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-sky-400 hover:underline hover:underline-offset-8"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookHomeService}
            className="hidden whitespace-nowrap shrink-0 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors duration-150 hover:bg-sky-400 sm:inline-flex"
          >
            {t.cta}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/20 bg-slate-900/70 text-slate-100 transition-colors hover:border-sky-400/50 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-sky-400/15 bg-[#080C17] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookHomeService();
              }}
              className="mt-2 w-full rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
            >
              {t.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
