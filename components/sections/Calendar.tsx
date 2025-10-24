'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Calendar() {
  const weddingDate = new Date(WEDDING_INFO.date);
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const day = weddingDate.getDate();

  // 2026년 2월은 28일까지
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDaysEn = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // 달력 그리드 생성
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const formatDateTime = () => {
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = days[weddingDate.getDay()];
    const hours = weddingDate.getHours();
    const minutes = String(weddingDate.getMinutes()).padStart(2, '0');

    return {
      date: `${year}년 ${month + 1}월 ${day}일 ${dayOfWeek}`,
      dateEn: `${weekDaysEn[weddingDate.getDay()].charAt(0) + weekDaysEn[weddingDate.getDay()].slice(1).toLowerCase()}, ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(weddingDate)} ${day}, ${year}`,
      time: `오후 ${hours}시 ${minutes}분`,
      timeEn: `PM ${hours}:${minutes}`
    };
  };

  const dateTime = formatDateTime();

  return (
    <section className="bg-white py-20 px-6">
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
          WEDDING DAY
        </motion.h2>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 text-center"
        >
          <p className="mb-1 text-lg font-medium text-text-primary">
            {dateTime.date} | {dateTime.time}
          </p>
          <p className="text-sm text-text-secondary">
            {dateTime.dateEn} | {dateTime.timeEn}
          </p>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="rounded-2xl bg-secondary p-6"
        >
          {/* Week Days Header */}
          <div className="mb-4 grid grid-cols-7 gap-2">
            {weekDays.map((weekDay, index) => (
              <div
                key={index}
                className={`text-center text-sm font-semibold ${
                  index === 0
                    ? 'text-red-500'
                    : index === 6
                      ? 'text-blue-500'
                      : 'text-text-secondary'
                }`}
              >
                {weekDay}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((dayNum, index) => {
              const isWeddingDay = dayNum === day;
              const dayOfWeek = index % 7;
              const isSunday = dayOfWeek === 0;
              const isSaturday = dayOfWeek === 6;

              return (
                <div
                  key={index}
                  className={`relative flex aspect-square items-center justify-center rounded-lg text-sm transition-all ${
                    dayNum === null
                      ? ''
                      : isWeddingDay
                        ? 'bg-accent font-bold text-white shadow-md'
                        : 'hover:bg-white'
                  }`}
                >
                  {dayNum !== null && (
                    <span
                      className={
                        isWeddingDay
                          ? 'text-white'
                          : isSunday
                            ? 'text-red-500'
                            : isSaturday
                              ? 'text-blue-500'
                              : 'text-text-primary'
                      }
                    >
                      {dayNum}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
