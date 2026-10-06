import { motion } from "framer-motion";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <motion.section
      className={styles.page}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
    >
      <div className={styles.intro}>
        <h1>
          Building  <span> </span>
          <em>Together</em>
        </h1>
      </div>
      <div className={styles.grid}>
        {projects.filter((project) => project.visible !== false).map((project, index) => (
          <GalleryCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </motion.section>
  );
}
