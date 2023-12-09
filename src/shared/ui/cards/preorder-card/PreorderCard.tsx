import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../../buttons/my-button";
import { useNavigate } from "react-router-dom";
import { CatalogModal } from "../../modals/catalog-modal";
import { initialProducts } from "../../../config/initialProducts";


interface IPreOrderCard {
  title: string;
  description: string;
  imageSrc: string;
  orderType?: string;
  showCatalog?: boolean;
  routes: string;
}

// FIXME для пуша

const PreorderCard: React.FC<IPreOrderCard> = ({
  title,
  imageSrc,
  routes,
  showCatalog,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => {
    setIsVisibleCatalogModal(true);
    document.body.style.overflow = "hidden";
  };
  const hideCatalogModal = () => {
    setIsVisibleCatalogModal(false);
    document.body.style.overflow = "auto";
  };

  const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
  const showOrderModal = () => {
    setIsVisibleOrderModal(true);
    document.body.style.overflow = "hidden";
  };
  const hideOrderModal = () => {
    setIsVisibleOrderModal(false);
    document.body.style.overflow = "auto";
  };

  const navigate = useNavigate()
  return (
    <>
      <div className={styles.card}>
      <p className={styles.card__title}>{title}</p>
        <div className={styles.card__images}>
          <div
            style={backgroundImageStyle}
            className={styles.card__image}
          ></div>
        </div>
        <div className={styles.card__buttons}>
          <MyButton title="Заказать" handleClick={() => showCatalogModal()} isSmall={true}/>
          <MyButton title="Подробнее" handleClick={() => navigate(routes)} isSmall={true}/>
        </div>
      </div>

      <CatalogModal
        title="Каталог"
        isShowModal={isVisibleCatalogModal}
        handleClose={hideCatalogModal}
        isDepthModal={false}
        handleShowOrderModal={showOrderModal}
        allGoods={initialProducts}
      />
    </>
  );
};

export { PreorderCard };
