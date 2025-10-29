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
                  신랑측
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
                    <p className="mb-1 text-sm text-text-secondary">신랑 {groom.name}</p>
                    <p className="text-sm text-text-primary">
                      {accounts.groom.bank} {accounts.groom.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.groom.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Groom Father Account */}
              <div className="border-b border-divider pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-text-secondary">
                      신랑 부 {accounts.groomFather.holder}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.groomFather.bank} {accounts.groomFather.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.groomFather.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Groom Mother Account */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-text-secondary">
                      신랑 모 {accounts.groomMother.holder}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.groomMother.bank} {accounts.groomMother.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.groomMother.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
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
                  신부측
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
                    <p className="mb-1 text-sm text-text-secondary">신부 {bride.name}</p>
                    <p className="text-sm text-text-primary">
                      {accounts.bride.bank} {accounts.bride.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.bride.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bride Father Account */}
              <div className="border-b border-divider pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-text-secondary">
                      신부 부 {accounts.brideFather.holder}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.brideFather.bank} {accounts.brideFather.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.brideFather.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bride Mother Account */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-text-secondary">
                      신부 모 {accounts.brideMother.holder}
                    </p>
                    <p className="text-sm text-text-primary">
                      {accounts.brideMother.bank} {accounts.brideMother.account}
                    </p>
                  </div>
                  <button
                    onClick={() => copyAccount(accounts.brideMother.account)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
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
