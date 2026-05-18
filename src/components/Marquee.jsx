import styles from './Marquee.module.css';

const items = [
  'Web Design', 'Brand Identity', 'SEO Strategy', 'Landing Pages',
  'Social Media', 'WordPress', 'Digital Marketing', 'UI/UX Design',
  'Figma Design', 'Google Ads',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.marquee}>
        {doubled.map((item, i) => (
          <span key={i}>
            <span className={styles.item}>{item}</span>
            <span className={styles.dot}> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}
