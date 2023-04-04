import { useEffect, useRef, useState } from "react";
import "./../../../App.css";
import styles from "./TileSelectionButton.module.css";
import { useDispatch } from "react-redux";
import { addSelection } from "./selectionSlice";
interface TileSelectionButtonProps {
  dataKey: string;
  price: string;
}

export const TileSelectionButton = ({
  dataKey,
  price,
}: TileSelectionButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectionState = useRef(false);
  // const reduxData = useSelector((state) => (state as any).btnSelection.value);
  const dispatch = useDispatch();

  useEffect(() => {
    selectionState.current = !isSelected;
  });

  return (
    <div className={styles["price-button-wrapper"]}>
      <div className={styles["tile__price_details"]}>{price}</div>
      <button
        onClick={() => {
          setIsSelected(!isSelected);
          dispatch(addSelection({ holyshit: "This might work" }));
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
