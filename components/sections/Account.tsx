'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { WEDDING_INFO } from '@/lib/constants';

export default function Account() {
  const [expandedGroom, setExpandedGroom] = useState(false);
  const [expandedBride, setExpandedBride] = useState(false);

  const copyAccount = (text: string, holder: string) => {
    navigator.clipboard.writeText(text);
    alert(`${holder}님의 계좌번호가 복사되었습니다!`);
  };

  return (
    <section className="bg-gradient-to-b from-primary to-white py-20 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl px-6"
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="heading-lg mb-4 text-center"
        >
          마음 전하실 곳
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="body-text mb-16 text-center text-text-secondary"
        >
          축하의 마음을 전하고 싶으신 분들을 위해 안내드립니다
        </motion.p>

        {/* Account Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Groom Side */}
          <motion.div variants={staggerItem}>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-center text-xl font-semibold">
                신랑측 계좌번호
              </h3>

              {/* Groom Account */}
              <div className="mb-6 space-y-3 border-b border-secondary pb-6">
                <p className="text-center text-lg font-medium">
                  {WEDDING_INFO.groom.name}
                </p>
                <p className="text-center text-sm text-text-secondary">
                  {WEDDING_INFO.accounts.groom.bank}
                </p>
                <p className="text-center text-text-secondary">
                  {WEDDING_INFO.accounts.groom.account}
                </p>
                <button
                  onClick={() =>
                    copyAccount(
                      WEDDING_INFO.accounts.groom.account,
                      WEDDING_INFO.groom.name
                    )
                  }
                  className="mx-auto block rounded-full bg-accent px-6 py-2 text-sm text-white transition-transform hover:scale-105"
                >
                  복사하기
                </button>
              </div>

              {/* Toggle Parents */}
              <button
                onClick={() => setExpandedGroom(!expandedGroom)}
                className="w-full text-center text-sm text-text-secondary underline"
              >
                {expandedGroom ? '접기' : '혼주 계좌 보기'}
              </button>

              {/* Groom's Father Account */}
              {expandedGroom && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 space-y-3"
                >
                  <p className="text-center text-sm text-text-secondary">
                    신랑 아버지
                  </p>
                  <p className="text-center font-medium">
                    {WEDDING_INFO.accounts.groomFather.holder}
                  </p>
                  <p className="text-center text-sm text-text-secondary">
                    {WEDDING_INFO.accounts.groomFather.bank}
                  </p>
                  <p className="text-center text-sm text-text-secondary">
                    {WEDDING_INFO.accounts.groomFather.account}
                  </p>
                  <button
                    onClick={() =>
                      copyAccount(
                        WEDDING_INFO.accounts.groomFather.account,
                        WEDDING_INFO.accounts.groomFather.holder
                      )
                    }
                    className="mx-auto block rounded-full bg-accent px-6 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Bride Side */}
          <motion.div variants={staggerItem}>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-center text-xl font-semibold">
                신부측 계좌번호
              </h3>

              {/* Bride Account */}
              <div className="mb-6 space-y-3 border-b border-secondary pb-6">
                <p className="text-center text-lg font-medium">
                  {WEDDING_INFO.bride.name}
                </p>
                <p className="text-center text-sm text-text-secondary">
                  {WEDDING_INFO.accounts.bride.bank}
                </p>
                <p className="text-center text-text-secondary">
                  {WEDDING_INFO.accounts.bride.account}
                </p>
                <button
                  onClick={() =>
                    copyAccount(
                      WEDDING_INFO.accounts.bride.account,
                      WEDDING_INFO.bride.name
                    )
                  }
                  className="mx-auto block rounded-full bg-accent px-6 py-2 text-sm text-white transition-transform hover:scale-105"
                >
                  복사하기
                </button>
              </div>

              {/* Toggle Parents */}
              <button
                onClick={() => setExpandedBride(!expandedBride)}
                className="w-full text-center text-sm text-text-secondary underline"
              >
                {expandedBride ? '접기' : '혼주 계좌 보기'}
              </button>

              {/* Bride's Father Account */}
              {expandedBride && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 space-y-3"
                >
                  <p className="text-center text-sm text-text-secondary">
                    신부 아버지
                  </p>
                  <p className="text-center font-medium">
                    {WEDDING_INFO.accounts.brideFather.holder}
                  </p>
                  <p className="text-center text-sm text-text-secondary">
                    {WEDDING_INFO.accounts.brideFather.bank}
                  </p>
                  <p className="text-center text-sm text-text-secondary">
                    {WEDDING_INFO.accounts.brideFather.account}
                  </p>
                  <button
                    onClick={() =>
                      copyAccount(
                        WEDDING_INFO.accounts.brideFather.account,
                        WEDDING_INFO.accounts.brideFather.holder
                      )
                    }
                    className="mx-auto block rounded-full bg-accent px-6 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
