import classes from './contact-form.module.css';

export default function ContactFormPage() {
  return (
    <section className={classes.contact}>
      <h1>How can i help you ?</h1>

      <form className={classes.form} action="">
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows="5"></textarea>
        </div>

        <div className={classes.control}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
