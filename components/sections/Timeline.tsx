'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { TIMELINE } from '@/lib/constants';
import Image from 'next/image';

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="h-full w-full bg-gradient-to-b from-secondary/30 to-transparent" />
      </motion.div>

      <div className="relative z-10">
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
            Our Story
          </motion.h2>

          {/* Timeline Items */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 to-transparent md:block" />

            {/* Timeline Cards */}
            <div className="space-y-16 md:space-y-24">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-2xl shadow-lg"
                    >
                      <div className="relative aspect-square w-full bg-secondary">
                        {/* Placeholder until image is added */}
                        <div className="flex h-full items-center justify-center text-text-secondary">
                          <p className="text-sm">Image {index + 1}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full text-center md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}
                  >
                    <p className="mb-3 text-accent text-lg font-medium">
                      {item.date}
                    </p>
                    <h3 className="heading-md mb-4">{item.title}</h3>
                    <p className="body-text text-text-secondary">
                      {item.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
