import styles from './WhyUs.module.css';

const stats = [
  { num: '12', sym: '+', label: 'Projects delivered' },
  { num: '8', sym: '+', label: 'Happy clients' },
  { num: '100', sym: '%', label: 'On-time delivery' },
  { num: '5', sym: '★', label: 'Average rating' },
];

const pillars = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'We respect your time. Every project ships on the agreed deadline — no excuses, no delays, no surprises.' },
  { icon: '🎯', title: 'Results-Driven', desc: 'We design and build with one goal: outcomes for your business. Every decision is made with conversion and growth in mind.' },
  { icon: '🤝', title: 'Clear Communication', desc: 'No jargon, no ghosting. We keep you updated every step of the way in plain language — in Tamil or English.' },
  { icon: '🔄', title: 'Revisions Until Right', desc: "We iterate until you're completely happy. Your satisfaction is the only finish line that matters to us." },
];

export default function WhyUs() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-label">Why XenzoTech</div>
      <div className={styles.top}>
        <div>
          <h2>A studio that delivers<br />results, not just websites</h2>
          <p className={styles.desc}>
            We're not just another web agency. XenzoTech combines strategic thinking, modern design, and clean development to build digital products that actually move the needle for your business. Every project is treated as a long-term partnership.
          </p>
        </div>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div className={styles.wstat} key={i}>
              <div className={styles.wstatNum}>{s.num}<span className={styles.accent}>{s.sym}</span></div>
              <div className={styles.wstatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pillars}>
        {pillars.map((p, i) => (
          <div className={styles.pillarCard} key={i}>
            <div className={styles.pillarIcon}>{p.icon}</div>
            <div className={styles.pillarTitle}>{p.title}</div>
            <p className={styles.pillarDesc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
