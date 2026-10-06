import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink
          className={styles.brand}
          to="/"
          onClick={close}
          aria-label="SnackTime home"
        >
          <img
            src="/assets/logo/logo.png"
            alt="SnackTime brand logo in the site header, linking to the home page"
          />
        </NavLink>
        <div className={styles.links}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          className={styles.menuButton}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={close}
                  className={styles.mobileLink}
                >
                  {label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default memo(Navbar);
