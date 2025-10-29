'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Hero() {
  const { groom, bride } = WEDDING_INFO;

  return (
    <section
      className="relative flex h-screen items-start justify-center overflow-hidden pt-8"
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
          style={{
            fontFamily: "'Dancing Script', 'Great Vibes', cursive",
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
            color: '#FFB7C5',
          }}
        >
          <div style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', whiteSpace: 'nowrap' }}>
            We are getting
          </div>
          <div style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', whiteSpace: 'nowrap' }}>
            Married!
          </div>
        </h1>

        {/* Names */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-3 text-white"
          style={{
            fontFamily: "'Nanum Pen Script', cursive",
            fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          {groom.name} & {bride.name}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-1 text-white"
          style={{
            fontFamily: "'Nanum Pen Script', cursive",
            fontSize: 'clamp(1.25rem, 4.5vw, 1.75rem)',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            letterSpacing: '0.02em',
          }}
        >
          소중한 분들을 결혼식에 초대합니다
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
