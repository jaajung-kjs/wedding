'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Footer() {
  const { groom, bride, date, venue } = WEDDING_INFO;
  const weddingDate = new Date(date);

  const formatDate = () => {
    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth() + 1;
    const day = weddingDate.getDate();
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = days[weddingDate.getDay()];
    const hours = weddingDate.getHours();
    const minutes = String(weddingDate.getMinutes()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek} 오후 ${hours}시 ${minutes}분`;
  };

  const shareKakao = () => {
    if (typeof window !== 'undefined' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || 'YOUR_KAKAO_KEY');
      }
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${groom.name} ♥ ${bride.name} 결혼합니다`,
          description: `${formatDate()}\n${venue.name}`,
          imageUrl: window.location.origin + '/images/og-image.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
    } else {
      alert('카카오톡 공유 기능을 사용할 수 없습니다.');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다');
  };

  return (
    <footer className="bg-gradient-to-b from-white to-secondary py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md text-center"
      >
        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-4 text-5xl">💐</div>
        </motion.div>

        {/* Thank You Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4 font-serif text-3xl font-semibold text-text-primary"
        >
          Thank you
        </motion.h2>

        {/* Names & Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <p className="mb-2 text-lg text-text-primary">
            {groom.name} & {bride.name}
          </p>
          <p className="text-sm text-text-secondary">{formatDate()}</p>
          <p className="text-sm text-text-secondary">{venue.name}</p>
        </motion.div>

        {/* Share Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12 flex justify-center gap-3"
        >
          <button
            onClick={shareKakao}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
              <svg
                className="h-6 w-6 text-brown-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
            </div>
            <span className="text-xs text-text-secondary">카카오톡</span>
          </button>

          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <span className="text-xs text-text-secondary">링크 복사</span>
          </button>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xs text-text-secondary"
        >
          © 2026 Wedding Invitation
        </motion.p>
      </motion.div>
    </footer>
  );
}
