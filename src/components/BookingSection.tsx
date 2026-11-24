import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Home,
  MessageCircle,
  Store,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  Language,
  MOBILE_BRANDS,
  REPAIR_SERVICES,
  ServiceId,
  TRANSLATIONS,
} from '../data/content';

export type ServiceMode = 'home' | 'shop';

interface BookingSectionProps {
  lang: Language;
  selectedService: ServiceId;
  selectedBrand: string;
  serviceMode: ServiceMode;
  onChangeServiceMode: (mode: ServiceMode) => void;
  onChangeSelectedService: (serviceId: ServiceId) => void;
  onChangeSelectedBrand: (brand: string) => void;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  brand?: string;
  model?: string;
  address?: string;
  date?: string;
}

function getNextWorkingDayIso(): string {
  const now = new Date();
  // If today is Sunday (0), advance to Monday
  if (now.getDay() === 0) {
    now.setDate(now.getDate() + 1);
  }
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isSundayDate(isoDate: string): boolean {
  if (!isoDate) return false;
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) return false;
  return new Date(y, m - 1, d).getDay() === 0;
}

export function BookingSection({
  lang,
  selectedService,
  selectedBrand,
  serviceMode,
  onChangeServiceMode,
  onChangeSelectedService,
  onChangeSelectedBrand,
}: BookingSectionProps) {
  const t = TRANSLATIONS[lang].booking;

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [model, setModel] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(getNextWorkingDayIso);
  const [timeSlot, setTimeSlot] = useState<string>(t.timeSlots[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const [confirmedPayload, setConfirmedPayload] = useState<{
    formattedText: string;
    whatsappUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const hiddenLaunchLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Sync default time slot label when language switches
  useEffect(() => {
    setTimeSlot(TRANSLATIONS[lang].booking.timeSlots[0]);
  }, [lang]);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const digits = mobile.replace(/\D/g, '');
    if (!name.trim()) next.name = t.errors.name;
    if (digits.length < 10 || digits.length > 13) next.mobile = t.errors.mobile;
    if (!selectedBrand.trim()) next.brand = t.errors.brand;
    if (!model.trim()) next.model = t.errors.model;
    if (serviceMode === 'home' && !address.trim()) next.address = t.errors.address;
    if (!date) {
      next.date = t.errors.date;
    } else if (isSundayDate(date)) {
      next.date = t.errors.sundayClosed;
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const serviceObj = REPAIR_SERVICES.find((s) => s.id === selectedService);
    const problemLabel = serviceObj ? serviceObj[lang].title : selectedService;
    const modeLabel = serviceMode === 'home' ? t.fields.homeService : t.fields.shopVisit;
    const cleanAddress = address.trim() || (lang === 'hi' ? 'शॉप विज़िट' : 'Shop Visit');
    const cleanMessage = message.trim() || (lang === 'hi' ? 'कोई नहीं' : 'None');

    const lines =
      lang === 'hi'
        ? [
            '*नई मोबाइल रिपेयर बुकिंग — AKHLESH MOBILE REPAIRING*',
            `ग्राहक का नाम: ${name.trim()}`,
            `मोबाइल नंबर: ${mobile.trim()}`,
            `मोबाइल ब्रांड: ${selectedBrand}`,
            `मोबाइल मॉडल: ${model.trim()}`,
            `समस्या: ${problemLabel}`,
            `सर्विस प्रकार: ${modeLabel}`,
            `पता: ${cleanAddress}`,
            `तारीख व समय: ${date} | ${timeSlot}`,
            `अतिरिक्त संदेश: ${cleanMessage}`,
          ]
        : [
            '*New Mobile Repair Booking — AKHLESH MOBILE REPAIRING*',
            `Customer Name: ${name.trim()}`,
            `Mobile Number: ${mobile.trim()}`,
            `Mobile Brand: ${selectedBrand}`,
            `Mobile Model: ${model.trim()}`,
            `Repair Problem: ${problemLabel}`,
            `Service Type: ${modeLabel}`,
            `Address: ${cleanAddress}`,
            `Preferred Date & Time: ${date} | ${timeSlot}`,
            `Additional Message: ${cleanMessage}`,
          ];

    const formattedText = lines.join('\n');
    const whatsappUrl = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(
      formattedText
    )}`;

    setConfirmedPayload({ formattedText, whatsappUrl });
    setCopied(false);

    // Trigger anchor navigation cleanly after DOM updates
    requestAnimationFrame(() => {
      if (hiddenLaunchLinkRef.current) {
        hiddenLaunchLinkRef.current.href = whatsappUrl;
        hiddenLaunchLinkRef.current.click();
      }
    });
  };

  const handleCopy = async () => {
    if (!confirmedPayload) return;
    try {
      await navigator.clipboard.writeText(confirmedPayload.formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked in restricted contexts; confirmation box remains selectable
    }
  };

  return (
    <section
      id="booking"
      className="border-b border-sky-400/10 bg-[#06080F] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        {/* Hidden anchor for synchronous WhatsApp launch without window.open */}
        <a
          ref={hiddenLaunchLinkRef}
          href={BUSINESS_INFO.whatsappBase}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        >
          WhatsApp Launch
        </a>

        {confirmedPayload ? (
          <div className="glass-surface mt-10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-sky-400" />
              <div>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {t.confirmation.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t.confirmation.subtitle}
                </p>
              </div>
            </div>

            <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-xl border border-sky-400/20 bg-[#070B14] p-4 font-sans text-sm leading-relaxed text-slate-200">
              {confirmedPayload.formattedText}
            </pre>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={confirmedPayload.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-sky-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.confirmation.openWhatsapp}</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-sky-400/30 bg-[#0B1324] px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-400/60"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-sky-400" />
                ) : (
                  <Copy className="h-4 w-4 text-sky-400" />
                )}
                <span>{copied ? t.confirmation.copied : t.confirmation.copyMessage}</span>
              </button>

              <button
                type="button"
                onClick={() => setConfirmedPayload(null)}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap shrink-0 rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                {t.confirmation.editBooking}
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-surface mt-10 rounded-2xl p-6 sm:p-8"
          >
            {/* Service Mode Segmented Control */}
            <div className="mb-6">
              <span className="block text-sm font-semibold text-slate-200">
                {t.fields.serviceType}
              </span>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => onChangeServiceMode('home')}
                  aria-pressed={serviceMode === 'home'}
                  className={`flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-150 ${
                    serviceMode === 'home'
                      ? 'border-sky-400 bg-sky-500/15 text-white'
                      : 'border-slate-700/80 bg-[#080D1A] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <Home className="h-4 w-4 text-sky-400" />
                  <span>{t.fields.homeService}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onChangeServiceMode('shop')}
                  aria-pressed={serviceMode === 'shop'}
                  className={`flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-150 ${
                    serviceMode === 'shop'
                      ? 'border-sky-400 bg-sky-500/15 text-white'
                      : 'border-slate-700/80 bg-[#080D1A] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <Store className="h-4 w-4 text-sky-400" />
                  <span>{t.fields.shopVisit}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Customer Name */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.name} <span className="text-sky-400">*</span>
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder={t.fields.namePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="booking-mobile"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.mobile} <span className="text-sky-400">*</span>
                </label>
                <input
                  id="booking-mobile"
                  type="tel"
                  inputMode="numeric"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                  }}
                  placeholder={t.fields.mobilePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white tabular-nums placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                {errors.mobile && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.mobile}</p>
                )}
              </div>

              {/* Mobile Brand */}
              <div>
                <label
                  htmlFor="booking-brand"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.brand} <span className="text-sky-400">*</span>
                </label>
                <select
                  id="booking-brand"
                  value={selectedBrand}
                  onChange={(e) => onChangeSelectedBrand(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  {MOBILE_BRANDS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.brand && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.brand}</p>
                )}
              </div>

              {/* Mobile Model */}
              <div>
                <label
                  htmlFor="booking-model"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.model} <span className="text-sky-400">*</span>
                </label>
                <input
                  id="booking-model"
                  type="text"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    if (errors.model) setErrors({ ...errors, model: undefined });
                  }}
                  placeholder={t.fields.modelPlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                {errors.model && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.model}</p>
                )}
              </div>

              {/* Repair Problem */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="booking-problem"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.problem} <span className="text-sky-400">*</span>
                </label>
                <select
                  id="booking-problem"
                  value={selectedService}
                  onChange={(e) =>
                    onChangeSelectedService(e.target.value as ServiceId)
                  }
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  {REPAIR_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.code}. {srv[lang].title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="booking-address"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.address}{' '}
                  {serviceMode === 'home' && <span className="text-sky-400">*</span>}
                </label>
                <input
                  id="booking-address"
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: undefined });
                  }}
                  placeholder={
                    serviceMode === 'home'
                      ? t.fields.addressPlaceholderHome
                      : t.fields.addressPlaceholderShop
                  }
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                {errors.address && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.address}</p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="booking-date"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-200"
                >
                  <Calendar className="h-3.5 w-3.5 text-sky-400" />
                  <span>{t.fields.date}</span>
                  <span className="text-sky-400">*</span>
                </label>
                <input
                  id="booking-date"
                  type="date"
                  min={getNextWorkingDayIso()}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (errors.date) setErrors({ ...errors, date: undefined });
                  }}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white tabular-nums focus:border-sky-400 focus:outline-none"
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.date}</p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="booking-time"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-200"
                >
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  <span>{t.fields.time}</span>
                </label>
                <select
                  id="booking-time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  {t.timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="booking-message"
                  className="block text-sm font-medium text-slate-200"
                >
                  {t.fields.message}
                </label>
                <textarea
                  id="booking-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.fields.messagePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-150 hover:bg-sky-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.submitButton}</span>
              </button>

              <p className="text-xs leading-relaxed text-slate-400 sm:max-w-xs sm:text-right">
                {t.noteNoPayment}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
