'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  {
    alt: 'First memory together',
    color: 'from-primary/20 to-accent/20',
    src : "/profile-4.jpeg"
  },
  {
    alt: 'Special moments',
    color: 'from-accent/20 to-secondary/20',
    src : "/profile-3.jpeg"
  },
  {
    alt: 'Better  1',
    color: 'from-secondary/20 to-primary/20',
    src : "/profile-2.jpeg"
  },
  {
    alt: 'Better 2',
    color: 'from-secondary/20 to-primary/20',
    src : "/profile-1.jpeg"
  },
   {
    alt: 'Better 3',
    color: 'from-secondary/20 to-primary/20',
    src : "/profile-5.jpeg"
  },
];

export default function PhotoGallery() {
  return (
    <section className="relative w-full py-18 px-4 ">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold">Moments I treasure</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden border border-primary/20"
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center backdrop-blur-sm`}
              >
                <img src={photo?.src} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Every photo is a reminder of what we shared, and what I want to rebuild.
        </motion.p>
      </div>
    </section>
  );
}
