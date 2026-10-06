import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./GalleryCard.module.css";
function GalleryCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/projects/${project.id}`} className={styles.card}>
        <div className={styles.imageWrap}>
          <img
            src={project.image}
            alt={`${project.title} activity`}
            loading="lazy"
          />
          <span>
            <ArrowUpRight />
          </span>
        </div>
        <div className={styles.body}>
          <p>{project.label}</p>
          <h2>{project.title}</h2>
          <div>{project.description}</div>
        </div>
      </Link>
    </motion.article>
  );
}

export default memo(GalleryCard);
