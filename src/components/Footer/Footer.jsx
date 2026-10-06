import { memo } from 'react';
import styles from './Footer.module.css';

function Footer() {
  return <footer className={styles.footer}>
    <p>© {new Date().getFullYear()} SnackTime. All rights reserved.</p>
  </footer>;
}

export default memo(Footer);
