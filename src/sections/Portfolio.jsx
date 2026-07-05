import styles from './Portfolio.module.css';

const projects = [
  {
    href: 'https://restaurant-psi-bay.vercel.app/',
    thumb: '/Resturant Laptop.png',
    label: 'Restaurant · Concept',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
    name: 'Spice Garden Restaurant',
    desc: 'Modern restaurant website with online ordering, table reservations, and interactive menu showcase.',
  },

  {
    href: 'project-dental.html',
    thumb: '/Dentist Laptop.png',
    label: 'Healthcare · Concept',
    tags: ['Booking System', 'Patient Portal', 'HIPAA'],
    name: 'SmileCare Dental Clinic',
    desc: 'Professional healthcare website with appointment booking, doctor profiles, and patient portal.',
  },

  {
    href: 'project-fitness.html',
    thumb: '/Gym Laptop.png',
    label: 'Fitness · Concept',
    tags: ['Membership', 'Booking', 'Mobile App'],
    name: 'FitZone Gym & Fitness',
    desc: 'Dynamic fitness website with membership portal, class booking, and progress tracking.',
  },

  {
    href: 'project-portfolio.html',
    thumb: '/Portfolio.png',
    label: 'Portfolio · Concept',
    tags: ['HTML/CSS', 'GSAP', 'Responsive'],
    name: 'Creative Portfolio Website',
    desc: 'Stunning portfolio showcase with smooth animations, project gallery, and case studies.',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={`section-label ${styles.sectionLabel}`}>
            Concept Projects
          </div>

          <h2 className={styles.heading}>
            Selected Concept Projects
          </h2>

          <p className={styles.subtitle}>
            Premium showcase projects crafted to demonstrate our
            design systems, frontend engineering, and digital
            experience capabilities.
          </p>
        </div>

        <a href="#contact" className={styles.btnOutline}>
          Start a project →
        </a>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <a href={p.href} className={styles.card} key={i}>

            <div className={styles.thumb}>

              <img
                src={p.thumb}
                alt={p.name}
                className={styles.projectImage}
              />

              <span className={styles.thumbLabel}>
                {p.label}
              </span>

              <span
                className={`${styles.thumbBadge} ${styles.concept}`}
              >
                Concept Project
              </span>

            </div>

            <div className={styles.info}>

              <div className={styles.tags}>
                {p.tags.map((t, j) => (
                  <span className={styles.tag} key={j}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.name}>
                {p.name}
              </div>

              <p className={styles.desc}>
                {p.desc}
              </p>

            </div>

          </a>
        ))}
      </div>
    </section>
  );
}