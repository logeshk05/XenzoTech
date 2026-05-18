import styles from './Hero.module.css';

const services = [
  { name: 'Web Design & Development', dot: 'orange', tag: 'Core' },
  { name: 'App Development', dot: 'orange', tag: 'Core' },
  { name: 'UI/UX Design', dot: 'violet', tag: 'Figma' },
  { name: 'Landing Page Development', dot: 'yellow', tag: 'Hot' },
  { name: 'Responsive Optimization', dot: 'green', tag: 'Fix' },
  { name: 'Portfolio Website Creation', dot: 'pink', tag: 'New' },
];

const stats = [
  { num: '12', sym: '+', label: 'Projects' },
  { num: '8', sym: '+', label: 'Clients' },
  { num: '100', sym: '%', label: 'On-time' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine}></span> Full-Service Digital Agency · Tiruppur
        </div>
        <h1 className={styles.heading}>
          We build brands<br />
          that <span className={styles.highlight}>perform</span><br />
          &amp; <span className={styles.violet}>convert</span>
        </h1>
        <p className={styles.desc}>
          XenzoTech is a Tiruppur-based digital agency offering web design, branding, SEO, and marketing — everything your business needs to grow online.
        </p>
        <div className={styles.actions}>
          <a href="#work" className={styles.btnPrimary}>View our work</a>
          <a href="#contact" className={styles.btnOutline}>Let's talk</a>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.card}>
          <div className={styles.cardLabel}>What we do</div>
          <div className={styles.servicesList}>
            {services.map((s, i) => (
              <div className={styles.serviceRow} key={i}>
                <div className={`${styles.svcDot} ${styles[s.dot]}`}></div>
                <span className={styles.svcName}>{s.name}</span>
                <span className={styles.svcTag}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.hstat} key={i}>
              <div className={styles.hstatNum}>{s.num}<span>{s.sym}</span></div>
              <div className={styles.hstatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
