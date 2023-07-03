import React from 'react';
import Advantage from '../components/Advantage';
import CarBrand from '../components/CarBrand';
import FewContacts from '../components/MiniContacts';
import Hero from '../components/Hero';
import LittleAbout from '../components/MiniAbout';
import Services from '../components/Services';
import SmallInformation from '../components/SmallInformation';
import Request from '../components/Request';
import { Helmet } from 'react-helmet';

const Home = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
      <Helmet>
        <title>Шины и диски - купить в интернет магазине "Вам колёса"</title>
        <meta
          name="description"
          content="В интернет магазине 'Вам колёса' представлен огромный ассортимент шин и дисков. Техобслуживание и ремонт от профессиональных мастеров с гарантией."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <Hero />
      <SmallInformation />
      <CarBrand />
      <Services />
      <Advantage />
      <LittleAbout />
      <Request />
      <FewContacts />
    </>
  );
};

export default Home;
