import React from 'react';
import SampleAbout from '../sample/SampleAbout';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <section className="about about-page">
      <Helmet>
        <title>Шины и диски - купить в интернет магазине "Вам колёса"</title>
        <meta
          name="description"
          content="В интернет магазине 'Вам колёса' представлен огромный ассортимент шин и дисков. Техобслуживание и ремонт от профессиональных мастеров с гарантией."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <div className="container">
        <div className="about__inner about-page__inner">
          <SampleAbout />
        </div>
        <div className="about__bottom">
          <p className="about__description">
            Мы гордимся высоким уровнем обслуживания и профессионализмом наших специалистов, которые
            имеют большой опыт работы с автомобилями и постоянно повышают свою квалификацию. Мы
            используем только самое современное оборудование и материалы для выполнения всех видов
            работ, чтобы гарантировать нашим клиентам высокое качество и надежность.
          </p>
          <p className="about__description">
            Мы гарантируем, что все работы будут выполнены в соответствии с высокими стандартами
            качества, и наши клиенты будут полностью удовлетворены результатом. Мы стремимся
            установить долгосрочные отношения с нашими клиентами и стать надежным партнером для всех
            владельцев автомобилей в нашем регионе.Мы ценим своих клиентов и всегда готовы
            предоставить высококачественный сервис по разумной цене. Обращайтесь к нам для любых
            потребностей в ремонте и обслуживании вашего автомобиля.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
