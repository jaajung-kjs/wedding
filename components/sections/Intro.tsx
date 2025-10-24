'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { GREETING } from '@/lib/constants';

export default function Intro() {
  return (
    <section className="bg-gradient-to-b from-primary to-white py-20 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        {/* Title */}
        <motion.h2 variants={staggerItem} className="heading-lg mb-8">
          {GREETING.title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={staggerItem}
          className="mx-auto mb-12 h-px w-16 bg-accent"
        />

        {/* Message */}
        <motion.p
          variants={staggerItem}
          className="body-text mb-16 whitespace-pre-line leading-relaxed text-text-secondary"
        >
          {GREETING.message}
        </motion.p>

        {/* Parents Info */}
        <motion.div
          variants={staggerItem}
          className="space-y-3 text-text-secondary"
        >
          {GREETING.parents.split('\n').map((line, index) => (
            <p key={index} className="text-sm md:text-base">
              {line}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
