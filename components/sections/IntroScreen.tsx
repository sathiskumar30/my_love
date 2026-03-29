'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function IntroScreen() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              I miss you
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            And I want to make things right
          </motion.p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* CTA Text */}
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Scroll to see what I have to say...
        </motion.p>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
}
