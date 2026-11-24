import { useState } from 'react';
import { MapPin, MessageCircle, PhoneCall, Store, User } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { BUSINESS_INFO, Language, TRANSLATIONS } from '../data/content';

interface ContactAndFooterProps {
  lang: Language;
}

export function ContactAndFooter({ lang }: ContactAndFooterProps) {
  const [ownerImgErr, setOwnerImgErr] = useState(false);
  const contactT = TRANSLATIONS[lang].contact;
  const footerT = TRANSLATIONS[lang].footer;
  const navT = TRANSLATIONS[lang].nav;
  const floatingT = TRANSLATIONS[lang].floating;

  const directWhatsAppHref = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(
    lang === 'hi'
      ? 'नमस्ते Mr SK Saurabh Ji, मुझे मोबाइल रिपेयरिंग सर्विस बुक करनी है।'
      : 'Hello Mr SK Saurabh Ji, I would like to book a mobile repair service.'
  )}`;

  return (
    <>
      {/* Direct Contact Section */}
      <section
        id="contact"
        className="border-b border-sky-400/10 bg-[#070A13] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                {contactT.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
                {contactT.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
                {contactT.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-sky-400"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span className="tabular-nums">{contactT.callBtn}</span>
                </a>

                <a
                  href={directWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-sky-400/35 bg-[#0D1629] px-5 py-3 text-sm font-semibold text-sky-300 transition-colors hover:border-sky-400/70 hover:bg-sky-500/15 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-sky-400" />
                  <span>{contactT.waBtn}</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
              <div className="glass-surface flex items-center gap-4 rounded-2xl p-5">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#0B1120] ring-2 ring-sky-400/65">
                  {!ownerImgErr ? (
                    <img
                      src={BUSINESS_INFO.ownerPhoto}
                      alt={`${BUSINESS_INFO.owner} — Owner`}
                      referrerPolicy="no-referrer"
                      onError={() => setOwnerImgErr(true)}
                      className="h-full w-full object-cover object-[50%_20%]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-6 w-6 text-sky-400" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400">{contactT.ownerLabel}</p>
                  <p className="mt-0.5 font-display text-lg font-semibold text-white">
                    {BUSINESS_INFO.owner}
                  </p>
                </div>
              </div>

              <div className="glass-surface rounded-2xl p-5">
                <PhoneCall className="h-5 w-5 text-sky-400" />
                <p className="mt-3 text-xs text-slate-400">{contactT.phoneLabel}</p>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="mt-1 block font-mono text-lg font-semibold text-sky-300 tabular-nums hover:text-sky-200"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="glass-surface rounded-2xl p-5">
                <Store className="h-5 w-5 text-sky-400" />
                <p className="mt-3 text-xs text-slate-400">{contactT.modeLabel}</p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  {contactT.modeValue}
                </p>
              </div>

              <div className="glass-surface rounded-2xl p-5">
                <MapPin className="h-5 w-5 text-sky-400" />
                <p className="mt-3 text-xs text-slate-400">{contactT.areaLabel}</p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  {contactT.areaValue}
                </p>
              </div>

              {/* Dedicated Shop Address & Timing Card */}
              <div className="glass-surface flex flex-col justify-between gap-3 rounded-2xl p-5 sm:col-span-2 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-medium text-sky-400">
                    {lang === 'hi' ? 'दुकान का पता और समय' : 'Shop Address & Hours'}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-white sm:text-lg">
                    {lang === 'hi'
                      ? BUSINESS_INFO.shopAddressHi
                      : BUSINESS_INFO.shopAddressEn}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    {lang === 'hi'
                      ? BUSINESS_INFO.openingHoursHi
                      : BUSINESS_INFO.openingHoursEn}
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.shopMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-sky-400/35 bg-[#0D1629] px-4 py-2 text-xs font-semibold text-sky-300 transition-colors hover:border-sky-400 hover:text-white"
                >
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span>{lang === 'hi' ? 'Google Maps खोलें' : 'Open Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Footer with Shop Address & Hours */}
      <footer className="bg-[#05070D] py-10 pb-24 sm:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:flex-row sm:items-start sm:px-6">
          <div className="space-y-2">
            <BrandMark compact />
            <p className="text-xs text-slate-400">{footerT.tagline}</p>
            <p className="text-xs text-slate-300">
              <span className="font-semibold text-sky-400">
                {lang === 'hi' ? 'पता: ' : 'Shop Address: '}
              </span>
              <a
                href={BUSINESS_INFO.shopMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 hover:underline"
              >
                {lang === 'hi'
                  ? BUSINESS_INFO.shopAddressHi
                  : BUSINESS_INFO.shopAddressEn}
              </a>
            </p>
            <p className="text-xs text-slate-400">
              <span>
                {lang === 'hi'
                  ? BUSINESS_INFO.openingHoursHi
                  : BUSINESS_INFO.openingHoursEn}
              </span>
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="font-mono text-slate-200 tabular-nums hover:text-sky-300"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400"
          >
            <a href="#services" className="hover:text-sky-400">
              {navT.services}
            </a>
            <a href="#booking" className="hover:text-sky-400">
              {navT.book}
            </a>
            <a href="#coverage" className="hover:text-sky-400">
              {navT.coverage}
            </a>
            <a href="#about" className="hover:text-sky-400">
              {navT.about}
            </a>
            <a href="#faq" className="hover:text-sky-400">
              {navT.faq}
            </a>
          </nav>

          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {footerT.rights}
          </p>
        </div>
      </footer>

      {/* Compact Floating WhatsApp + Call Action Dock (well under 15% mobile height) */}
      <div className="fixed right-4 bottom-4 z-40 flex items-center gap-2">
        <a
          href={BUSINESS_INFO.phoneHref}
          aria-label="Call 7503371249"
          className="inline-flex h-11 items-center gap-1.5 rounded-full border border-sky-400/35 bg-[#0A1222]/95 px-4 text-xs font-semibold text-slate-100 shadow-lg backdrop-blur-md transition-transform duration-150 hover:-translate-y-0.5 hover:border-sky-400"
        >
          <PhoneCall className="h-4 w-4 text-sky-400" />
          <span>{floatingT.call}</span>
        </a>

        <a
          href={directWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp 7503371249"
          className="inline-flex h-11 items-center gap-1.5 rounded-full bg-sky-500 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sky-400"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{floatingT.whatsapp}</span>
        </a>
      </div>
    </>
  );
}
