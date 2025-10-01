import { contactsContents } from '../data';
import ShowMainComponents from '../ShowMainComponents';
import classes from '../styles/FeedbackSection.module.css';
import { Button } from '../button/button';
import { useState } from 'react';

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    hasErrors: true,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData((prevData) => ({
      name: event.target.id === 'name' ? event.target.value : prevData.name,
      email: event.target.id === 'email' ? event.target.value : prevData.email,
      subject: event.target.id === 'subject' ? event.target.value : prevData.subject,
      message: event.target.id === 'message' ? event.target.value : prevData.message,
      hasErrors: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Форма отправлена:', formData);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Введите ваше имя';
    }
    if (!formData.email.trim()) {
      errors.email = 'Введите ваш email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Некорректный формат email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Введите ваше сообщение';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <section className={classes.feedbackSection}>
      <>
        {contactsContents.map((item) => (
          <ShowMainComponents key={item.contentTitle}>
            <h3>{item.contentTitle}</h3>
            <p>{item.contentBody}</p>
          </ShowMainComponents>
        ))}
      </>

      <>
        <h3>Обратная связь</h3>
        <form className={classes.feedbackForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            style={{ border: formData.hasErrors.name ? '1px solid red' : null }}
          />
          {formErrors.name && <div className={classes.error}>{formErrors.name}</div>}

          <label htmlFor="email">Ваш email</label>
          <input
            type="email"
            id="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <div className={classes.error}>{formErrors.email}</div>}

          <label htmlFor="subject">Тема обращения</label>
          <select name="subject" id="subject" value={formData.subject} onChange={handleChange}>
            <option value="general">Общий вопрос</option>
            <option value="support">Техническая поддержка</option>
            <option value="feedback">Отзыв</option>
          </select>

          <label htmlFor="message">Ваше сообщение</label>
          <textarea
            id="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && <div className={classes.error}>{formErrors.message}</div>}

          <Button disabled={formData.hasErrors} isActive={!formData.hasErrors}>
            Отправить
          </Button>
        </form>
      </>
    </section>
  );
}
