import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import style from "./swiper.module.css";
import "swiper/css";
import "swiper/css/pagination";

type swiperType = "testimonial" | "portfolio";

const slides = [
  {
    text: "“АИС «МФЦ Логистика» настолько интуитивно понятна, а «порог входа» в нее настолько низок, что сотрудники быстро оценили новые возможности, которые существенно упростили работу. Например, SMS-информирование заявителей. Это и экономически целесообразно для МФЦ.”",
    person: {
      img: "/person_1.jpg",
      name: "Арсланалиев Магомедэмин Исамагомедович",
      post: "Директор ГАУ РД «МФЦ в РД»",
    },
  },
  {
    text: "“АИС «МФЦ Логистика» позволила увеличить качество и гибкость настройки услуг. У нас появился курьерский модуль, с помощью которого можно оперативно распечатать всевозможные тонко настраиваемые описи документов в разных форматах. Благодаря АИС «МФЦ Логистика» были сокращены сроки оказания услуг.”",
    person: {
      img: "/person_2.jpg",
      name: "Мужаидов Амир Камаладинович",
      post: "Заместитель директора ГАУ РД «МФЦ в РД»",
    },
  },
  {
    text: "“В первую очередь, после внедрения данного решения нам удалось перейти на полный электронный обмен с рядом федеральных ведомств, с которыми ранее мы работали только на бумаге. Это позволило нам сэкономить время и снизить финансовые затраты на транспорт и бумагу.”",
    person: {
      img: "/person_3.jpg",
      name: "Бадрудинов Бадрудин Курбанович",
      post: "Начальник отдела информационных технологий",
    },
  },
];

const slidesPortfolio = [
  {
    img: "/projectImg1.png",
    name: "АИС «МФЦ Логистика»",
    description:
      "Автоматизированная информационная система «МФЦ Логистика» предназначена для автоматизации процесса предоставления государственных и муниципальных услуг в МФЦ.",
  },
  {
    img: "/projectImg2.png",
    name: "АИС «Субсидии»",
    description:
      "АИС «Субсидии» это программный комплекс для ведения баз данных, содержащих сведения о гражданах, имеющих право на меры социальной поддержки в виде субсидий.",
  },
  {
    img: "/projectImg3.png",
    name: "АИС «СЭД»",
    description:
      "АИС «СЭД» это автоматизированная информационная система юридически значимого электронного документооборота и обмена деловой корреспонденцией.",
  },
  {
    img: "/projectImg4.png",
    name: "АИС «Marwa Tour»",
    description:
      "АИС «Marwa Tour» это автоматизированная информационная система, которая играет ключевую роль в контактах между клиентами и компанией.",
  },
  {
    img: "/projectImg5.png",
    name: "АИС «Центр обслуживания»",
    description:
      "Обслуживание информационных систем Заказчика обеспечивает полноценное и эффективное использование ресурсов для сложных и динамично развивающихся информационных систем.",
  },
];

type MySwiperType = {
  type?: swiperType;
};

export default function MySwiper({ type = "testimonial" }: MySwiperType) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 15000 }}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      grabCursor
      loop={true}
    >
      {type === "testimonial" &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={style.card}>
              <p className={style.card__text}>{slide.text}</p>
              <div className={style.card__person}>
                <div className={style.card__personImg}>
                  <img src={slide.person.img} />
                </div>
                <div className={style.card__textContent}>
                  <div className={style.card__name}>{slide.person.name}</div>
                  <div className={style.card__post}>{slide.person.post}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      {type === "portfolio" &&
        slidesPortfolio.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={style.portfolioCard}>
              <div className={style.portfolioCard__img}>
                <img src={slide.img} />
              </div>

              <div className={style.portfolioCard__textContainer}>
                <h3 className={style.portfolioCard__title}>{slide.name}</h3>
                <p className={style.portfolioCard__description}>
                  {slide.description}
                </p>
                <a href="" className="button">
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
