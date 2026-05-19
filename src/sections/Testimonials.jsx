import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: '"XenzoTech built our restaurant website in just 5 days. It looks amazing on mobile and we\'re already getting calls through the contact form. Very happy!"',
    initials: 'RK', name: 'Ravi Kumar', role: 'Owner, Sri Murugan Mess', avatar: 'a1',
  },
  {
    quote: '"Professional, on time, and very easy to communicate with. They understood exactly what our clinic needed. Would highly recommend to any business."',
    initials: 'PS', name: 'Dr. Priya S.', role: 'Dentist, Tiruppur', avatar: 'a2',
  },
  {
    quote: '"Our landing page is beautiful and customers now contact us directly on WhatsApp. Best investment we made for our business this year. Thank you XenzoTech!"',
    initials: 'MK', name: 'Murugan K.', role: 'Owner, Kumaran Textiles', avatar: 'a3',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="section-label">Testimonials</div>
      <h2>What our clients say</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={`${styles.avatar} ${styles[t.avatar]}`}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
