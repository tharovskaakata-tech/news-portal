import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-about footer-column">
          <a href="/" className="logo">
            <img src="/images/13.png" alt="N NEWS Logo" className="logo-image" />
          </a>
          <p>Профессиональные новостные услуги.
            Актуальная информация со всего мира.</p>
        </div>

        <div className="footer-column">
          <h5>Компания</h5>
          <ul>
            <li><a href="/about">О нас</a></li>
            <li><a href="#portfolio">Портфолио</a></li>
            <li><a href="#documents">Документы</a></li>
            <li><a href="#career">Карьера</a></li>
            <li><a href="#blog">Блог</a></li>
          </ul>
        </div>

        <div className="footer-contacts footer-column">
          <h5>Контакты</h5>
          <div className="contact-item">
            <strong>Телефон</strong>
            <a href="tel:+74951234567">+7 (918) 123-45-67</a>
          </div>
          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:info@ninews.ru">info@ninews.ru</a>
          </div>
          <div className="contact-item">
            <strong>Адрес</strong>
            г. Ростов-на-Дону, ул. Масима Горького 88 
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© NI NEWS 2026. Все права защищены.</div>
        <div><a href="#privacy">Политика конфиденциальности</a></div>
      </div>
    </footer>
  );
}