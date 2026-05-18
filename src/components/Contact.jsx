import { useState, useRef } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@XenzoTech.in' },
  { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210' },
  { icon: '📍', label: 'Location', value: 'Tiruppur, Tamil Nadu, India' },
  { icon: '🌐', label: 'Website', value: 'XenzoTech.in' },
];

const serviceOptions = [
  'Web Design & Development',
  'UI/UX Design',
  'App Development',
  'Landing Page Development',
  'Responsive Website Optimization',
  'Portfolio Website Creation',
  "Not sure yet — let's talk",
];

export default function Contact() {
  const [btnText, setBtnText] = useState('Send message →');
  const [btnSent, setBtnSent] = useState(false);
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setBtnText('Message sent ✓');
    setBtnSent(true);
    setTimeout(() => {
      setBtnText('Send message →');
      setBtnSent(false);
      formRef.current?.reset();
    }, 3000);
  }

  return (
    <div className={styles.section} id="contact">
      <div className={styles.left}>
        <div className="section-label">Contact</div>
        <h2>Ready to grow<br />your business?</h2>
        <p className={styles.subtitle}>
          Tell us about your project and we'll get back to you within 24 hours with a plan and a quote.
        </p>
        {contactInfo.map((c, i) => (
          <div className={styles.detail} key={i}>
            <div className={styles.icon}>{c.icon}</div>
            <div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.value}>{c.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.group}>
            <label className={styles.formLabel}>Your name</label>
            <input className={styles.input} type="text" placeholder="e.g. Ravi Kumar" required />
          </div>
          <div className={styles.group}>
            <label className={styles.formLabel}>Email address</label>
            <input className={styles.input} type="email" placeholder="ravi@example.com" required />
          </div>
          <div className={styles.group}>
            <label className={styles.formLabel}>Service needed</label>
            <select className={styles.input}>
              {serviceOptions.map((o, i) => <option key={i}>{o}</option>)}
            </select>
          </div>
          <div className={styles.group}>
            <label className={styles.formLabel}>About your project</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="What is your business? What are your goals? Any deadlines?"
            />
          </div>
          <button
            type="submit"
            className={styles.submit}
            id="submit-btn"
            style={btnSent ? { background: '#00c98d' } : {}}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
