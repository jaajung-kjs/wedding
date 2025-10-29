'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Hero() {
  const { groom, bride } = WEDDING_INFO;

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero/couple-optimized.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 px-6 text-center"
      >
        <h1
          className="text-white"
          style={{
            fontFamily: "'Dancing Script', 'Great Vibes', cursive",
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          We are getting
          <br />
          Married!
        </h1>

        {/* Names */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-white"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          {groom.name} & {bride.name}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sm tracking-widest text-white"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
}
