import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { Language, MOBILE_BRANDS, ServiceId } from '../data/content';

interface RepairProcessAndBrandsProps {
  lang: Language;
  onSelectBrand: (brand: string) => void;
  onSelectService: (serviceId: ServiceId) => void;
}

interface SymptomTip {
  id: string;
  serviceId: ServiceId;
  en: {
    tab: string;
    title: string;
    advice: string;
    warning: string;
    cta: string;
  };
  hi: {
    tab: string;
    title: string;
    advice: string;
    warning: string;
    cta: string;
  };
}

const SYMPTOM_TIPS: SymptomTip[] = [
  {
    id: 'water',
    serviceId: 'water-damage-inspection',
    en: {
      tab: 'Water / Liquid Spill',
      title: 'Phone Fell in Water or Got Wet?',
      advice:
        'Power off the phone immediately, remove the SIM tray, and wipe the outside dry with a clean cloth. Bring it in or book a home inspection quickly before corrosion spreads on the motherboard.',
      warning: 'Do NOT plug in the charger, use a hair dryer, or bury it in rice.',
      cta: 'Book Urgent Water Inspection',
    },
    hi: {
      tab: 'पानी में गिरना',
      title: 'फोन पानी में गिर गया या भीग गया है?',
      advice:
        'तुरंत फोन को स्विच ऑफ करें, सिम ट्रे निकालें और साफ कपड़े से पोंछें। मदरबोर्ड पर जंग लगने से पहले जल्दी जांच बुक करें।',
      warning: 'फोन को चार्जर पर न लगाएं, हेयर ड्रायर न चलाएं और चावल में न रखें।',
      cta: 'तुरंत वॉटर जांच बुक करें',
    },
  },
  {
    id: 'screen',
    serviceId: 'display-replacement',
    en: {
      tab: 'Cracked Screen / Black Display',
      title: 'Broken Glass, Lines, or Black Screen?',
      advice:
        'If touch works and the picture is clear, sometimes only outer glass or touch care is needed. If black spots, green/pink lines, or blank display appear, full OLED/LCD assembly replacement restores it cleanly.',
      warning: 'Avoid pressing hard on cracked glass to protect the inner OLED panel.',
      cta: 'Book Display Replacement',
    },
    hi: {
      tab: 'टूटी स्क्रीन / ब्लैक डिस्प्ले',
      title: 'स्क्रीन टूट गई है या डिस्प्ले पर लाइनें हैं?',
      advice:
        'अगर डिस्प्ले पर काले धब्बे, हरी/गुलाबी लाइन या ब्लैक स्क्रीन आ गई है, तो नया डिस्प्ले पैनल लगाकर फोन को पहले जैसा ठीक किया जा सकता है।',
      warning: 'टूटे कांच पर जोर से न दबाएं ताकि अंदर की डिस्प्ले और न खराब हो।',
      cta: 'डिस्प्ले रिप्लेसमेंट बुक करें',
    },
  },
  {
    id: 'battery',
    serviceId: 'battery-replacement',
    en: {
      tab: 'Fast Drain / Swollen Battery',
      title: 'Battery Draining Fast or Back Panel Lifting?',
      advice:
        'A battery that drops from 40% to 0% or pushes the back cover outward is worn out. Replacing it early protects your display and motherboard — and every battery replacement includes a 6 Months Warranty.',
      warning: 'Stop using or fast-charging a swollen battery immediately.',
      cta: 'Book Battery (6M Warranty)',
    },
    hi: {
      tab: 'बैटरी जल्दी खत्म / फूलना',
      title: 'बैटरी जल्दी उतरती है या बैक पैनल उठ रहा है?',
      advice:
        'अगर फोन अचानक बंद होता है या बैटरी फूलने से बैक कवर उठ रहा है, तो समय पर नई बैटरी लगवाएं। हमारी हर बैटरी रिप्लेसमेंट पर 6 महीने की वारंटी मिलती है।',
      warning: 'फूली हुई बैटरी को तुरंत चार्ज करना बंद कर दें।',
      cta: 'बैटरी बुक करें (6 महीने वारंटी)',
    },
  },
  {
    id: 'charging',
    serviceId: 'charging-jack-repair',
    en: {
      tab: 'Slow / Loose Charging',
      title: 'Cable Loose or Charging Keeps Disconnecting?',
      advice:
        'Many charging issues start with compacted pocket lint or worn port pins. We safely clean the port first and replace the charging jack only if pins or flex connections are damaged.',
      warning: 'Never poke inside the charging port with metal pins or needles.',
      cta: 'Book Charging Jack Repair',
    },
    hi: {
      tab: 'चार्जिंग ढीली / स्लो होना',
      title: 'चार्जर हिलने पर चार्जिंग बंद हो जाती है?',
      advice:
        'अक्सर पोर्ट में धूल जमने या पिन घिसने से चार्जिंग रुकती है। हम पहले सुरक्षित सफाई करते हैं और जरूरत होने पर ही चार्जिंग जैक बदलते हैं।',
      warning: 'चार्जिंग पोर्ट में कभी भी सुई या धातु की पिन न डालें।',
      cta: 'चार्जिंग जैक रिपेयर बुक करें',
    },
  },
];

export function RepairProcessAndBrands({
  lang,
  onSelectBrand,
  onSelectService,
}: RepairProcessAndBrandsProps) {
  const [activeTipId, setActiveTipId] = useState<string>(SYMPTOM_TIPS[0].id);
  const isHi = lang === 'hi';

  const activeTip =
    SYMPTOM_TIPS.find((item) => item.id === activeTipId) ?? SYMPTOM_TIPS[0];
  const tipCopy = activeTip[lang];

  const steps = isHi
    ? [
        {
          num: '01',
          title: 'मॉडल और समस्या बताएं',
          desc: 'बुकिंग फॉर्म या व्हाट्सएप पर अपने फोन का नाम और खराबी चुनें — होम सर्विस या शॉप विज़िट दोनों उपलब्ध हैं।',
          icon: <Smartphone className="h-5 w-5 text-sky-400" />,
        },
        {
          num: '02',
          title: 'पारदर्शी जांच और खर्च',
          desc: 'काम शुरू करने से पहले फोन की जांच करके सही समस्या, पार्ट विकल्प और स्पष्ट कीमत बताई जाती है।',
          icon: <ClipboardCheck className="h-5 w-5 text-sky-400" />,
        },
        {
          num: '03',
          title: 'आपकी आंखों के सामने रिपेयर',
          desc: 'आपके घर या सेक्टर 34, फरीदाबाद शॉप पर साफ-सुथरी रिपेयरिंग। काम पूरा होने के बाद ही पेमेंट करें।',
          icon: <Wrench className="h-5 w-5 text-sky-400" />,
        },
      ]
    : [
        {
          num: '01',
          title: 'Share Device & Problem',
          desc: 'Pick your mobile brand, model, and issue via the booking form or WhatsApp — choose Home Service or Shop Visit.',
          icon: <Smartphone className="h-5 w-5 text-sky-400" />,
        },
        {
          num: '02',
          title: 'Clear Inspection & Quote',
          desc: 'Before replacing any component, we inspect the device and share exact part options and transparent pricing.',
          icon: <ClipboardCheck className="h-5 w-5 text-sky-400" />,
        },
        {
          num: '03',
          title: 'Doorstep or Shop Repair',
          desc: 'Repaired cleanly in front of you at home or at our Sector 34, Faridabad shop. Pay only after completion.',
          icon: <Wrench className="h-5 w-5 text-sky-400" />,
        },
      ];

  return (
    <section className="border-b border-sky-400/10 bg-[#06080F] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
        {/* Part 1: 3-Step Transparent Process */}
        <div>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {isHi ? 'काम करने का तरीका' : 'How Repair Works'}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              {isHi
                ? '3 आसान स्टेप्स में भरोसेमंद मोबाइल रिपेयर'
                : 'Simple, Transparent 3-Step Repair Flow'}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="glass-surface rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10">
                    {step.icon}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Quick Safety & Symptom Guide */}
        <div className="glass-surface rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                {isHi ? 'तुरंत सलाह गाइड' : 'Quick Symptom Guide'}
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-white">
                {isHi
                  ? 'रिपेयर से पहले जरूरी सावधानियां'
                  : 'What To Do Before Your Technician Arrives'}
              </h3>
            </div>

            <div
              role="tablist"
              aria-label={isHi ? 'मोबाइल समस्या चुनें' : 'Select symptom'}
              className="flex flex-wrap gap-2"
            >
              {SYMPTOM_TIPS.map((tip) => {
                const isActive = tip.id === activeTip.id;
                return (
                  <button
                    key={tip.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTipId(tip.id)}
                    className={`whitespace-nowrap shrink-0 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'border-sky-400 bg-sky-500 text-slate-950'
                        : 'border-slate-700/80 bg-[#080D1A] text-slate-300 hover:border-sky-400/40 hover:text-white'
                    }`}
                  >
                    {tip[lang].tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-8">
              <h4 className="font-display text-xl font-bold text-white">
                {tipCopy.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {tipCopy.advice}
              </p>
              <div className="flex items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-200 sm:text-sm">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>{tipCopy.warning}</span>
              </div>
            </div>

            <div className="flex lg:col-span-4 lg:justify-end">
              <button
                type="button"
                onClick={() => onSelectService(activeTip.serviceId)}
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-sky-400"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{tipCopy.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Part 3: Clickable Supported Mobile Brands */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-white">
              {isHi
                ? 'सभी प्रमुख मोबाइल ब्रांड की रिपेयरिंग (ब्रांड चुनें)'
                : 'Brands We Repair — Click a Brand to Pre-Fill Booking'}
            </h3>
            <span className="text-xs text-slate-400">
              {isHi ? 'Android और iPhone दोनों' : 'iOS & Android Smartphones'}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {MOBILE_BRANDS.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => onSelectBrand(brand)}
                className="rounded-xl border border-slate-800 bg-[#0A101E] px-3.5 py-3 text-center text-xs font-semibold text-slate-200 transition-colors hover:border-sky-400/60 hover:bg-sky-500/10 hover:text-sky-300"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
