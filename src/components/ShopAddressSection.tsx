import { ExternalLink, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO, Language } from '../data/content';

interface ShopAddressSectionProps {
  lang: Language;
}

export function ShopAddressSection({ lang }: ShopAddressSectionProps) {
  const isHi = lang === 'hi';

  const directionsWhatsAppHref = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(
    isHi
      ? 'नमस्ते Mr SK Saurabh Ji, मैं आपकी दुकान (सेक्टर 34, फरीदाबाद) पर मोबाइल रिपेयर करवाने आ रहा हूँ।'
      : 'Hello Mr SK Saurabh Ji, I would like to visit your shop at Sector 34, Faridabad for a mobile repair.'
  )}`;

  return (
    <section
      id="shop-address"
      aria-label={isHi ? 'दुकान का पता' : 'Shop Address'}
      className="border-b border-sky-400/15 bg-[#06080F] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-sky-400/40 bg-gradient-to-br from-[#0D1A33] via-[#091224] to-[#070B15] p-6 shadow-xl shadow-sky-500/10 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Highlighted Shop Address Details */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>{isHi ? 'दुकान का मुख्य पता' : 'Official Shop Address'}</span>
              </div>

              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                {isHi
                  ? BUSINESS_INFO.shopAddressHi
                  : BUSINESS_INFO.shopAddressEn}
              </h2>

              <p className="mt-3 text-sm font-semibold text-sky-300">
                {isHi
                  ? BUSINESS_INFO.openingHoursHi
                  : BUSINESS_INFO.openingHoursEn}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {isHi
                  ? 'AKHLESH MOBILE REPAIRING (तीसरी मंज़िल, पानी की टंकी के सामने वाला मकान, सेक्टर 34) पर सीधे आएं या होम सर्विस बुक करें। Google Maps पर सटीक लोकेशन देखने के लिए नीचे क्लिक करें।'
                  : 'Walk in directly at AKHLESH MOBILE REPAIRING (3rd Floor, House In Front of Pani Ki Tanki, Sector 34, Faridabad) or book doorstep home service across Faridabad, Delhi & Haryana.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.shopMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-400"
                >
                  <MapPin className="h-4 w-4" />
                  <span>{isHi ? 'Google Maps में देखें' : 'Open in Google Maps'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={directionsWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-sky-400/35 bg-[#0A1326] px-4 py-3 text-sm font-semibold text-sky-300 transition-colors hover:border-sky-400/70 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-sky-400" />
                  <span>{isHi ? 'लोकेशन WhatsApp करें' : 'WhatsApp Shop Visit'}</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-slate-700 bg-[#080D1A] px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                >
                  <PhoneCall className="h-4 w-4 text-sky-400" />
                  <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Live Embedded Google Maps Frame */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-sky-400/30 bg-[#060912]">
                <iframe
                  title="AKHLESH MOBILE REPAIRING Official Shop Location"
                  src={BUSINESS_INFO.shopMapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0 sm:h-72"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
