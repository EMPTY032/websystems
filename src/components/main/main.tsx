import clsx from "clsx";
import style from "./main.module.css";
import MySwiper from "../swiper/swiper";

const Main = () => {
  return (
    <main className={style.main}>
      <section className={style.homeSection} id="home-section">
        <div className="container">
          <div className={style.homeSection__container}>
            <h1 className={style.homeSection__title}>WebSystems</h1>
            <p className={style.textLarge}>
              Мы проектируем, разрабатываем и масштабируем ИТ-решения и
              омниканальные платформы с использованием передовых практик и
              технологий.
            </p>
            <a href="" className={clsx("button", style.homeSection__button)}>
              Контакты
            </a>
          </div>
        </div>
      </section>

      <section id="about-section">
        <div className="container">
          <div className={style.aboutSection__container}>
            <h2 className={style.sectionTitle}>О нас</h2>
            <div className={style.aboutSection__container_sub}>
              <div className="image__container">
                <img src="/justImage.png" alt="" />
              </div>
              <div className="about-section__text-container">
                <h3 className={style.aboutSection__title}>
                  Искусство разработки ПО
                </h3>
                <p className={clsx("text", style.aboutSection__text)}>
                  Мы используем комплексный подход. Умеем вникать в
                  бизнес-процессы, исследовать рынок, проводить тестирования,
                  делать правильные выводы и проектировать лучшие решения.
                </p>
                <ul className={style.aboutSection__list}>
                  <li className={style.aboutSection__item}>
                    Технический аудит IT-инфраструктуры
                  </li>
                  <li className={style.aboutSection__item}>
                    Проектирование информационных систем
                  </li>
                  <li className={style.aboutSection__item}>
                    Реализация проектов
                  </li>
                  <li className={style.aboutSection__item}>
                    Поддержка внедренных решений
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.servicesSection} id="services-section">
        <div className="container">
          <div className={style.servicesSection__container}>
            <div className={style.titleContainer}>
              <h2 className={style.sectionTitle}>Услуги</h2>
              <p className={clsx("text", style.textLarge)}>
                Разработываем, внедряем и сопровождаем программные обеспечения
                любого уровня сложности, информационные системы для бизнеса и
                государственных структур, порталы и мобильные приложения.
              </p>
            </div>

            <div className={style.service__container}>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Проектирование</h4>
                <p className={clsx("text", style.card__text)}>
                  Аналитика и проработка концепции. Прототипирование и
                  разработка подробной спецификации.
                </p>
              </div>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Интерфейсы и дизайн</h4>
                <p className={clsx("text", style.card__text)}>
                  Проектирование пользовательского интерфейса, разработка
                  дизайн-концепции и комплекта макетов.
                </p>
              </div>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Разработка ПО</h4>
                <p className={clsx("text", style.card__text)}>
                  Заказная разработка программного обеспечения по индивидуальным
                  требованиям и последующее внедрение.
                </p>
              </div>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Установка и запуск</h4>
                <p className={clsx("text", style.card__text)}>
                  Конфигурация серверного окружения в зависимости от текущих
                  потребностей проекта и планов его развития.
                </p>
              </div>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Тестирование и отладка</h4>
                <p className={clsx("text", style.card__text)}>
                  Выявление синтаксических и логических ошибок проекта и
                  последующее их устранение.
                </p>
              </div>
              <div className={style.card}>
                <span className={style.card__flaticon}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="#0d6efd"
                  >
                    <path d="M32 6a14 14 0 0 0-8 26v6h16v-6A14 14 0 0 0 32 6z" />
                    <path d="M24 46h16" />
                    <path d="M26 54h12" />
                  </svg>
                </span>
                <h4 className={style.card__title}>Поддержка и развитие</h4>
                <p className={clsx("text", style.card__text)}>
                  Круглосуточный мониторинг и поддержка проекта. Создание нового
                  функционала и масштабирование.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-section">
        <div className="container">
          <div className={style.titleContainer}>
            <h2 className={style.sectionTitle}>Наши работы</h2>
            <p className={clsx("text", style.textLarge)}>
              Более 20 выполненных проектов. Ниже мы собрали несколько наиболее
              интересных, которые мы можем показать.
            </p>
          </div>
          <MySwiper type="portfolio"></MySwiper>
        </div>
      </section>

      <section className={style.testimonialsSection} id="testimonials-section">
        <div className="container">
          <h2 className={style.sectionTitle}>Отзывы</h2>
          <MySwiper></MySwiper>
        </div>
      </section>

      <section id="contact-section">
        <div className="container">
          <h2 className={style.sectionTitle}>Контакты</h2>
          <ul className={style.contact__list}>
            <li className={style.contact__item}>
              <span className={style.contact__icon}></span>
              <a href="" className={style.contact__link}>
                ул. Ленина, 80в, г. Каспийск, РД.
              </a>
            </li>
            <li className={style.contact__item}>
              <span className={style.contact__icon}></span>
              <a href="" className={style.contact__link}>
                8 (963) 370-22-22
              </a>
            </li>
            <li className={style.contact__item}>
              <span className={style.contact__icon}></span>
              <a href="" className={style.contact__link}>
                info@websystems.me
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "60vh",
        }}
      >
        <a
          href="https://yandex.ru/maps/11008/kaspiysk/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: 0,
          }}
        >
          Каспийск
        </a>
        <a
          href="https://yandex.ru/maps/11008/kaspiysk/house/ulitsa_lenina_80v/YE4YcAVjTEABQFpofXVxcX1gZw==/?ll=47.623556%2C42.900133&utm_medium=mapframe&utm_source=maps&z=17"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Улица Ленина, 80В — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=47.623556%2C42.900133&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDcyMTc1NjA1EmTQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCa0LDRgdC_0LjQudGB0LosINGD0LvQuNGG0LAg0JvQtdC90LjQvdCwLCA4MNCSIgoNhX4-QhW9mStC&z=17"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </main>
  );
};

export default Main;
