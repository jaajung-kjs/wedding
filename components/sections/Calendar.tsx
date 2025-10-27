'use client';

import { motion } from 'framer-motion';
import { WEDDING_INFO } from '@/lib/constants';

export default function Calendar() {
  const weddingDate = new Date(WEDDING_INFO.date);
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const day = weddingDate.getDate();

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDaysEn = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // 1월 15일부터 2월 14일까지 표시
  const startDate = new Date(year, 0, 15); // 1월 15일 (month는 0-based)
  const endDate = new Date(year, 1, 14);   // 2월 14일

  // 시작일의 요일 (일요일=0)
  const firstDayOfWeek = startDate.getDay();

  // 달력 그리드 생성
  const calendarDays = [];

  // 시작일 앞의 빈 칸
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // 1월 15일부터 31일까지
  for (let i = 15; i <= 31; i++) {
    calendarDays.push({ day: i, month: 1, isCurrentMonth: false });
  }

  // 2월 1일부터 14일까지
  for (let i = 1; i <= 14; i++) {
    calendarDays.push({ day: i, month: 2, isCurrentMonth: true });
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
            {calendarDays.map((dayData, index) => {
              const isWeddingDay = dayData && dayData.day === day && dayData.month === 2;
              const dayOfWeek = index % 7;
              const isSunday = dayOfWeek === 0;
              const isSaturday = dayOfWeek === 6;
              const isFirstDayOfMonth = dayData && dayData.day === 1 && dayData.month === 2;

              return (
                <div
                  key={index}
                  className={`relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition-all ${
                    dayData === null
                      ? ''
                      : isWeddingDay
                        ? 'bg-accent font-bold text-white shadow-md'
                        : 'hover:bg-white'
                  }`}
                >
                  {dayData !== null && (
                    <>
                      {isFirstDayOfMonth && (
                        <span className="absolute -top-6 text-xs font-semibold text-accent">
                          2월
                        </span>
                      )}
                      <span
                        className={
                          isWeddingDay
                            ? 'text-white'
                            : isSunday
                              ? 'text-red-500'
                              : isSaturday
                                ? 'text-blue-500'
                                : dayData.month === 1
                                  ? 'text-text-secondary/50'
                                  : 'text-text-primary'
                        }
                      >
                        {dayData.day}
                      </span>
                    </>
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
