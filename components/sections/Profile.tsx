'use client';

import { motion } from 'framer-motion';
import { PROFILE, WEDDING_INFO } from '@/lib/constants';

export default function Profile() {
  const { groom, bride } = WEDDING_INFO;

  const ProfileCard = ({ person, delay }: { person: typeof PROFILE.groom; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col items-center"
    >
      {/* Photo Placeholder */}
      <div className="mb-3 h-32 w-32 overflow-hidden rounded-2xl bg-gray-200">
        <div className="flex h-full items-center justify-center text-sm text-text-secondary">
          Photo
        </div>
      </div>

      {/* Name & Phone */}
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-text-primary">{person.title}</h3>
        <span className="text-base font-semibold text-accent">{person.name}</span>
        <a href={`tel:${person.phone}`} className="text-accent">
          📞
        </a>
      </div>

      {/* Info */}
      <div className="space-y-1 text-center text-sm text-text-secondary">
        <p>{person.birth}</p>
        <p>{person.location}</p>
        <p>{person.job}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl"
      >
        {/* Profile Cards */}
        <div className="mb-8 grid grid-cols-2 gap-6">
          <ProfileCard person={PROFILE.groom} delay={0.2} />
          <ProfileCard person={PROFILE.bride} delay={0.4} />
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className="whitespace-pre-line text-base font-medium text-text-primary">
            {PROFILE.message}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
