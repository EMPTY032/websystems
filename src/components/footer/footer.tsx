import { useEffect, useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [year, setYear] = useState("2025");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setYear(now.getFullYear().toString());
    };

    updateTime();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__about}>
            <h4 className={styles.footer__title}>О нас</h4>
            <p className={styles.footer__text}>
              Компания «WebSystems» оказывает услуги по проектированию,
              разработке и обслуживанию it-продуктов, включая информационные
              системы, сайты и мобильные приложения.
            </p>
          </div>
          <nav className={styles.footer__speedLink}>
            <h4 className={styles.footer__title}>Быстрые ссылки</h4>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <a href="" className={styles.footer__link}>
                  О нас
                </a>
              </li>
              <li className={styles.footer__item}>
                <a href="" className={styles.footer__link}>
                  Услуги
                </a>
              </li>
              <li className={styles.footer__item}>
                <a href="" className={styles.footer__link}>
                  Отзывы
                </a>
              </li>
              <li className={styles.footer__item}>
                <a href="" className={styles.footer__link}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.footer__social}>
            <h4 className={styles.footer__title}>Соц. сети</h4>
            <ul className={styles.footer__socialList}>
              <li className={styles.footer__socialItem}>
                <a href="" className={styles.footer__socialLink}></a>
              </li>
              <li className={styles.footer__socialItem}>
                <a href="" className={styles.footer__socialLink}></a>
              </li>
              <li className={styles.footer__socialItem}>
                <a href="" className={styles.footer__socialLink}></a>
              </li>
              <li className={styles.footer__socialItem}>
                <a href="" className={styles.footer__socialLink}></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright ©{year} | Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
