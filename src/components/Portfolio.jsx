import styles from './Portfolio.module.css';

const projects = [
  {
    href: 'project-restaurant.html',
    thumb: 'thumb1', label: 'Restaurant · Concept',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
    name: 'Spice Garden Restaurant',
    desc: 'Modern restaurant website with online ordering, table reservations, and interactive menu showcase.',
    lines: ['', 's', 'xs', '', 's'],
  },
  {
    href: 'project-dental.html',
    thumb: 'thumb2', label: 'Healthcare · Concept',
    tags: ['Booking System', 'Patient Portal', 'HIPAA'],
    name: 'SmileCare Dental Clinic',
    desc: 'Professional healthcare website with appointment booking, doctor profiles, and patient portal.',
    lines: ['s', '', 'xs', 's', ''],
  },
  {
    href: 'project-fitness.html',
    thumb: 'thumb3', label: 'Fitness · Concept',
    tags: ['Membership', 'Booking', 'Mobile App'],
    name: 'FitZone Gym & Fitness',
    desc: 'Dynamic fitness website with membership portal, class booking, and progress tracking.',
    lines: ['', 'xs', 's', '', 's'],
  },
  {
    href: 'project-portfolio.html',
    thumb: 'thumb4', label: 'Portfolio · Concept',
    tags: ['HTML/CSS', 'GSAP', 'Responsive'],
    name: 'Creative Portfolio Website',
    desc: 'Stunning portfolio showcase with smooth animations, project gallery, and case studies.',
    lines: ['s', '', 'xs', '', 's'],
  },
];

function MockBrowser({ lines }) {
  return (
    <div className={styles.mockBrowser}>
      <div className={styles.mockBar}>
        <div className={styles.mdot} style={{ background: '#e74c3c' }} />
        <div className={styles.mdot} style={{ background: '#f1c40f' }} />
        <div className={styles.mdot} style={{ background: '#2ecc71' }} />
      </div>
      <div className={styles.mockContent}>
        {lines.map((l, i) => (
          <div className={`${styles.mockLine} ${l ? styles[l] : ''}`} key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={`section-label ${styles.sectionLabel}`}>Concept Projects</div>
          <h2 className={styles.heading}>Selected Concept Projects</h2>
          <p className={styles.subtitle}>
            Premium showcase projects crafted to demonstrate our design systems, frontend engineering, and digital experience capabilities.
          </p>
        </div>
        <a href="#contact" className={styles.btnOutline}>Start a project →</a>
      </div>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <a href={p.href} className={styles.card} key={i}>
            <div className={`${styles.thumb} ${styles[p.thumb]}`}>
              <MockBrowser lines={p.lines} />
              <span className={styles.thumbLabel}>{p.label}</span>
              <span className={`${styles.thumbBadge} ${styles.concept}`}>Concept Project</span>
            </div>
            <div className={styles.info}>
              <div className={styles.tags}>
                {p.tags.map((t, j) => <span className={styles.tag} key={j}>{t}</span>)}
              </div>
              <div className={styles.name}>{p.name}</div>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
