'use client';

import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Calendar from '@/components/sections/Calendar';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import Account from '@/components/sections/Account';
import Footer from '@/components/sections/Footer';
import MusicPlayer from '@/components/ui/MusicPlayer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Intro />
        <Calendar />
        <Gallery />
        <Location />
        <Account />
        <Footer />
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </>
  );
}
