'use client';

type WifiLoaderProps = {
  size?: string;
  text?: string;
  background?: string; // --background
  frontColor?: string; // --front-color
  backColor?: string; // --back-color
  textColor?: string; // --text-color
  className?: string;
};

export default function WifiLoader({
  size = '64px',
  text,
  background = '#62abff',
  frontColor = '#0a2fb6',
  backColor = '#c3c8de',
  textColor = '#414856',
  className,
}: WifiLoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={['relative grid place-items-center rounded-full', className ?? ''].join(' ')}
      style={
        {
          width: size,
          height: size,
          ['--background' as string]: background,
          ['--front-color' as string]: frontColor,
          ['--back-color' as string]: backColor,
          ['--text-color' as string]: textColor,
        } as React.CSSProperties
      }
    >
      <svg viewBox="0 0 86 86" className="absolute h-[86px] w-[86px]" aria-hidden>
        <circle
          cx={43}
          cy={43}
          r={40}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--back-color)] [animation:circle-outer135_1.8s_ease_infinite_.3s]"
          strokeDasharray="62.75 188.25"
        />
        <circle
          cx={43}
          cy={43}
          r={40}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--front-color)] [animation:circle-outer135_1.8s_ease_infinite_.15s]"
          strokeDasharray="62.75 188.25"
        />
        <circle
          cx={43}
          cy={43}
          r={40}
          fill="none"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] opacity-0"
          strokeDasharray="62.75 188.25"
        />
      </svg>

      <svg viewBox="0 0 60 60" className="absolute h-[60px] w-[60px]" aria-hidden>
        <circle
          cx={30}
          cy={30}
          r={27}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--back-color)] [animation:circle-middle6123_1.8s_ease_infinite_.25s]"
          strokeDasharray="42.5 127.5"
        />
        <circle
          cx={30}
          cy={30}
          r={27}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--front-color)] [animation:circle-middle6123_1.8s_ease_infinite_.1s]"
          strokeDasharray="42.5 127.5"
        />
      </svg>

      <svg viewBox="0 0 34 34" className="absolute h-[34px] w-[34px]" aria-hidden>
        <circle
          cx={17}
          cy={17}
          r={14}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--back-color)] [animation:circle-inner162_1.8s_ease_infinite_.2s]"
          strokeDasharray="22 66"
        />
        <circle
          cx={17}
          cy={17}
          r={14}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          className="-rotate-[100deg] [transform-origin:center] [stroke:var(--front-color)] [animation:circle-inner162_1.8s_ease_infinite_.05s]"
          strokeDasharray="22 66"
        />
      </svg>

      {text ? <span aria-hidden className="wifi-text" data-text={text} /> : null}
    </div>
  );
}
