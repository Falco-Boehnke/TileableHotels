import { useSelector } from "react-redux";
import IconHeartOutline from "./assets/icon-heart_outline.svg";
import styles from "./SelectionBasket.module.css";
import { SelectionBasketModal } from "./SelectionBasketModal";
import { useState } from "react";
import { HotelSelection } from "../../types/hotelType";

export const SelectionBasket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduxData: HotelSelection[] = useSelector(
    (state) => (state as any).btnSelection.selectedHotels
  );

  console.log({ reduxData });

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={styles["selection-basket__wrapper"]}
      >
        <img src={IconHeartOutline} alt="Hotel Selection Basket" />
        <div>{reduxData.length}</div>
      </div>
      <SelectionBasketModal
        isOpen={isModalOpen}
        setModalState={setIsModalOpen}
        selectedHotels={reduxData}
      />
    </>
  );
};
