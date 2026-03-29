'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Lock, Unlock } from 'lucide-react';
import MusicPlayer from '@/components/sections/MusicPlayer';
import PhotoGallery from '@/components/sections/PhotoGallery';
import ChatMemories from '@/components/sections/ChatMemories';
import ActionButtons from '@/components/sections/ActionButtons';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [unlockedMessages, setUnlockedMessages] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen text-foreground overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20  ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6"
          >
            <Heart className="w-16 h-16 text-primary mx-auto fill-primary" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hey <span className="text-primary">Sandakari</span>...
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 italic">
            "Papa, Thangame, Alagi... my Pondati"
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h6
              className="text-2xl md:text-6xl font-bold tracking-tight text-balance pb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                I miss you
              </span>
            </motion.h6>
          </motion.div>

          <p className="text-lg text-foreground mb-8 leading-relaxed max-w-xl mx-auto">
            I have something that&apos;s been in my heart, waiting for the right moment to share with you. Will you scroll and listen?
          </p>

          <motion.p
            className="text-lg text-muted-foreground pb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            And I want to make things right
          </motion.p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-primary text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Apology Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-border"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">
            I&apos;m Sorry
          </h2>

          <p className="text-lg text-foreground leading-relaxed mb-6">
            <span className="text-primary font-semibold">Pondati</span>, I know I hurt you. I know my words and actions caused pain when you deserved nothing but love and care. There&apos;s no excuse for how I made you feel.
          </p>

          <p className="text-lg text-foreground leading-relaxed mb-6">
            Every moment since then, I&apos;ve thought about you—<span className="text-primary font-semibold">Papa</span>, my <span className="text-primary font-semibold">Thangame</span>. The regret is so heavy that it wakes me up at night. I miss your laugh, your presence, everything about you.
          </p>

          <p className="text-lg text-foreground leading-relaxed text-center italic text-primary font-semibold">
            &quot;I was wrong, and I&apos;ll spend forever proving it if you let me.&quot;
          </p>
        </motion.div>
      </section>

      {/* Realizations Cards */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            What I Realized
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {
              [
                {
                  title: 'I Took You For Granted',
                  desc: 'I had someone so pure in my life, yet I failed to value you the way you deserved. I see that clearly now, and I am changing, not just for you, but to become a better man.',
                },
                {
                  title: 'I Didn’t Express Enough Love',
                  desc: 'Even though I loved you deeply, I didn’t show it in ways you needed. I’m learning to express, to care, and to make you feel truly loved every single day.',
                },
                {
                  title: 'I Hurt You Without Realizing',
                  desc: 'Some of my actions caused you pain, even if I didn’t mean it. I take responsibility for that, and I’m working on being more understanding and gentle.',
                },
                {
                  title: 'I’m Learning To Be Better',
                  desc: 'This is not just words. I’m actively working on myself — my mindset, my actions, my love — so I can be the person you truly deserve, my Alagi.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(217, 119, 6, 0.2)' }}
                  className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 text-primary mb-4">✨</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-foreground text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Second Chance Section - The Powerful Request */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl border-2 border-primary">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8 text-center"
            >
              <Heart className="w-20 h-20 text-primary mx-auto fill-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground leading-tight">
              Give Me{' '}
              <span className="text-primary">One Chance</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-xl text-center text-foreground font-semibold italic">
                Only one. You will never regret it.
              </p>

              <p className="text-lg text-foreground leading-relaxed text-center">
                I&apos;m loving you with such intensity, such desperation to make things right. This isn&apos;t just words, <span className="text-primary font-bold">Sandakari</span>. This is my promise.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
                <p className="text-foreground italic text-center">
                  &quot;If you give me one more chance, I will prove every single day that loving you was the best decision of my life. I will be better. I will be there. I will love you the way you deserve.&quot;
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed text-center">
                My heart belongs to you, <span className="text-primary font-bold">Pondati</span>. Let me show you what forever looks like with me.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <MusicPlayer />

      <PhotoGallery />

      <ChatMemories />

      {/* Memories Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Our Beautiful Memories
          </h2>

          <div className="space-y-6">
            {[
              { text: 'Night 1o clock 2o clock varaikum pesitu irupome lusu , athu la seriyana alagu theriyuma . Na pesitu , ne headset potutu reply pannitu , bedsheet kulla . Alagu la...', time: 'Always' },
              { text: 'Text park la unga ammachi oda building of inaguration apo night , antha terrace nanu neyum romance pannome , nyabagam iruka lusu , katti puduchutu mutha kuduthu..', time: 'Forever' },
              { text: 'Namma ellam antha Damn Park ku ponome , erode la irunthu apdiye . Apo return vara po bus la namma antha bus stand la bus eritu ukanthu irukom, ne vandhu veyil adikuthu nu kai vachu maracha theriyuma , innum enaku apdiye nybagam iruku lusu , ana apo lam antha mari kutty kutty scenes la enaku epdi react pannurathunu eh therila . Moorr vangi kuduchom...', time: 'Every Day' },
              { text: "Appa en purse ah last ah veetuku vandha apo pathu irukanga, ellarum amma appa nithya . But Appa edhuvume enta kekkama irukaru en nu than therila", time: 'Forever' },
              { text : "Ne illana , na ipadi illa di . Na ivalo vandhadhuku karaname ne than . Na athai ( Ung amma ) mari , enna than sanda potalum venam nu sonnalum ne than enaku , athukaga vitutu porathu ila " , time : "Life Line"},
              { text: 'You believed in me when I didn\'t believe in myself. That\'s pure love, Pondati.', time: 'Always' },
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: false }}
                className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-border ${i % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'
                    }`}
                >
                  <p className="text-foreground leading-relaxed mb-3">{msg.text}</p>
                  <span className="text-sm text-primary font-semibold">{msg.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Messages - Secret Love Notes */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Secret Confessions
          </h2>


          <div className="space-y-4">
            {[
              'You make me want to be a better person every single day.',
              'I think about you first thing when I wake up, every single morning.',
              'Your smile is the most beautiful thing I\'ve ever seen in my life.',
              'I love you more than words can ever express, Sandakari.',
              'You are my missing piece, my home, my everything, Pondati.',
            ].map((msg, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setUnlockedMessages((prev) =>
                    prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
                  );
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 1000);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left"
              >
                <div
                  className={`bg-white/80 backdrop-blur-md rounded-xl p-6 border-2 transition-all duration-300 ${unlockedMessages.includes(i)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-lg font-semibold italic transition-opacity ${unlockedMessages.includes(i)
                        ? 'text-primary opacity-100'
                        : 'text-muted-foreground opacity-0'
                        }`}
                    >
                      {msg}
                    </p>
                    {unlockedMessages.includes(i) ? (
                      <Unlock className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                    ) : (
                      <Lock className="w-6 h-6 text-muted-foreground flex-shrink-0 ml-4" />
                    )}
                  </div>
                  {!unlockedMessages.includes(i) && (
                    <p className="text-sm text-muted-foreground mt-2">(Missed Messages) Click to reveal...</p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showConfetti && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    animate={{ opacity: 0, y: 200, x: (i - 2) * 100, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed pointer-events-none"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary fill-primary" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Dreams Together Section - Extra Creative */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            I Dream Of...
          </h2>

          <div className="space-y-8">
            {[
              {
                emoji: '🌅',
                title: 'Waking Up Together',
                desc: 'Every morning seeing your beautiful face, Sandakari. Starting each day with your love.',
              },
              {
                emoji: '🤝',
                title: 'Growing Together',
                desc: 'Building dreams, facing challenges, and conquering life side by side, Thangame.',
              },
              {
                emoji: '🏡',
                title: 'A Home Full Of Love',
                desc: 'Creating a space where your smile never fades, where you feel cherished always, Alagi.',
              },
              {
                emoji: '👨‍👩‍💕',
                title: 'Forever With You',
                desc: 'Growing old together, laughing at our memories, being each other&apos;s greatest adventure, Pondati.',
              },
            ].map((dream, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: false }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg flex gap-4"
              >
                <div className="text-4xl flex-shrink-0">{dream.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{dream.title}</h3>
                  <p className="text-foreground leading-relaxed">{dream.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Message */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              <Sparkles className="w-16 h-16 text-primary" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            You Are My Everything
          </h2>

          <p className="text-2xl text-primary font-bold mb-8">
            Sandakari, Papa, Thangame, Alagi, Pondati
          </p>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-foreground leading-relaxed">
              You asked for one chance. Here&apos;s what I promise you:
            </p>

            <ul className="text-left space-y-4 bg-white/80 backdrop-blur-md rounded-xl p-8 border border-border">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-primary" />
                <span className="text-foreground">To love you more fiercely than I ever have</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-primary" />
                <span className="text-foreground">To never take you for granted again</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-primary" />
                <span className="text-foreground">To be your person, always and forever</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-primary" />
                <span className="text-foreground">To build a beautiful future worthy of your love</span>
              </li>
            </ul>
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl pt-10"
          >
            💕
          </motion.div>
        </motion.div>
      </section>


      <ActionButtons />


    </div>
  );
}
