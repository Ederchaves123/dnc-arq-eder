import './ContactForm.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext'
// COMPONENTS
import Button from '../Button/Button';

function ContactForm() {
  const appContext = useContext(AppContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitLoading(true)
      try {
        const response = await fetch ('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...formData, access_key: "c3860716-0371-42b9-94c9-b65d3fa2eed7"})
        })

        if (response.ok) {
          setFormSubmitted(true)
        } else {
          alert('Erro ao enviar!')
        }
      } catch (e) {
        alert('ERROR: ', e)
      } finally {
        setFormSubmitLoading (false)
      }
    } 
  };

  return (
    <div className="container">
      <div className="contact-form d-flex fd-column al-center">
        <h2>{appContext.languages[appContext.language].contact.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="d-flex form-group">
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder={appContext.languages[appContext.language].contact.pl1}
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder={appContext.languages[appContext.language].contact.pl2}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex form-group">
            <textarea
              className="form-input"
              id="message"
              name="message"
              placeholder={appContext.languages[appContext.language].contact.pl3}
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="al-center d-flex jc-end form-group">
            {formSubmitted && <p className='text-primary'>"{appContext.languages[appContext.language].contact.sucessMsg}"</p>}
            <Button type="submit" buttonStyle="secundary" disabled={!isFormValid || formSubmitLoading}>
            {appContext.languages[appContext.language].general.send}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
