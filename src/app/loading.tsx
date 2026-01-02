'use client';

// Components
import WifiLoader from '@/components/WifiLoader';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/10 backdrop-blur-sm">
      <WifiLoader text="faraideh..." />
    </div>
  );
}
