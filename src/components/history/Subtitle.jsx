import { motion } from "motion/react";

const text = "Y esto apenas comienza";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.3,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Subtitle() {
  const words = text.split(" ");
  
  return (
    <div className="relative pt-32 pb-24">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-brand-pink/15 to-brand-blue/15 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
       
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 h-px w-full max-w-xs mx-auto origin-center"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-pink/60 to-transparent" />
        </motion.div>

        
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-center tracking-tight leading-[1.2] px-4">
          {words.map((wordText, wordIndex) => {
            
            const isLastWord = wordIndex === words.length - 1;
            
            return (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-3 md:mr-5"
              >
                {wordText.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letter}
                    className="inline-block relative"
                    style={{ 
                      perspective: "1000px",
                    }}
                  >
                    <span className="relative inline-block group/char">
                      
                      <span className={`relative z-10 bg-clip-text text-transparent font-light ${
                        isLastWord 
                          ? "bg-gradient-to-br from-brand-pink via-brand-blue to-brand-blue/80 font-medium" 
                          : "bg-gradient-to-br from-white via-slate-200 to-slate-400"
                      }`}>
                        {char}
                      </span>
                      
                    </span>
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h2>

        {/* footer final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
         
          <motion.div
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-pink to-brand-blue shadow-lg shadow-brand-pink/50" />
          </motion.div>

          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-slate-400 text-sm md:text-base tracking-wide uppercase"
          >
            El futuro está en construcción
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}