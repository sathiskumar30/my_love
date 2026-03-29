'use client';

import { motion } from 'framer-motion';

export default function FinalMessage() {
  return (
    <section className="relative w-full py-32 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main message */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              I&apos;m asking for a second chance
            </h2>

            <p className="text-lg text-foreground leading-relaxed">
              Not to go back to how things were, but to build something even better. Something where I truly appreciate
              you, listen to you, and show up for you the way you deserve.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I can&apos;t undo the past, but I can promise a better future. One where you&apos;re my priority, where
              your feelings matter, and where I never take you for granted again.
            </p>
          </div>

          {/* Decorative border */}
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Signature quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-base text-primary italic font-medium">
              "If you&apos;re willing, I&apos;d like to try again."
            </p>
            <p className="text-xs text-muted-foreground mt-4">— With all my heart</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
