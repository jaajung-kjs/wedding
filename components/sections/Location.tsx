'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { WEDDING_INFO, TRANSPORTATION } from '@/lib/constants';

export default function Location() {
  const { venue } = WEDDING_INFO;

  const copyAddress = () => {
    navigator.clipboard.writeText(venue.address);
    alert('주소가 복사되었습니다!');
  };

  const openNaverMap = () => {
    window.open(`https://map.naver.com/p/search/${encodeURIComponent(venue.address)}`, '_blank');
  };

  const openKakaoMap = () => {
    window.open(`https://map.kakao.com/link/search/${encodeURIComponent(venue.address)}`, '_blank');
  };

  const callVenue = () => {
    window.location.href = `tel:${venue.phone}`;
  };

  return (
    <section className="bg-white py-20 md:py-32">
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
          className="heading-lg mb-16 text-center"
        >
          오시는 길
        </motion.h2>

        {/* Venue Info Card */}
        <motion.div
          variants={staggerItem}
          className="mb-8 rounded-2xl bg-white p-8 shadow-lg"
        >
          <h3 className="heading-md mb-6 text-center">{venue.name}</h3>

          <div className="space-y-4 text-center text-text-secondary">
            <div>
              <p className="text-lg mb-2">{venue.address}</p>
              <p className="text-sm">{venue.floor}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                onClick={copyAddress}
                className="rounded-full bg-accent px-6 py-2 text-sm text-white transition-transform hover:scale-105"
              >
                주소 복사
              </button>
              <button
                onClick={openNaverMap}
                className="rounded-full bg-green-600 px-6 py-2 text-sm text-white transition-transform hover:scale-105"
              >
                네이버 지도
              </button>
              <button
                onClick={openKakaoMap}
                className="rounded-full bg-yellow-500 px-6 py-2 text-sm text-white transition-transform hover:scale-105"
              >
                카카오맵
              </button>
              <button
                onClick={callVenue}
                className="rounded-full bg-blue-600 px-6 py-2 text-sm text-white transition-transform hover:scale-105"
              >
                전화 연결
              </button>
            </div>
          </div>
        </motion.div>

        {/* Kakao Map Embed */}
        <motion.div
          variants={staggerItem}
          className="mb-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg"
        >
          <iframe
            src={`https://map.kakao.com/link/map/${encodeURIComponent(venue.name + ' ' + venue.address)},${venue.lat},${venue.lng}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="카카오맵"
          />
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          variants={staggerItem}
          className="space-y-6 text-center text-text-secondary"
        >
          {/* Subway */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-text-primary">
              🚇 지하철
            </h4>
            {TRANSPORTATION.subway.map((line, index) => (
              <p key={index} className="text-sm">
                {line}
              </p>
            ))}
          </div>

          {/* Bus */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-text-primary">
              🚌 버스
            </h4>
            {TRANSPORTATION.bus.map((line, index) => (
              <p key={index} className="text-sm">
                {line}
              </p>
            ))}
          </div>

          {/* Parking */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-text-primary">
              🚗 주차
            </h4>
            <p className="text-sm">{TRANSPORTATION.parking}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
