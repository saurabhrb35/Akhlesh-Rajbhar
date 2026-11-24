import { useState } from 'react';
import { MapPin, ShieldCheck, User, Wrench } from 'lucide-react';
import { BUSINESS_INFO, Language, TRANSLATIONS } from '../data/content';

interface CoverageAndAboutProps {
  lang: Language;
}

const ABOUT_IMAGE_SRC = '/src/assets/images/about_technician_bench_1795533839762.jpg';

export function CoverageAndAbout({ lang }: CoverageAndAboutProps) {
  const [aboutImgErr, setAboutImgErr] = useState(false);
  const [ownerImgErr, setOwnerImgErr] = useState(false);
  const coverage = TRANSLATIONS[lang].coverage;
  const about = TRANSLATIONS[lang].about;

  return (
    <>
      {/* Service Area Section */}
      <section
        id="coverage"
        className="border-b border-sky-400/10 bg-[#070A13] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {coverage.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              {coverage.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {coverage.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {coverage.areas.map((area) => (
              <div key={area.region} className="glass-surface rounded-2xl p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10">
                  <MapPin className="h-5 w-5 text-sky-400" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {area.region}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="border-b border-sky-400/10 bg-[#06080F] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            {/* Technician Bench Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B1120]">
                {!aboutImgErr ? (
                  <img
                    src={ABOUT_IMAGE_SRC}
                    alt="Microscope and precision micro-soldering mobile repair workstation"
                    referrerPolicy="no-referrer"
                    onError={() => setAboutImgErr(true)}
                    className="h-full w-full object-cover lg:h-full"
                  />
                ) : (
                  <div className="flex h-full min-h-[260px] items-center justify-center bg-slate-900">
                    <Wrench className="h-10 w-10 text-sky-400" />
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080F]/75 via-transparent to-transparent"
                />
              </div>
            </div>

            {/* About Copy + Framed Owner Portrait */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#0B1120] ring-2 ring-sky-400/75 ring-offset-4 ring-offset-[#06080F] shadow-lg shadow-sky-500/20 sm:h-24 sm:w-24">
                  {!ownerImgErr ? (
                    <img
                      src={BUSINESS_INFO.ownerPhoto}
                      alt={`${BUSINESS_INFO.owner} — Owner, ${BUSINESS_INFO.name}`}
                      referrerPolicy="no-referrer"
                      onError={() => setOwnerImgErr(true)}
                      className="h-full w-full object-cover object-[50%_20%]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-9 w-9 text-sky-400" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                    {about.eyebrow}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                    {BUSINESS_INFO.owner}
                  </p>
                  <p className="text-xs text-slate-400">
                    {lang === 'hi'
                      ? `ओनर · ${BUSINESS_INFO.name}`
                      : `Owner · ${BUSINESS_INFO.name}`}
                  </p>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
                {about.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {about.p1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {about.p2}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {about.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-800 bg-[#0B1120] p-4"
                  >
                    <ShieldCheck className="h-5 w-5 text-sky-400" />
                    <h3 className="mt-3 font-display text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
