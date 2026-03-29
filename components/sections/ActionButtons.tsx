'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { Root, Title, Toast } from '@radix-ui/react-toast';
import emailjs from '@emailjs/browser';


export default function ActionButtons() {
  const [evadingButton, setEvadingButton] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');


  const sendEmail = async () => {
    try {
      const res = await emailjs.send(
        'love_one',
        'template_heih3de',
        {
          to_email: 'heremail@gmail.com',
          subject: 'For you ❤️',
          message: 'I’m really sorry… please read this once.',
        },
        'kosRKeOkLXigpZa5x'
      );

      console.log('SUCCESS', res);

    } catch (err) {
      console.log('FAILED', err);
    }
  };

  const handleEvadingButton = () => {
    if (evadingButton) {
      setEvadingButton(false);
    } else {
      setEvadingButton(true);
      setTimeout(() => setEvadingButton(false), 1500);
    }
  };

  const handleAccept = async () => {
    try {
      await sendEmail()

      setToastMessage('Message sent ❤️');
    } catch {
      setToastMessage('Failed to send 💔');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleContact = async () => {
    setToastMessage('Let\'s talk... I\'ve missed hearing your voice 💙');
    try {
      await sendEmail();

      setToastMessage('Message sent ❤️');
    } catch {
      setToastMessage('Failed to send 💔');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Accept button */}
          <motion.button
            onClick={handleAccept}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/50 transition-shadow"
          >
            <Heart className="w-5 h-5" />
            Yes, You've wait… until your heart says yes
          </motion.button>

          {/* Evading button */}
          <motion.button
            onClick={handleEvadingButton}
            animate={evadingButton ? { x: [0, 200, -200, 0] } : { x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full py-4 px-6 rounded-xl border-2 border-muted text-foreground font-semibold hover:border-accent transition-colors"
          >
            {evadingButton ? 'You can\'t catch me! 😄' : 'No way (just kidding 😊)'}
          </motion.button>

          {/* Contact button */}
          <motion.button
            onClick={handleContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/50 transition-shadow"
          >
            <Mail className="w-5 h-5" />
            Lets talk
          </motion.button>
        </motion.div>

        {/* Toast notification */}
        <Root open={showToast} onOpenChange={setShowToast}>
          <Title>{toastMessage}</Title>
        </Root>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-12"
        >
          Created with love and a sincere heart. 💜
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground "
        >
          By Your Lovely Husband
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground "
        >
          Sathis ( Sandakaran )
        </motion.p>
      </div>
    </section>
  );
}
