'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <section className="relative w-full py-18 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold">A song for you</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-md"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                duration: 20,
                repeat: isPlaying ? Infinity : 0,
                ease: 'linear',
              }}
            >
              <Music className="w-12 h-12 text-primary" />
            </motion.div>
          </div>

          <h3 className="text-center font-semibold mb-2">Thinking of You</h3>
          <p className="text-center text-xs text-muted-foreground mb-6">Original melody</p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-muted-foreground">0:00</span>
            <div className="flex-1 mx-4 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={isPlaying ? { width: '45%' } : { width: '0%' }}
                transition={{ duration: 3 }}
              />
            </div>
            <span className="text-xs text-muted-foreground">2:45</span>
          </div>

          <div className="flex justify-center gap-4">
            <button
              // onClick={() => setIsPlaying(!isPlaying)}
              onClick={handlePlayPause}

              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Every note reminds me of you... <span className='text-blue-400'> Wait Pannu di thirudi play aagum di alagi...</span>
          </p>
        </motion.div>
      </div>
      <audio ref={audioRef} src="/Sandakari_song.mp3" />
    </section>
  );
}
