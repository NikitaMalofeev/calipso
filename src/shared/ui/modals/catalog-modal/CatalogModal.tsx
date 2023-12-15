import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { CatalogButtonMenu } from "../../../../features/catalog-button-menu";
import { ProductCard } from "../../cards/product-card";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../features/cart-slice/cartSlice";
import { IGood } from "../../../types/cartTypes";

interface IModal {
  allGoods: Record<number, IGood>;
  showPopUp: () => void;
}

const CatalogModal: React.FC<IModal> = ({ allGoods, showPopUp }) => {
  const [catalogContent, setCatalogContent] = useState("Все");

  //FIXME убрать any типизацию
  const { cart } = useSelector((state: any) => state.allCart);
  const dispatch = useDispatch();

  

  const handleFilteredCatalogContent = (selectedChapter: string) => {
    setCatalogContent(selectedChapter);
  };

  const selectedCatalogChapter = (chapter: string) => {
    switch (chapter) {
      case "Все":
        return <AllChapter />;
      case "Вода":
        return <AllChapter />;
      case "Collaps'ик":
        return <AllChapter />;
      case "Оборудование":
        return <AllChapter />;
      case "Вода для Животных":
        return <AllChapter />;
      case "Co-Packing":
        return <AllChapter />;
    }
  };

  const AllChapter = () => {
    return (
      <div className={styles.modal__menu}>
        {Object.values(allGoods).map((item: IGood, index: number) => (
          <ProductCard
            productId={item.id}
            quantity={cart[item.id] ?? 0}
            key={index}
            productImage={item.image}
            price={item.price}
            name={item.name}
            size={item.size}
            handleAdd={() => dispatch(addToCart(item.id))}
            handleRemove={() => dispatch(removeFromCart(item.id))}
            handleShowPopup={() => showPopUp()}
          />
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.modal__container}>
        <CatalogButtonMenu onValueChange={handleFilteredCatalogContent} />
        <div className={styles.modal__menu}>
          <div>{selectedCatalogChapter(catalogContent)}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { CatalogModal };
