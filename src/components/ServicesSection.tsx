import { useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Cpu,
  Droplets,
  Hand,
  MonitorSmartphone,
  Volume2,
  Wrench,
} from 'lucide-react';
import {
  Language,
  REPAIR_SERVICES,
  ServiceId,
  TRANSLATIONS,
} from '../data/content';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceId: ServiceId) => void;
  onScheduleHomeVisit: () => void;
}

const SERVICE_ICONS: Record<ServiceId, ReactNode> = {
  'display-replacement': <MonitorSmartphone className="h-5 w-5 text-sky-400" />,
  'touch-repair': <Hand className="h-5 w-5 text-sky-400" />,
  'battery-replacement': <BatteryCharging className="h-5 w-5 text-sky-400" />,
  'charging-jack-repair': <Cable className="h-5 w-5 text-sky-400" />,
  'speaker-microphone-repair': <Volume2 className="h-5 w-5 text-sky-400" />,
  'software-problems': <Cpu className="h-5 w-5 text-sky-400" />,
  'water-damage-inspection': <Droplets className="h-5 w-5 text-sky-400" />,
  'other-mobile-repairs': <Wrench className="h-5 w-5 text-sky-400" />,
};

const KIT_IMAGE_SRC = '/src/assets/images/doorstep_repair_kit_1795533840095.jpg';

export function ServicesSection({
  lang,
  onSelectService,
  onScheduleHomeVisit,
}: ServicesSectionProps) {
  const [kitImgError, setKitImgError] = useState(false);
  const t = TRANSLATIONS[lang].services;

  return (
    <section
      id="services"
      className="border-b border-sky-400/10 bg-[#070A13] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 8 Repair Services Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {REPAIR_SERVICES.map((service) => {
            const copy = service[lang];
            const spanClass = service.featured ? 'lg:col-span-2' : 'lg:col-span-1';

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelectService(service.id)}
                className={`glass-surface glass-surface-hover group flex flex-col justify-between rounded-2xl p-6 text-left ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10">
                      {SERVICE_ICONS[service.id]}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                      {service.code}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-white transition-colors group-hover:text-sky-300">
                    {copy.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {copy.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <p className="text-xs text-slate-400">{copy.scope}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 transition-colors group-hover:text-sky-300">
                    <span>{copy.cta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Doorstep Kit Feature Strip */}
        <div className="mt-8 grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B1120] lg:grid-cols-12">
          <div className="relative min-h-[220px] lg:col-span-5">
            {!kitImgError ? (
              <img
                src={KIT_IMAGE_SRC}
                alt="Portable doorstep smartphone repair kit and replacement components"
                referrerPolicy="no-referrer"
                onError={() => setKitImgError(true)}
                className="h-full w-full object-cover lg:h-full"
              />
            ) : (
              <div className="flex h-full min-h-[220px] items-center justify-center bg-slate-900">
                <Wrench className="h-10 w-10 text-sky-400" />
              </div>
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1120]/60 hidden lg:block"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-2xl font-bold text-white">
              {t.kitTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {t.kitBody}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onScheduleHomeVisit}
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-sky-400"
              >
                <span>{t.kitCta}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
