'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { WEDDING_INFO } from '@/lib/constants';

export default function Account() {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  const { accounts, groom, bride } = WEDDING_INFO;

  const copyAccount = (account: string) => {
    navigator.clipboard.writeText(account);
    alert('계좌번호가 복사되었습니다');
  };

  return (
    <section className="bg-secondary py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 text-center font-serif text-2xl font-semibold tracking-wider text-text-primary"
        >
          마음 전하실 곳
        </motion.h2>

        {/* Groom Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4"
        >
          <button
            onClick={() => setGroomOpen(!groomOpen)}
            className="w-full rounded-2xl bg-white p-6 text-left shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👔</span>
                <span className="font-semibold text-text-primary">
                  신랑 측 계좌 정보
                </span>
              </div>
              <svg
                className={`h-6 w-6 text-text-secondary transition-transform ${groomOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {groomOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4 overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Groom Account */}
              <div className="border-b border-divider pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">신랑 {groom.name}</p>
                    <p className="font-semibold text-text-primary">
                      {accounts.groom.bank}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.groom.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.groom.account)}
                    className="rounded-full bg-accent px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </div>
              </div>

              {/* Groom Father Account */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">
                      신랑 부 {accounts.groomFather.holder}
                    </p>
                    <p className="font-semibold text-text-primary">
                      {accounts.groomFather.bank}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.groomFather.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.groomFather.account)}
                    className="rounded-full bg-accent px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bride Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={() => setBrideOpen(!brideOpen)}
            className="w-full rounded-2xl bg-white p-6 text-left shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👰</span>
                <span className="font-semibold text-text-primary">
                  신부 측 계좌 정보
                </span>
              </div>
              <svg
                className={`h-6 w-6 text-text-secondary transition-transform ${brideOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {brideOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4 overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Bride Account */}
              <div className="border-b border-divider pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">신부 {bride.name}</p>
                    <p className="font-semibold text-text-primary">
                      {accounts.bride.bank}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.bride.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.bride.account)}
                    className="rounded-full bg-accent px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </div>
              </div>

              {/* Bride Father Account */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">
                      신부 모 {accounts.brideFather.holder}
                    </p>
                    <p className="font-semibold text-text-primary">
                      {accounts.brideFather.bank}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.brideFather.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.brideFather.account)}
                    className="rounded-full bg-accent px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                  >
                    복사하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
