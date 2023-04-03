import { useEffect, useRef, useState } from "react";
import "./../../../App.css";
import styles from "./TileSelectionButton.module.css";
interface TileSelectionButtonProps {
  price: String;
}

export const TileSelectionButton = ({ price }: TileSelectionButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectionState = useRef(false);

  useEffect(() => {
    selectionState.current = !isSelected;
  });

  return (
    <div className={styles["price-button-wrapper"]}>
      <div className={styles["tile__price_details"]}>{price}</div>
      <button
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        className={`${styles["tile__selection-button"]}
          ${isSelected ? styles["tile__selection-button--selected"] : ""}`}
      >
        <span
          className={isSelected ? styles["tile__selection-button__icon"] : ""}
        />
        <span className={styles["tile__selection-button__label"]}>
          {isSelected ? "Ausgewählt" : "Auswählen"}
        </span>
      </button>
    </div>
  );
};
