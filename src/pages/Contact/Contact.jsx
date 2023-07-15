import styles from "./Contact.module.css";
const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact Us</h2>
      <form className={styles.contactForm}>
        <label className={styles.label}>
          Name:
          <input type="text" className={styles.input} />
        </label>
        <label className={styles.label}>
          Email:
          <input type="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          Message:
          <textarea className={styles.textarea}></textarea>
        </label>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;