import styles from './Services.module.css';

const services = [
  {
    num: '01 — Core Service', icon: '🌐',
    title: 'Web Design & Development', badge: 'Core',
    desc: 'We design and build fast, beautiful, mobile-first websites that help businesses and startups grow online — built clean and coded to last.',
    offers: ['Business websites', 'Portfolio websites', 'Landing pages', 'Startup websites'],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    price: 'From ₹4,999', variant: 'core',
  },
  {
    num: '02', icon: '📲',
    title: 'App Development', badge: null,
    desc: 'Modern mobile and web app experiences engineered for performance, scalability, and seamless cross-platform user interaction.',
    offers: ['Android applications', 'Web applications', 'React Native apps', 'Modern UI integration'],
    tech: ['React Native', 'Flutter', 'Firebase', 'UI/UX'],
    price: 'From ₹6,999', variant: 'appdev',
  },
  {
    num: '03', icon: '🎨',
    title: 'UI/UX Design', badge: null,
    desc: 'Beautiful, user-friendly designs in Figma before a single line of code is written. We design for clarity, conversion, and delight.',
    offers: ['Website UI design', 'Mobile app UI', 'Dashboard UI', 'Landing page design'],
    tech: ['Figma', 'Canva'],
    price: 'From ₹3,999', variant: 'uiux',
  },
  {
    num: '04', icon: '🚀',
    title: 'Landing Page Development', badge: null,
    desc: 'High-converting, purpose-built landing pages that drive clicks, leads, and sales. Perfect for product launches, events, and campaigns.',
    offers: ['Product landing pages', 'Event pages', 'Marketing pages', 'SaaS landing pages'],
    tech: ['HTML/CSS', 'React', 'Tailwind'],
    price: 'From ₹2,999', variant: 'landing',
  },
  {
    num: '05', icon: '📱',
    title: 'Responsive Website Optimization', badge: null,
    desc: "Is your existing website broken on mobile or slow to load? We fix that. We modernize old sites to feel fast, clean, and great on every screen.",
    offers: ['Mobile optimization', 'Speed optimization', 'UI improvements'],
    tech: ['CSS', 'Tailwind', 'DevTools'],
    price: 'From ₹1,999', variant: 'optimize',
  },
  {
    num: '06', icon: '✨',
    title: 'Portfolio Website Creation', badge: null,
    desc: 'Stand out with a stunning personal portfolio. We build polished, memorable portfolio sites that help students, creators, and freelancers land opportunities.',
    offers: ['Student portfolios', 'Developer portfolios', 'Creator portfolios', 'Freelancer portfolios'],
    tech: ['HTML/CSS', 'React', 'Figma'],
    price: 'From ₹2,499', variant: 'portfolio',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-label">Services</div>
      <h2>What XenzoTech builds<br />for you</h2>
      <p className={styles.intro}>
        We offer six focused services designed to help businesses, startups, students, and creators establish a powerful online presence — from scratch or improving what you already have.
      </p>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div className={`${styles.card} ${styles[s.variant]}`} key={i}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.title}>
              {s.title}
              {s.badge && <span className={styles.coreBadge}>{s.badge}</span>}
            </div>
            <p className={styles.desc}>{s.desc}</p>
            <ul className={styles.offers}>
              {s.offers.map((o, j) => <li key={j}>{o}</li>)}
            </ul>
            <div className={styles.tech}>
              {s.tech.map((t, j) => <span className={styles.pill} key={j}>{t}</span>)}
            </div>
            <div className={styles.price}>{s.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
