'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play on mount (unmuted by default)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Auto-play failed (iOS Safari), user interaction required
          setIsPlaying(false);
        });
    }
  }, []);

  // Unified button handler: play if not playing, toggle mute if playing
  const handleButtonClick = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        // Start playing (for iOS Safari)
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((error) => {
            console.error('Failed to play audio:', error);
          });
      } else {
        // Toggle mute/unmute
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
        style={{ willChange: 'transform' }}
      >
        <div className="relative">
          {/* Music Control Button */}
          <button
            onClick={handleButtonClick}
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95"
            aria-label={
              !isPlaying
                ? 'Play music'
                : isMuted
                  ? 'Unmute music'
                  : 'Mute music'
            }
          >
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.svg
                  key="play"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
              ) : isMuted ? (
                <motion.svg
                  key="muted"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="playing"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>

          {/* Playing Animation */}
          {isPlaying && !isMuted && (
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeOut',
              }}
              className="pointer-events-none absolute inset-0 rounded-full bg-accent"
            />
          )}
        </div>
      </motion.div>
    </>
  );
}
