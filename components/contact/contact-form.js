import { useEffect, useState } from 'react';

import Notification from '../ui/notification';

import classes from './contact-form.module.css';

async function sentContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

//
//
//
//
//

export default function ContactFormPage() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    let timer;
    if (requestStatus === 'success' || requestStatus === 'error') {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sentContactData({ email: enteredEmail, name: enteredName, message: enteredMessage });
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }

    setRequestStatus('success');
    setEnteredEmail('');
    setEnteredMessage('');
    setEnteredName('');
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you ?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.control}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
    </section>
  );
}
