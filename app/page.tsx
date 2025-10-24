'use client';

import HeroVideo from '@/components/sections/HeroVideo';
import Intro from '@/components/sections/Intro';
import Timeline from '@/components/sections/Timeline';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import Account from '@/components/sections/Account';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroVideo />
      <Intro />
      <Timeline />
      <Gallery />
      <Location />
      <Account />

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-text-secondary">
        <p>© 2025 Wedding Invitation</p>
        <p className="mt-2">Made with ♥</p>
      </footer>
    </main>
  );
}
