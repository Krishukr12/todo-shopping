//? : All Imports
import { useState } from "react";
import styles from "./Contact.module.css";
import { validateEmail } from "../../utils/Validation";
import useCustomToast from "../../hooks/useCustomToast";
const ContactPage = () => {
  const [userDetails, setUserDetails] = useState({});
  const showToast = useCustomToast();
  //Event handlers : to handle submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check : if all fields are available or not
    if (!userDetails.email || !userDetails.name || !userDetails.message) {
      showToast("All fields are required", "error");
      return;
    }

    //Check  : if the email is correct or not
    if (!validateEmail(userDetails.email)) {
      showToast("Please enter a valid email", "error");
      return;
    }
    showToast(`${userDetails.name} , Thanks for feedback`, "success");
    setUserDetails({ name: "", email: "", message: "" });
  };

  // Event handlers  : to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact Us</h2>
      <form className={styles.contactForm}>
        <label className={styles.label}>
          Name:
          <input
            value={userDetails.name}
            name="name"
            onChange={handleChange}
            placeholder="Name"
            type="text"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            value={userDetails.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Message:
          <textarea
            value={userDetails.message}
            name="message"
            onChange={handleChange}
            placeholder="Write message here"
            className={styles.textarea}
          ></textarea>
        </label>
        <button
          onClick={() => handleSubmit(event)}
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
