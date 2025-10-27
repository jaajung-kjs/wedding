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

  // 1월 18일부터 31일까지 표시
  const januaryStartDate = new Date(year, 0, 18); // 1월 18일
  const januaryFirstDayOfWeek = januaryStartDate.getDay();

  const januaryDays = [];
  // 시작일 앞의 빈 칸
  for (let i = 0; i < januaryFirstDayOfWeek; i++) {
    januaryDays.push(null);
  }
  // 1월 18일부터 31일까지
  for (let i = 18; i <= 31; i++) {
    januaryDays.push({ day: i, month: 1 });
  }

  // 2월 1일부터 14일까지 표시
  const februaryStartDate = new Date(year, 1, 1); // 2월 1일
  const februaryFirstDayOfWeek = februaryStartDate.getDay();

  const februaryDays = [];
  // 시작일 앞의 빈 칸
  for (let i = 0; i < februaryFirstDayOfWeek; i++) {
    februaryDays.push(null);
  }
  // 2월 1일부터 14일까지
  for (let i = 1; i <= 14; i++) {
    februaryDays.push({ day: i, month: 2 });
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
          <p className="mb-1 whitespace-nowrap text-lg font-medium text-text-primary">
            {dateTime.date} | {dateTime.time}
          </p>
          <p className="whitespace-nowrap text-sm text-text-secondary">
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

          {/* January Calendar */}
          <div className="grid grid-cols-7 gap-2">
            {januaryDays.map((dayData, index) => {
              const dayOfWeek = index % 7;
              const isSunday = dayOfWeek === 0;
              const isSaturday = dayOfWeek === 6;

              return (
                <div
                  key={`jan-${index}`}
                  className={`relative flex aspect-square items-center justify-center rounded-lg text-sm transition-all ${
                    dayData === null ? '' : 'hover:bg-white'
                  }`}
                >
                  {dayData !== null && (
                    <span
                      className={
                        isSunday
                          ? 'text-red-500/70'
                          : isSaturday
                            ? 'text-blue-500/70'
                            : 'text-text-secondary/60'
                      }
                    >
                      {dayData.day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Month Divider */}
          <div className="my-4 text-center">
            <span className="text-base font-semibold text-accent">2월</span>
          </div>

          {/* February Calendar */}
          <div className="grid grid-cols-7 gap-2">
            {februaryDays.map((dayData, index) => {
              const isWeddingDay = dayData && dayData.day === day;
              const dayOfWeek = index % 7;
              const isSunday = dayOfWeek === 0;
              const isSaturday = dayOfWeek === 6;

              return (
                <div
                  key={`feb-${index}`}
                  className={`relative flex aspect-square items-center justify-center rounded-lg text-sm transition-all ${
                    dayData === null
                      ? ''
                      : isWeddingDay
                        ? 'bg-accent font-bold text-white shadow-md'
                        : 'hover:bg-white'
                  }`}
                >
                  {dayData !== null && (
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
                      {dayData.day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* D-day Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-base text-text-primary">
            준성 ♥ 여진 결혼식이{' '}
            <span className="font-semibold text-accent">
              {Math.max(0, Math.ceil((weddingDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))}일
            </span>{' '}
            남았습니다
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
