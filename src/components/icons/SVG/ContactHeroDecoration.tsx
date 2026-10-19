interface IContactHeroDecorationProps {
  className?: string;
}

const ContactHeroDecoration = ({ className }: IContactHeroDecorationProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 360 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="contactHeroBg" x1="60" y1="30" x2="310" y2="330">
          <stop offset="0" stopColor="#F7FAFF" />
          <stop offset="1" stopColor="#E8F0FF" />
        </linearGradient>
      </defs>

      {/* Soft stage */}
      <circle cx="180" cy="172" r="156" fill="url(#contactHeroBg)" />
      <circle
        cx="180"
        cy="172"
        r="148"
        stroke="#DCE6F8"
        strokeWidth="2"
        strokeDasharray="3 10"
        strokeLinecap="round"
      />

      {/* Flight path from the conversation to the plane */}
      <path
        d="M196 104C222 82 250 82 274 98"
        stroke="#FF6300"
        strokeWidth="3"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />

      {/* Paper plane, drawn first so the envelope hides the tail */}
      <path d="M326 50L170 170L248 156Z" fill="#0A2FB6" />
      <path d="M326 50L248 156L216 224Z" fill="#5273E6" />
      <path
        d="M326 50L248 156"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Envelope */}
      <rect
        x="78"
        y="190"
        width="204"
        height="128"
        rx="20"
        fill="#FFFFFF"
        stroke="#DCE6F8"
        strokeWidth="2"
      />
      <path
        d="M88 202L180 272L272 202"
        stroke="#B8C6FF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88 308L180 272M272 308L180 272"
        stroke="#E2EAF8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Chat bubble */}
      <path
        d="M70 72H162A28 28 0 0 1 190 100V136A28 28 0 0 1 162 164H112L70 196L78 164H70A28 28 0 0 1 42 136V100A28 28 0 0 1 70 72Z"
        fill="#FFFFFF"
        stroke="#DCE6F8"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="78" cy="118" r="7" fill="#0A2FB6" />
      <circle cx="104" cy="118" r="7" fill="#0A2FB6" opacity="0.55" />
      <circle cx="130" cy="118" r="7" fill="#FF6300" />

      {/* Direct-call badge */}
      <circle cx="270" cy="300" r="26" fill="#FF6300" stroke="#FFFFFF" strokeWidth="4" />
      <g transform="translate(258 288)">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Accents */}
      <circle cx="36" cy="250" r="6" fill="#FF6300" opacity="0.85" />
      <circle cx="334" cy="226" r="10" fill="#B8C6FF" opacity="0.55" />
      <circle cx="344" cy="120" r="4" fill="#FF6300" opacity="0.55" />
      <path d="M320 172V188M312 180H328" stroke="#B8C6FF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default ContactHeroDecoration;
