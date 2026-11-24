import { useEffect, useState, type FormEvent } from 'react';
import { ChevronDown, MessageCircle, Star, Wrench } from 'lucide-react';
import { BUSINESS_INFO, Language, TRANSLATIONS } from '../data/content';

interface ReviewsAndFaqProps {
  lang: Language;
}

interface LocalReview {
  id: string;
  name: string;
  device: string;
  rating: number;
  comment: string;
}

const STORAGE_KEY = 'akhlesh_mobile_submitted_reviews_v1';

const REPAIR_GALLERY = [
  {
    src: '/src/assets/images/repair_gallery_display_1795535668326.jpg',
    enTitle: 'Display Replacement Showcase',
    enDesc: 'Clean OLED and LCD screen installation with tight frame alignment and touch calibration.',
    hiTitle: 'डिस्प्ले रिप्लेसमेंट शोकेस',
    hiDesc: 'सटीक फ्रेम फिटिंग और टच कैलिब्रेशन के साथ साफ-सुथरा OLED और LCD स्क्रीन रिप्लेसमेंट।',
  },
  {
    src: '/src/assets/images/repair_gallery_battery_1795535667917.jpg',
    enTitle: 'Battery Replacement · 6 Months Warranty',
    enDesc: 'Safe new battery installation with clean adhesive sealing and 6 months warranty coverage.',
    hiTitle: 'बैटरी रिप्लेसमेंट · 6 महीने वारंटी',
    hiDesc: 'सुरक्षित नई बैटरी फिटिंग और 6 महीने की वारंटी के साथ भरोसेमंद बैकअप।',
  },
  {
    src: '/src/assets/images/repair_gallery_charging_1795535668244.jpg',
    enTitle: 'Charging Port & Voltage Testing',
    enDesc: 'Digital voltage and current testing after USB-C or Lightning charging jack repairs.',
    hiTitle: 'चार्जिंग पोर्ट और वोल्टेज टेस्टिंग',
    hiDesc: 'USB-C या लाइटनिंग चार्जिंग जैक रिपेयर के बाद डिजिटल मीटर से सटीक जांच।',
  },
];

export function ReviewsAndFaq({ lang }: ReviewsAndFaqProps) {
  const reviewsT = TRANSLATIONS[lang].reviews;
  const faqT = TRANSLATIONS[lang].faq;
  const isHi = lang === 'hi';

  const [submittedReviews, setSubmittedReviews] = useState<LocalReview[]>([]);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});
  const [revName, setRevName] = useState('');
  const [revDevice, setRevDevice] = useState('');
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState('');
  const [revNotice, setRevNotice] = useState('');

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSubmittedReviews(parsed);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!revName.trim() || !revComment.trim()) return;

    const entry: LocalReview = {
      id: String(Date.now()),
      name: revName.trim(),
      device: revDevice.trim() || 'Mobile Repair',
      rating: revRating,
      comment: revComment.trim(),
    };

    const next = [entry, ...submittedReviews].slice(0, 5);
    setSubmittedReviews(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors
    }

    const reviewText =
      lang === 'hi'
        ? `*ग्राहक समीक्षा — AKHLESH MOBILE REPAIRING*\nनाम: ${entry.name}\nमोबाइल/सेवा: ${entry.device}\nरेटिंग: ${entry.rating}/5\nसमीक्षा: ${entry.comment}`
        : `*Customer Review — AKHLESH MOBILE REPAIRING*\nName: ${entry.name}\nDevice/Service: ${entry.device}\nRating: ${entry.rating}/5\nReview: ${entry.comment}`;

    const waLink = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(reviewText)}`;
    const anchor = document.createElement('a');
    anchor.href = waLink;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.click();

    setRevName('');
    setRevDevice('');
    setRevComment('');
    setRevRating(5);
    setRevNotice(reviewsT.thankYou);
  };

  return (
    <>
      {/* Repair Work Showcase Photos & Genuine Customer Reviews Section */}
      <section
        id="reviews"
        className="border-b border-sky-400/10 bg-[#070A13] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {isHi ? 'रिपेयर वर्क गैलरी और ग्राहक समीक्षा' : 'Repair Gallery & Customer Reviews'}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              {reviewsT.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {reviewsT.subtitle}
            </p>
          </div>

          {/* 3 Authentic Repair Work Photos */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {REPAIR_GALLERY.map((item, idx) => (
              <div
                key={item.src}
                className="glass-surface overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#0A101E]">
                  {!imgFailed[idx] ? (
                    <img
                      src={item.src}
                      alt={isHi ? item.hiTitle : item.enTitle}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgFailed((prev) => ({ ...prev, [idx]: true }))
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900">
                      <Wrench className="h-8 w-8 text-sky-400" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-white">
                    {isHi ? item.hiTitle : item.enTitle}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {isHi ? item.hiDesc : item.enDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Genuine Review Status / User's Own Submitted Reviews */}
            <div className="glass-surface flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {submittedReviews.length > 0
                    ? reviewsT.savedTitle
                    : reviewsT.emptyTitle}
                </h3>

                {submittedReviews.length === 0 ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {reviewsT.emptyBody}
                  </p>
                ) : (
                  <div className="mt-4 space-y-4">
                    {submittedReviews.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-slate-800 bg-[#070B15] p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-0.5 text-sky-400">
                            {Array.from({ length: item.rating }).map((_, idx) => (
                              <Star
                                key={idx}
                                className="h-3.5 w-3.5 fill-sky-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {item.device}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {item.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-6 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                AKHLESH MOBILE REPAIRING · {BUSINESS_INFO.phoneDisplay}
              </p>
            </div>

            {/* Interactive Real Feedback Submission Form */}
            <form
              onSubmit={handleReviewSubmit}
              className="glass-surface rounded-2xl p-6 sm:p-8 lg:col-span-7"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    {reviewsT.formName} <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    required
                    value={revName}
                    onChange={(e) => setRevName(e.target.value)}
                    placeholder={reviewsT.formNamePlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review-device"
                    className="block text-sm font-medium text-slate-200"
                  >
                    {reviewsT.formDevice}
                  </label>
                  <input
                    id="review-device"
                    type="text"
                    value={revDevice}
                    onChange={(e) => setRevDevice(e.target.value)}
                    placeholder={reviewsT.formDevicePlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <span className="block text-sm font-medium text-slate-200">
                  {reviewsT.formRating}
                </span>
                <div className="mt-2 flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRevRating(num)}
                      aria-label={`${num} star rating`}
                      aria-pressed={revRating === num}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                        num <= revRating
                          ? 'border-sky-400/50 bg-sky-500/15 text-sky-400'
                          : 'border-slate-700 bg-[#070B15] text-slate-500'
                      }`}
                    >
                      <Star
                        className={`h-4 w-4 ${
                          num <= revRating ? 'fill-sky-400' : ''
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="review-comment"
                  className="block text-sm font-medium text-slate-200"
                >
                  {reviewsT.formComment} <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="review-comment"
                  rows={3}
                  required
                  value={revComment}
                  onChange={(e) => setRevComment(e.target.value)}
                  placeholder={reviewsT.formCommentPlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B15] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              {revNotice && (
                <p className="mt-3 text-xs font-medium text-sky-400">
                  {revNotice}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-sky-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{reviewsT.formSubmit}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="border-b border-sky-400/10 bg-[#06080F] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {faqT.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              {faqT.title}
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-800/90 rounded-2xl border border-sky-400/15 bg-[#090F1D]">
            {faqT.items.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sky-500/5"
                  >
                    <span className="font-display text-base font-semibold text-white sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-sky-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-slate-300">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
