'use client';

import { useEffect } from 'react';
import { trackPageView } from '@/app/actions/trackPageView';

export default function PageViewTracker() {
  useEffect(() => {
    trackPageView();
  }, []);

  return null;
}
