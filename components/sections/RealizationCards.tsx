'use client';

import { motion } from 'framer-motion';

const realizations = [
  {
    title: 'I took you for granted',
    description: 'Your presence was a gift I didn\'t appreciate until it was gone.',
  },
  {
    title: 'I wasn\'t there when you needed me',
    description: 'Instead of listening and helping, I was focused on myself.',
  },
  {
    title: 'I said things I didn\'t mean',
    description: 'Words spoken in anger that still echo, and I wish I could take back.',
  },
];

export default function RealizationCards() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-bold">What I&apos;ve realized</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="space-y-4">
          {realizations.map((realization, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{realization.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{realization.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
