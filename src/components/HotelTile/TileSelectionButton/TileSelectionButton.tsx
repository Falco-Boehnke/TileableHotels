import { useEffect, useRef, useState } from "react";
import "./../../../App.css";
import styles from "./TileSelectionButton.module.css";
import { useDispatch } from "react-redux";
import { toggleSelection } from "./selectionSlice";
import { HotelSelection } from "../../../types/hotelType";
interface TileSelectionButtonProps {
  hotel: HotelSelection;
  price: string;
}

export const TileSelectionButton = ({
  hotel,
  price,
}: TileSelectionButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles["price-button-wrapper"]}>
      <div className={styles["tile__price_details"]}>{price}</div>
      <button
        onClick={() => {
          setIsSelected(!isSelected);
          dispatch(toggleSelection(hotel));
        }}
        className={`${styles["tile__selection-button"]}
          ${isSelected ? styles["tile__selection-button--selected"] : ""}`}
      >
        <div className={styles["tile__selection-button__icon-text"]}>
          <div
            className={`${styles["tile__selection-button__icon"]} ${
              isSelected ? styles["tile__selection-button__icon--selected"] : ""
            }`}
          />
          <div className={styles["tile__selection-button__label"]}>
            {isSelected ? "Ausgewählt" : "Auswählen"}
          </div>
        </div>
      </button>
    </div>
  );
};
