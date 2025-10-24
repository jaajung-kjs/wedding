'use client';

import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp } from '@/lib/animations';
import { WEDDING_INFO } from '@/lib/constants';

export default function HeroVideo() {
  const weddingDate = new Date(WEDDING_INFO.date);
  const formattedDate = `${weddingDate.getFullYear()}. ${String(weddingDate.getMonth() + 1).padStart(2, '0')}. ${String(weddingDate.getDate()).padStart(2, '0')}`;
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][weddingDate.getDay()];
  const time = weddingDate.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <section className="relative h-screen w-full overflow-hidden p-0">
      {/* Background Image (fallback for video or mobile) */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/main.jpg)',
            filter: 'brightness(0.7)',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          className="space-y-6"
        >
          {/* Names */}
          <h1 className="heading-xl">
            {WEDDING_INFO.groom.name} <span className="mx-4">♥</span> {WEDDING_INFO.bride.name}
          </h1>

          {/* Divider */}
          <div className="mx-auto h-px w-24 bg-white/50" />

          {/* Date & Time */}
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-light tracking-wider">
              {formattedDate} {dayOfWeek}
            </p>
            <p className="text-xl md:text-2xl font-light">
              {time.replace(':', ' : ')}
            </p>
          </div>

          {/* Venue */}
          <p className="text-lg md:text-xl font-light mt-4">
            {WEDDING_INFO.venue.name}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="absolute bottom-12"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-light tracking-widest">SCROLL</p>
            <div className="h-12 w-px bg-white/50 animate-bounce-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
