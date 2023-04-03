import { TileDetails } from "./TileDetails/TileDetails";
import { TileTitle } from "./TileTitle/TitleTile";
import type { TileDetailsProps } from "./TileDetails/TileDetails";
import type { TileTitleProps } from "./TileTitle/TitleTile";
import { TileSelectionButton } from "./TileSelectionButton/TileSelectionButton";

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
      <div className="tile-data-wrapper">
        <TileTitle {...tileTitle} />
        <TileDetails {...tileDetails} />
        <div className="tile__link-details">
          <a href={detailsUrl}>Details ansehen</a>
        </div>
      </div>
      <TileSelectionButton price={price} />
    </div>
  );
};
