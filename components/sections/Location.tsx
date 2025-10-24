'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { WEDDING_INFO, TRANSPORTATION } from '@/lib/constants';

declare global {
  interface Window {
    naver: any;
  }
}

export default function Location() {
  const { venue } = WEDDING_INFO;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (mapRef.current && window.naver) {
        const position = new window.naver.maps.LatLng(venue.lat, venue.lng);

        const mapOptions = {
          center: position,
          zoom: 17,
          zoomControl: false,
          zoomControlOptions: {
            style: window.naver.maps.ZoomControlStyle.SMALL,
            position: window.naver.maps.Position.TOP_RIGHT,
          },
          scaleControl: false,
          logoControl: true,
          mapDataControl: false,
          mapTypeControl: false,
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        // Add marker
        const marker = new window.naver.maps.Marker({
          position: position,
          map: map,
          title: venue.name,
        });

        // Add info window
        const infoWindow = new window.naver.maps.InfoWindow({
          content: `<div style="padding:10px;text-align:center;font-size:14px;font-weight:600;border:none;">${venue.name}</div>`,
        });

        infoWindow.open(map, marker);
      }
    };

    return () => {
      const existingScript = document.querySelector('script[src*="openapi.map.naver.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [venue.lat, venue.lng, venue.name]);

  const copyAddress = () => {
    navigator.clipboard.writeText(venue.address);
    alert('주소가 복사되었습니다');
  };

  const openNaverMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `nmap://place?lat=${venue.lat}&lng=${venue.lng}&name=${encodeURIComponent(venue.name)}&appname=com.wedding`;
      setTimeout(() => {
        window.open(`https://map.naver.com/p/search/${encodeURIComponent(venue.address)}`, '_blank');
      }, 1000);
    } else {
      window.open(`https://map.naver.com/p/search/${encodeURIComponent(venue.address)}`, '_blank');
    }
  };

  const openKakaoMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `kakaomap://look?p=${venue.lat},${venue.lng}`;
      setTimeout(() => {
        window.open(`https://map.kakao.com/link/map/${encodeURIComponent(venue.name)},${venue.lat},${venue.lng}`, '_blank');
      }, 1000);
    } else {
      window.open(`https://map.kakao.com/link/map/${encodeURIComponent(venue.name)},${venue.lat},${venue.lng}`, '_blank');
    }
  };

  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 text-center font-serif text-2xl font-semibold tracking-wider text-text-primary"
        >
          오시는 길
        </motion.h2>

        {/* Venue Name & Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 text-center"
        >
          <h3 className="mb-3 text-xl font-semibold text-text-primary">
            {venue.name} ⛪
          </h3>
          <button
            onClick={copyAddress}
            className="group inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
          >
            <span>{venue.address}</span>
            <svg
              className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
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
        </motion.div>

        {/* Kakao Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-6 overflow-hidden rounded-2xl shadow-lg"
        >
          <div
            ref={mapRef}
            className="h-[400px] w-full"
          />
        </motion.div>

        {/* Map App Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12 flex justify-center gap-3"
        >
          <button
            onClick={openNaverMap}
            className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white text-xs font-bold text-green-600">
              N
            </span>
            <span>네이버</span>
          </button>
          <button
            onClick={openKakaoMap}
            className="flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white text-xs font-bold text-yellow-600">
              K
            </span>
            <span>카카오맵</span>
          </button>
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto max-w-md space-y-6"
        >
          {/* Subway */}
          <div className="text-center">
            <h4 className="mb-3 font-semibold text-text-primary">지하철</h4>
            {TRANSPORTATION.subway.map((line, index) => (
              <p key={index} className="text-sm leading-relaxed text-text-secondary">
                {line}
              </p>
            ))}
          </div>

          {/* Bus */}
          <div className="text-center">
            <h4 className="mb-3 font-semibold text-text-primary">버스</h4>
            {TRANSPORTATION.bus.map((line, index) => (
              <p key={index} className="text-sm leading-relaxed text-text-secondary">
                {line}
              </p>
            ))}
          </div>

          {/* Parking */}
          <div className="text-center">
            <h4 className="mb-3 font-semibold text-text-primary">자차</h4>
            <p className="text-sm leading-relaxed text-text-secondary">
              {TRANSPORTATION.parking}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
