import React from 'react';
import SampleContacts from '../sample/SampleContacts';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <section className="contacts contacts-page">
      <Helmet>
        <title>Шины и диски - купить в интернет магазине "Вам колёса"</title>
        <meta
          name="description"
          content="В интернет магазине 'Вам колёса' представлен огромный ассортимент шин и дисков. Техобслуживание и ремонт от профессиональных мастеров с гарантией."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <div className="fon-bg"></div>
      <div className="container">
        <SampleContacts />
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaffa8b388ca4fe230999520a5bb493bd34abaa392bffbf0c7b98d71e0f2d11f1&amp;source=constructor"
        width="100%"
        height="600"
        title="Мы на карте"
        className="map"
        id="map"></iframe>
    </section>
  );
};

export default ContactsPage;
