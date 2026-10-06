import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { contactInfo } from "../../data/contactInfo";
import styles from "./Contact.module.css";
export default function Contact() {
  const [selected, setSelected] = useState("business");
  const label = selected === "business" ? "Business" : "General";
  return (
    <motion.section
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.shapeOne} />
      <div className={styles.shapeTwo} />
      <div className={styles.content}>
        <p className="eyebrow">Let’s connect</p>
        <h1>
          Hello <span>👋</span>
        </h1>
        <p className={styles.sub}>We look forward to hearing from you.</p>
        <div className={styles.choices}>
          <button
            className={selected === "business" ? styles.selected : ""}
            onClick={() => setSelected("business")}
          >
            Snack Time <ChevronRight />
          </button>
          <button
            className={selected === "general" ? styles.selected : ""}
            onClick={() => setSelected("general")}
          >
            Ehsaas <ChevronRight />
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className={styles.info}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <h2>{label} enquiries</h2>
            {contactInfo[selected].map((item) => (
              <div className={styles.item} key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
