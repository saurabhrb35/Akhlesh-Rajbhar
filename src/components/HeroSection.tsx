import { useState } from 'react';
import { ArrowRight, MessageCircle, PhoneCall, Smartphone, Languages } from 'lucide-react';
import { BUSINESS_INFO, Language, TRANSLATIONS } from '../data/content';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onBookHomeService: () => void;
}

const HERO_IMAGE_SRC = '/src/assets/images/hero_mobile_repair_1795533839859.jpg';

export function HeroSection({
  lang,
  onChangeLang,
  onBookHomeService,
}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[lang].hero;

  const quickWhatsAppHref = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(
    lang === 'hi'
      ? 'नमस्ते Mr SK Saurabh Ji, मुझे मोबाइल रिपेयरिंग के बारे में जानकारी चाहिए।'
      : 'Hello Mr SK Saurabh Ji, I need assistance with a mobile repair service.'
  )}`;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-sky-400/10 bg-[#06080F]"
    >
      {/* Subtle atmospheric electric blue radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:pt-16 lg:pb-20">
        {/* Language Switcher Toolbar placed cleanly inside Hero above content */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <p className="text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            {t.locationLine}
          </p>

          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center gap-1 rounded-lg border border-sky-400/20 bg-[#0B1120] p-1"
          >
            <span className="inline-flex items-center px-2 text-sky-400" aria-hidden="true">
              <Languages className="h-4 w-4" />
            </span>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`whitespace-nowrap shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                lang === 'en'
                  ? 'bg-sky-500 text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`whitespace-nowrap shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                lang === 'hi'
                  ? 'bg-sky-500 text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        {/* Balanced 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center lg:col-span-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {t.headline}
            </h1>

            <p className="mt-4 text-lg font-semibold text-sky-400 sm:text-xl">
              {t.subtitle}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              {t.description}
            </p>

            {/* Primary & Direct Contact Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onBookHomeService}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-150 hover:bg-sky-400"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={quickWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-sky-400/35 bg-[#0D1629] px-5 py-3 text-sm font-semibold text-sky-300 transition-colors duration-150 hover:border-sky-400/70 hover:bg-sky-500/15 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-sky-400" />
                <span>{t.whatsappCta}</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-slate-700 bg-[#0B101D] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors duration-150 hover:border-slate-500 hover:text-white"
              >
                <PhoneCall className="h-4 w-4 text-sky-400" />
                <span className="tabular-nums">{t.callCta}</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-300">
              <span className="font-semibold text-sky-400">
                {lang === 'hi' ? 'दुकान का पता:' : 'Shop Address:'}
              </span>
              <a
                href="#shop-address"
                className="font-medium text-slate-100 underline decoration-sky-400/50 underline-offset-4 transition-colors hover:text-sky-300"
              >
                {lang === 'hi'
                  ? BUSINESS_INFO.shopAddressHi
                  : BUSINESS_INFO.shopAddressEn}
              </a>
            </div>
          </div>

          {/* Right Hero Visual Carrier */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B1120] sm:min-h-[360px]">
              {!imgError ? (
                <img
                  src={HERO_IMAGE_SRC}
                  alt="AKHLESH MOBILE REPAIRING precision smartphone repair workstation"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0D1629] to-[#070B14] p-8 text-center">
                  <Smartphone className="h-12 w-12 text-sky-400" />
                  <p className="font-display text-lg font-semibold text-slate-100">
                    {BUSINESS_INFO.name}
                  </p>
                </div>
              )}

              {/* Measured Scrim for legible caption */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080F]/95 via-[#06080F]/25 to-transparent"
              />

              <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-sky-400/20 bg-[#070C18]/85 p-4 backdrop-blur-md">
                <p className="font-display text-base font-semibold text-white">
                  {t.imageCaptionTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {t.imageCaptionSub}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Service Commitments Row */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.commitments.map((item) => (
            <div
              key={item.label}
              className="glass-surface rounded-xl px-5 py-4"
            >
              <p className="text-xs font-medium text-slate-400">{item.label}</p>
              <p className="mt-1 font-display text-base font-semibold text-slate-50 tabular-nums">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
