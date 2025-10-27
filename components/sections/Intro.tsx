'use client';

import { motion } from 'framer-motion';
import { GREETING, WEDDING_INFO } from '@/lib/constants';

export default function Intro() {
  const { groom, bride } = WEDDING_INFO;

  return (
    <section className="bg-secondary py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl text-center"
      >
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-6 text-base leading-loose text-text-secondary md:text-lg">
            "사랑은 모든 것을 덮어 주고
            <br />
            모든 것을 믿으며
            <br />
            모든 것을 바라고
            <br />
            모든 것을 견딥니다."
          </p>
          <p className="text-sm text-text-secondary">- 코린토1서 13:7 -</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-16 h-px w-16 bg-accent"
        />

        {/* Icon & Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-4 text-4xl">💌</div>
          <h2 className="font-serif text-2xl font-semibold text-text-primary">
            초대합니다
          </h2>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="whitespace-pre-line text-base leading-relaxed text-text-secondary">
            {GREETING.message}
          </p>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-divider pt-8"
        >
          <p className="whitespace-pre-line text-center text-sm leading-loose text-text-primary">
            {GREETING.parents}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
