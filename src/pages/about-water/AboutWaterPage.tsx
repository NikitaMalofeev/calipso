import React from "react";
import styles from "./styles.module.scss";
import { HeaderPages } from "../../shared/ui/shared/header-pages";
import { ScrollToTopButton } from "../../shared/ui/buttons/scroll-top-button";
import firstImage from "../../shared/image/AboutWaterPage/first.png"

const AboutWaterPage: React.FC = () => {
  return (
    <div className={styles.about}>
      <HeaderPages title="О воде" subtitle="Что такое озонированная вода?" />
      <p className={styles.about__paragraph}>
        Вода декларирована в ТОО “ҒЗО «Алматы-Стандарт» при Академии питания
        Республики Казахстан. Качество поставляемой воды «Calipso» соответствует
        требованиям Технического регламента Таможенного Союза, Единым
        санитарно-эпидемиологическим нормам Таможенного Союза (Свидетельство о
        государственной регистрации № KZ.16.01.96.006.Е.003134.02.11 от
        23.02.2011 г.), требованиям отраслевого стандарта СТ
        27083-1910-ТОО-02-2011.
      </p>
      <p className={styles.about__paragraph}>
        Однако реальной альтернативой применению хлора может служить
        озонирование. Микрофолокуляция озоном широко практикуется в Европе, в
        США и др. странах. Хлорирование воды там запрещено, так как соединения
        хлора вредны для здоровья людей.
      </p>
      <img src={firstImage} alt="" className={styles.about__image}/>
      <p className={styles.about__paragraph}>
        Научно доказано, что окислительная активность и стерилизующая сила озона
        намного эффективнее для удаления из воды токсичных соединений по
        сравнению с химическими препаратами (в 3,6 раза эффективнее хлора,
        который позволяет уничтожить максимум до 50% вредных микроорганизмов), в
        отличие от хлора оказывает благотворное влияние на организм человека.
      </p>
      <p className={styles.about__paragraph}>
        Во многоступенчатой системе очистки Компания «Комета» использует метод
        озонирования, что позволяет добиваться полной бактериальной очистки без
        применения хлора.Озон, озонированная жидкость играет биологическое и
        физиологическое действие на развитие и жизнедеятельность всего живого,
        имеющих способность активизировать и стимулировать биологические клетки
        и их системы, а также ингибировать вирусы, бактерии, споровые
        образования с задержанием их течения физиологических и физико-химических
        процессов с подавлением их инфекционной активности.
      </p>
      <ScrollToTopButton />
    </div>
  );
};

export { AboutWaterPage };
