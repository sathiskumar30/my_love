'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const messages = [
  {
    from: 'you',
    text: 'Hi This is Priya , Wish you many more happy returns of the day . I had bough something for you , soon you will get from me . Dont wanna reply...',
  },
  {
    from: 'me',
    text: 'May 10 , Indhu veetula namma rendu perum vachu kannu vangama pathom la , anthaa feeling iruke di thirudi , alagi ne uh...',
  },
  {
    from: 'you',
    text: 'Oi , One min pandravane , antha ponnu uruku ponalum pova , apdi pona ne variya da ',
  },
  {
    from: 'me',
    text: 'Neraya iruku di , Namma first first romance pannathu , window la romance pannathu , ne enaku paniyaram kuduthathu alagu la ne . . . .',
  },
  {
    from: 'you',
    text: 'Ne ipadilam website pannura nala , edhuvum marathu , venamna vitru avalothan.... ',
  },
  {
    from: 'me',
    text: 'Na pannurathu ellam waste eh analum , Ne en pondati , unakaga pannama na vera yarukaga panna poren.... Neye venam nu ponalum na ne varuva nu kathu irupen. Athukaga vera oruthi ta poga matten . Na unna than theditu irupen'
  },
  {
    from: 'you',
    text: 'En da ipadi pannitu iruka , unaku oru time sonna puriyatha ?, enaku ne pesa pesa eruchal aaguthu , enna thaniya vidu...',
  },
  {
    from: 'me',
    text: 'Na ipadilam pannurathuku karanam , ne enaku kudutha "Unconditional Love" , atha thedi unta vandhute than irupen . Ennala atha thedama iruka mudiyala , sorry di alagi...'
  },
  {
    from: 'you',
    text: 'Ithan unaku last change , inime enta sanda podama , na sollurathu ah purunjutu irupiya ? Nane sanda pottalum ne than enna samathanam pannanum pannuviya ? . Thirupi ipadi panna koodathu seriya .... Adipen inime ipadi pannena ...',
  },
  {
    from: 'me',
    text: "En thango di ne uh... Sorry lusu , inime en valkai la unta sanda poda matten , ithu mari pannave matten . Na unna romba miss pannen di , Ennala ne illama irukave mudiyala di . Kandipa inime na hurt eh panna matten. '...Neyum enna vittu poga matta la...' ",
  },
  {
    from: 'you',
    text: "poga matten , muah . I love you da lusu mama . Muah"
  },
  {
    from: 'me',
    text: "Muah Muah Muah Muah , I love you di en thangame...."
  },
  {
    from: 'me',
    text: "Papa , unaku releif ah irunthuchu na , Ne epo enta I love you solluriyo , apo na unna kekkama onnu panniten . Athu enna nu na solluren , ana ne I love you sonna mattum than athu enna nu solluven illana solla matten . Please neyum kekkatha . Ana atha ketutu ne tension oh ila alugavo koodathu okay va . Pleae sollama kekkatha na solla matten , Promise."
  }
];

export default function ChatMemories() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold">Our conversations</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 p-6 rounded-2xl border border-primary/20 bg-muted/30 backdrop-blur-sm max-h-96 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.from === 'you' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex ${message.from === 'you' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${message.from === 'you'
                  ? 'bg-muted text-foreground rounded-bl-sm'
                  : 'bg-primary text-primary-foreground rounded-br-sm'
                  }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-6"
          >
            <Heart className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
