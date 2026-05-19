import styles from './Footer.module.css';

const links = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'GitHub', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.logoDot}></span> XenzoTech
      </div>
      <div>© 2026 XenzoTech. All rights reserved. · Tiruppur, India</div>
      <div className={styles.links}>
        {links.map((l, i) => (
          <a href={l.href} key={i}>{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
