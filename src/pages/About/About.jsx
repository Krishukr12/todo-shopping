//?: All imports
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          Ambula is an App based on UHI(Unified Health Interface) popularly
          known as 'Ayushman Bharat Digital Mission' envisioned by our
          honourable Prime Minister which connects patients live with the
          unified health network across India for all healthcare needs. Ambula
          is committed to bridge all the communication gaps prevalent in
          healthcare delivery and Ambula will impart it's contribution to this
          Noble Vision. We are always available there for you if you find any
          discomfort of health. Your trust empowers us to serve you more.
        </p>
        <p className={styles.description}>
          At Ambula, we are deeply committed to the belief that every person
          deserves access to high-quality healthcare services. We believe in a
          democratic approach to health, and through the use of technology, we
          strive to make emergency and trauma care assistance more transparent,
          easily accessible, and user-friendly for all individuals in India. By
          bridging the communication gap in healthcare delivery, we hope to
          empower individuals to take control of their health and well-being.
        </p>
      </div>
      <img
        className={styles.image}
        src="https://ambula.app/assets/images/logo.png"
        alt="About Us"
      />
    </div>
  );
};

export default About;
