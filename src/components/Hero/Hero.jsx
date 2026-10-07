import { memo } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoFallback} />
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1800&q=80"
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.14 } },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className={styles.eyebrow}
        >
          Bringing Childhood Back To Life 
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0 },
          }}
        >
          Snack<span> Time</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          className={styles.copy}
        >
          A community-driven ecosystem dedicated to ground level, life-skill and SEL focused projects integrating art and play. 
        </motion.p>

      </motion.div>
    </section>
  );
}

export default memo(Hero);
