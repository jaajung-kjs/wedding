'use client';

import { motion } from 'framer-motion';
import { GREETING, WEDDING_INFO, PROFILE } from '@/lib/constants';

export default function Intro() {
  const { groom, bride } = WEDDING_INFO;

  const calculateTimeTogether = () => {
    const startDate = new Date('2015-05-26');
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}년 ${months}개월 ${days}일`;
  };

  return (
    <section className="bg-secondary py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl text-center"
      >
        {/* Icon & Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
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
          transition={{ delay: 0.4, duration: 0.8 }}
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
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-divider pt-8 pb-12"
        >
          <p className="whitespace-pre-line text-center text-sm leading-loose text-text-primary">
            {GREETING.parents}
          </p>
        </motion.div>

        {/* Profile Cards */}
        <div className="mb-8 grid grid-cols-2 gap-6">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 h-32 w-32 overflow-hidden rounded-2xl bg-gray-200">
              <img
                src="/images/profiles/groom.webp"
                alt={`${PROFILE.groom.title} ${PROFILE.groom.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold text-text-primary">{PROFILE.groom.title}</h3>
              <span className="text-base font-semibold text-accent">{PROFILE.groom.name}</span>
              <a
                href={PROFILE.groom.kakaoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400"
              >
                <svg
                  className="h-3 w-3 text-brown-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
                </svg>
              </a>
            </div>
            <div className="space-y-1 text-center text-sm text-text-secondary">
              <p>{PROFILE.groom.birth}</p>
              <p>{PROFILE.groom.location}</p>
              <p>{PROFILE.groom.job}</p>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 h-32 w-32 overflow-hidden rounded-2xl bg-gray-200">
              <img
                src="/images/profiles/bride.webp"
                alt={`${PROFILE.bride.title} ${PROFILE.bride.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold text-text-primary">{PROFILE.bride.title}</h3>
              <span className="text-base font-semibold text-accent">{PROFILE.bride.name}</span>
              {PROFILE.bride.kakaoLink && (
                <a
                  href={PROFILE.bride.kakaoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400"
                >
                  <svg
                    className="h-3 w-3 text-brown-800"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
                  </svg>
                </a>
              )}
            </div>
            <div className="space-y-1 text-center text-sm text-text-secondary">
              <p>{PROFILE.bride.birth}</p>
              <p>{PROFILE.bride.location}</p>
              <p>{PROFILE.bride.job}</p>
            </div>
          </motion.div>
        </div>

        {/* Time Together */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-text-secondary">
            함께한 시간 <span className="font-semibold text-text-primary">{calculateTimeTogether()}</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
