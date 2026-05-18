import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoDot}></span> XenzoTech
      </div>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#skills">Expertise</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className={styles.cta}>Start a project</a>
    </nav>
  );
}
