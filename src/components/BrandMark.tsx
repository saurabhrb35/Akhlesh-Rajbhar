interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width={compact ? 26 : 32}
        height={compact ? 26 : 32}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="8"
          fill="#0B1324"
          stroke="#38BDF8"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <rect
          x="11"
          y="6.5"
          width="14"
          height="23"
          rx="2.5"
          stroke="#F8FAFC"
          strokeWidth="1.6"
        />
        <path
          d="M15.5 9.5H20.5"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 18.5L17.2 21.2L22 15.2"
          stroke="#38BDF8"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display font-bold tracking-tight text-slate-50 ${
          compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
        }`}
      >
        AKHLESH MOBILE REPAIRING
      </span>
    </span>
  );
}
