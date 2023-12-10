import React from "react";
import styles from "./styles.module.scss";
import { HeaderPages } from "../../shared/ui/shared/header-pages";
import firstImage from "../../shared/image/aboutPage/first.png"
import secondImage from "../../shared/image/aboutPage/second.png"
import thirdImage from "../../shared/image/aboutPage/third.png"
import upIcon from "../../shared/icons/stickIcon/upIcon.svg"
import { ScrollToTopButton } from "../../shared/ui/buttons/scroll-top-button";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.about}>
      <HeaderPages
        title="О компании"
        subtitle="Что такое озонированная вода?"
      />
      <div className={styles.about__history}>
        <h3 className={styles.about__title}>История</h3>
        <p className={styles.about__text}>
          ТОО «Комета» является первым казахстанским производителем экологически
          чистой озонированной питьевой воды. Изучив рынок питьевой воды и спрос
          на нее в республике, наша компания начала свою деятельность на
          казахстанском рынке и наладила производство экологически чистой
          питьевой воды «Calipso» с апреля 1997 года.
        </p>
        <div className={styles.about__grid}>
          <img className={styles.about__image} src={firstImage} alt=""></img>
          <img className={styles.about__image} src={secondImage} alt=""></img>
          <img className={styles.about__image} src={thirdImage} alt=""></img>
        </div>
      </div>
      <div className={styles.about__product}>
        <h3 className={styles.about__title}>Наш продукт</h3>
        <p className={styles.about__text}>
          Вода «Calipso» — вода натурального происхождения из артезианской
          скважины №5036, глубиной 500 м проходит цикл многоступенчатой очистки
          (цеолитовый фильтр, полипропиленовый фильтр, система обратного осмоса,
          озонирование) с применением высокоэффективной технологии и
          оборудования, что позволяет получить воду высочайшей очистки с
          сохранением природных вкусовых качеств. Используемая технология
          позволяет решить проблему питьевой воды грамотно, надежно. В начале
          2007 года построены новые производственные помещения, проведено полное
          техническое перевооружение.
        </p>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export { AboutPage };
