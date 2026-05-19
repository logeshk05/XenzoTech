import styles from './Pricing.module.css';

const plans = [
  {
    badge: 'Starter', badgeClass: 'basic',
    name: 'Essential', price: '₹4,999', per: '/ project',
    time: 'Delivered in 4–5 days',
    features: ['1-page landing site', 'Mobile responsive', 'Contact form', '2 free revisions', 'Source files included'],
    btnClass: 'light',
  },
  {
    badge: 'Most popular', badgeClass: 'standard',
    name: 'Growth', price: '₹9,999', per: '/ project',
    time: 'Delivered in 6–8 days',
    features: ['3–5 page website', 'Mobile responsive', 'Contact form + WhatsApp', 'Basic SEO setup', '3 free revisions', '1 month support'],
    btnClass: 'bright', featured: true,
  },
  {
    badge: 'Premium', badgeClass: 'premium',
    name: 'Full Studio', price: '₹15,999', per: '/ project',
    time: 'Delivered in 12–16 days',
    features: ['WordPress full site', 'Logo & brand identity', 'Full SEO optimization', 'Google Analytics setup', 'Unlimited revisions', '3 months support'],
    btnClass: 'violetBtn',
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-label">Pricing</div>
      <h2>Transparent, no-surprise pricing</h2>
      <div className={styles.grid}>
        {plans.map((p, i) => (
          <div className={`${styles.card} ${p.featured ? styles.featured : ''}`} key={i}>
            <span className={`${styles.badge} ${styles[p.badgeClass]}`}>{p.badge}</span>
            <div className={styles.planName}>{p.name}</div>
            <div className={styles.planPrice}>{p.price} <span>{p.per}</span></div>
            <div className={`${styles.planTime} ${p.featured ? styles.featuredTime : ''}`}>{p.time}</div>
            <ul className={`${styles.features} ${p.featured ? styles.featuredFeatures : ''}`}>
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <a href="#contact" className={`${styles.btn} ${styles[p.btnClass]}`}>Get started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
