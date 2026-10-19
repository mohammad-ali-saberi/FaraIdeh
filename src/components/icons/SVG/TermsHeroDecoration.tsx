interface ITermsHeroDecorationProps {
  className?: string;
}

const TermsHeroDecoration = ({ className }: ITermsHeroDecorationProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="termsHeroBg"
          x1="80"
          y1="30"
          x2="350"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-primary)" stopOpacity="0.04" />
          <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Soft stage */}
      <circle cx="210" cy="180" r="160" fill="url(#termsHeroBg)" />
      <circle
        cx="210"
        cy="180"
        r="150"
        stroke="var(--color-primary)"
        strokeOpacity="0.14"
        strokeWidth="2"
        strokeDasharray="3 10"
        strokeLinecap="round"
      />

      {/* Flight path to the seal */}
      <path
        d="M300 108C326 90 354 92 372 114"
        stroke="var(--color-orange)"
        strokeWidth="3"
        strokeDasharray="2 9"
        strokeLinecap="round"
      />

      {/* Seal of approval */}
      <path
        d="M340 146L388 164V198C388 231 367 256 340 266C313 256 292 231 292 198V164L340 146Z"
        fill="var(--color-primary)"
        fillOpacity="0.1"
        stroke="var(--color-primary)"
        strokeOpacity="0.22"
        strokeWidth="2"
      />
      <path
        d="M322 203L334 215L358 190"
        stroke="var(--color-orange)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Terms document */}
      <rect
        x="96"
        y="56"
        width="190"
        height="244"
        rx="22"
        fill="white"
        stroke="var(--color-primary)"
        strokeOpacity="0.16"
        strokeWidth="2"
      />

      {/* Folded corner */}
      <path
        d="M250 56H262A24 24 0 0 1 286 80V92H250V56Z"
        fill="var(--color-primary)"
        fillOpacity="0.08"
      />
      <path
        d="M250 56V92H286"
        stroke="var(--color-primary)"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Bookmark */}
      <path d="M224 56H246V92L235 85L224 92V56Z" fill="var(--color-orange)" />

      {/* Document heading */}
      <rect x="122" y="88" width="100" height="13" rx="6.5" fill="var(--color-primary)" />
      <rect
        x="122"
        y="112"
        width="140"
        height="8"
        rx="4"
        fill="var(--color-primary)"
        fillOpacity="0.2"
      />

      {/* Checklist */}
      <circle cx="131" cy="154" r="9" fill="var(--color-primary)" />
      <path
        d="M127 154L130 157L135 151"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="152"
        y="149.5"
        width="104"
        height="9"
        rx="4.5"
        fill="var(--color-text-services-about)"
        fillOpacity="0.14"
      />

      <circle cx="131" cy="188" r="9" fill="var(--color-orange)" />
      <path
        d="M127 188L130 191L135 185"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="152"
        y="183.5"
        width="84"
        height="9"
        rx="4.5"
        fill="var(--color-text-services-about)"
        fillOpacity="0.14"
      />

      <circle cx="131" cy="222" r="9" fill="var(--color-primary)" />
      <path
        d="M127 222L130 225L135 219"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="152"
        y="217.5"
        width="96"
        height="9"
        rx="4.5"
        fill="var(--color-text-services-about)"
        fillOpacity="0.14"
      />

      <circle cx="131" cy="256" r="9" fill="var(--color-orange)" />
      <path
        d="M127 256L130 259L135 253"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="152"
        y="251.5"
        width="72"
        height="9"
        rx="4.5"
        fill="var(--color-text-services-about)"
        fillOpacity="0.14"
      />

      {/* Signature */}
      <rect
        x="122"
        y="280"
        width="72"
        height="6"
        rx="3"
        fill="var(--color-primary)"
        fillOpacity="0.16"
      />
      <circle cx="266" cy="283" r="4" fill="var(--color-orange)" />

      {/* Accents */}
      <circle cx="44" cy="286" r="6" fill="var(--color-orange)" fillOpacity="0.85" />
      <circle cx="382" cy="82" r="9" fill="var(--color-primary)" fillOpacity="0.15" />
      <circle cx="60" cy="94" r="4" fill="var(--color-orange)" fillOpacity="0.55" />
      <path
        d="M376 292V308M368 300H384"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TermsHeroDecoration;
