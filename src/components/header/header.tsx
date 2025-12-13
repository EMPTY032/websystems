import { useEffect, useState } from "react";
import style from "./header.module.css";
import clsx from "clsx";

const sections = [
  "home-section",
  "about-section",
  "services-section",
  "portfolio-section",
  "testimonials-section",
  "contact-section",
] as const;

const textMap: Record<string, string> = {
  "home-section": "Главная",
  "about-section": "О нас",
  "services-section": "Услуги",
  "portfolio-section": "Наши работы",
  "testimonials-section": "Отзывы",
  "contact-section": "Контакты",
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={clsx(style.header, scrolled && style.scrolled)}>
      <div className="container">
        <div className={style.header__container}>
          <div className={clsx(style.logo, scrolled && style.scrolledLogo)}>
            WebSystems
          </div>

          {/* Гамбургер */}
          <div className={style.hamburger} onClick={toggleMenu}>
            <span className={clsx(style.bar, menuOpen && style.bar1)}></span>
            <span className={clsx(style.bar, menuOpen && style.bar2)}></span>
            <span className={clsx(style.bar, menuOpen && style.bar3)}></span>
          </div>

          {/* Основное меню */}
          <nav className={style.navbar}>
            <ul className={style.navbar__list}>
              {sections.map((id) => (
                <li key={id} className={style.navbar__item}>
                  <a
                    href={`#${id}`}
                    className={clsx(
                      style.navbar__link,
                      activeSection === id && style.active
                    )}
                  >
                    {textMap[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Мобильное меню */}
          {menuOpen && (
            <div className={style.overlay} onClick={() => setMenuOpen(false)} />
          )}
          <div className={clsx(style.mobileMenu, menuOpen && style.open)}>
            <ul className={style.mobileMenu__list}>
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={clsx(
                      style.mobileMenu__link,
                      activeSection === id && style.active
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {textMap[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
