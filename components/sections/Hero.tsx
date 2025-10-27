'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Hero() {
  const { groom, bride, date, venue } = WEDDING_INFO;
  const weddingDate = new Date(date);

  const formatDate = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const year = weddingDate.getFullYear();
    const month = String(weddingDate.getMonth() + 1).padStart(2, '0');
    const day = String(weddingDate.getDate()).padStart(2, '0');
    const dayOfWeek = days[weddingDate.getDay()];

    return `${year}. ${month}. ${day} ${dayOfWeek}`;
  };

  const formatTime = () => {
    const hours = weddingDate.getHours();
    const minutes = String(weddingDate.getMinutes()).padStart(2, '0');
    return `${hours} : ${minutes}`;
  };

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 text-center"
      >
        {/* Names */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8 whitespace-nowrap font-serif font-bold tracking-wide text-text-primary"
          style={{ fontSize: 'clamp(1.75rem, 8vw, 3rem)' }}
        >
          {groom.name} ♥ {bride.name}
        </motion.h1>

        {/* Date & Time */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-8 space-y-2"
        >
          <p className="text-lg tracking-widest text-text-secondary">
            {formatDate()}
          </p>
          <p className="font-serif text-3xl font-light tracking-wider text-text-primary">
            {formatTime()}
          </p>
        </motion.div>

        {/* Venue */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-lg text-text-secondary"
        >
          {venue.name}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sm tracking-widest text-text-secondary"
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
}
