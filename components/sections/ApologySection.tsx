'use client';

import { motion } from 'framer-motion';

export default function ApologySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">I need to apologize</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <motion.p variants={itemVariants} className="text-base text-foreground leading-relaxed">
            I've been thinking a lot about what I said and did. I realize now that I hurt you, and that was never my
            intention. I was selfish, and I didn't consider how my actions would affect you.
          </motion.p>

          <motion.p variants={itemVariants} className="text-base text-foreground leading-relaxed">
            You deserved better. You deserved someone who listens, someone who shows up, someone who values you the way
            you deserve to be valued.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="p-4 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm mt-6"
          >
            <p className="text-sm text-primary font-medium">I take full responsibility</p>
            <p className="text-xs text-muted-foreground mt-2">
              Not making excuses, just being honest about how I fell short.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
