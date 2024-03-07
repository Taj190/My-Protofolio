import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import './index.scss';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5esxu68', 'template_yw4q7pc', refForm.current, 'duuM7GQzzdE-DiUp7')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className='container contact-page ' id='contact-conatiner'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            "If you're looking for collaboration opportunities or have the perfect job opportunity for someone with my skills, don't hesitate to
            get in touch. I'm always open to new projects and opportunities to contribute my expertise."
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input placeholder='Name' type='text' name='name' required />
                </li>
                <li className='half'>
                  <input placeholder='Email' type='email' name='email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;
