import { memo } from 'react';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ContactToggle.module.css';

function ContactToggle() {
  return (
    <Link className={styles.toggle} to="/about" aria-label="About SnackTime">
      <Info size={21} />
      <span>About Us</span>
    </Link>
  );
}

export default memo(ContactToggle);
