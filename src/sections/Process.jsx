import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target customers before touching a single pixel.' },
  { num: '02', title: 'Strategy', desc: 'We map out the scope, timeline, and approach — so there are no surprises along the way.' },
  { num: '03', title: 'Design', desc: 'We design in Figma first. You approve the look before we write a single line of code.' },
  { num: '04', title: 'Build & Review', desc: 'We develop and deliver. You review, share feedback, and we revise until you love it.' },
  { num: '05', title: 'Launch', desc: 'We go live with full handover, hosting setup, domain, and post-launch support included.' },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={`section-label ${styles.sectionLabel}`}>Process</div>
      <h2 className={styles.heading}>How we work with you</h2>
      <div className={styles.steps}>
        {steps.map((s, i) => (
          <div className={styles.step} key={i}>
            <div className={styles.stepNumber}>{s.num}</div>
            <div className={styles.stepTitle}>{s.title}</div>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
