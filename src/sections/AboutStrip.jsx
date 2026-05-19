import styles from './AboutStrip.module.css';

const pills = ['Est. 2026', 'Tiruppur, India', 'English & Tamil', 'Remote-friendly'];

export default function AboutStrip() {
  return (
    <div className={styles.strip}>
      <h3 className={styles.heading}>A studio built<br />for real growth</h3>
      <div>
        <p className={styles.desc}>
          XenzoTech is a full-service digital agency based in Tiruppur, Tamil Nadu. We partner with small businesses, startups, and local brands to create powerful digital presences — from beautiful websites to full brand systems and marketing strategies that actually drive revenue.
        </p>
        <div className={styles.pills}>
          {pills.map((p, i) => (
            <span className={styles.pill} key={i}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
