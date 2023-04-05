import { HotelSelection } from "../../types/hotelType";
import { RatingStars } from "../HotelTile/TileTitle/RatingStars";
import styles from "./SelectionBasket.module.css";

interface SelectionBasketModalProps {
  isOpen: boolean;
  setModalState: (isOpen: boolean) => void;
  selectedHotels: HotelSelection[];
}

export const SelectionBasketModal = ({
  isOpen,
  setModalState,
  selectedHotels,
}: SelectionBasketModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className={styles[`selection-basket__modal-wrapper`]}
      onClick={() => setModalState(false)}
    >
      <div
        className={styles[`selection-basket__modal`]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={styles["selection-basket__modal__close"]}
          onClick={() => setModalState(false)}
        >
          X
        </div>
        <hr style={{ width: "100%", borderTop: "1px solid #E0E0E0" }} />
        <div className={styles["modal-content"]}>
          {selectedHotels.map((hotel) => {
            return (
              <a href={hotel.detailsUrl}>
                <div className={styles["modal-content__hotel-shorts"]}>
                  <RatingStars starCount={hotel.tileTitle.starCount || 0} />
                  <h4>{hotel.tileTitle.headline}</h4>
                  <span className={styles["modal-content__location"]}>
                    {hotel.tileTitle.locationLabel}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
