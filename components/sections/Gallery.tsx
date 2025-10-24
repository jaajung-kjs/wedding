'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { GALLERY_IMAGES } from '@/lib/constants';
import Lightbox from '@/components/ui/Lightbox';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-white to-primary py-20 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="heading-lg mb-16 text-center"
        >
          Gallery
        </motion.h2>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Placeholder until image is added */}
              <div className="flex h-full items-center justify-center bg-secondary text-text-secondary">
                <p className="text-sm">Photo {index + 1}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={GALLERY_IMAGES}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}
    </section>
  );
}
