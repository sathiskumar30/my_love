'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lock } from 'lucide-react';

const hiddenMessages = [
  'You\'re the best thing that ever happened to me.',
  'I think about you every single day.',
  'Your smile is the most beautiful thing I\'ve ever seen.',
  'I want to spend forever making this right.',
];

export default function HiddenMessages() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold">Secret confessions</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-6 rounded-xl border border-accent/30 bg-gradient-to-r from-accent/10 to-transparent hover:border-accent/60 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-accent" />
              <span className="font-semibold text-accent">Click to reveal</span>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-accent" />
            </motion.div>
          </div>
        </motion.button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 space-y-3 overflow-hidden"
            >
              {hiddenMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm"
                >
                  <p className="text-sm text-foreground leading-relaxed italic">{message}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
