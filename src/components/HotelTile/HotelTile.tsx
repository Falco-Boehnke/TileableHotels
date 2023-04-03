import { TileDetails } from "./TileDetails/TileDetails";
import { TileTitle } from "./TileTitle/TitleTile";
import type { TileDetailsProps } from "./TileDetails/TileDetails";
import type { TileTitleProps } from "./TileTitle/TitleTile";

interface HotelTileProps {
  image?: {
    src: string;
    alt: string;
  };
  price: string;
  detailsUrl: string;
}

export const HotelTile = ({
  image,
  price,
  detailsUrl,
  tileTitle,
  tileDetails,
}: HotelTileProps & {
  tileTitle: TileTitleProps;
  tileDetails: TileDetailsProps;
}) => {
  return (
    <div className="tile">
      {image && (
        <div className="tile__image">
          <img src={image.src} alt={image.alt} />
        </div>
      )}
      <TileTitle {...tileTitle} />
      <TileDetails {...tileDetails} />

      <div className="tile__link-details">
        <a href={detailsUrl}>Details ansehen</a>
      </div>
      <div className="tile__price_details">{price}</div>

      <button className="tile__selection-button">
        <span className="tile__selection-button__icon" />
        Auswählen
      </button>
    </div>
  );
};
