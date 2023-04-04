import { RatingStars, RatingStarsProps } from "./RatingStars";

interface TitleProps {
  headline: string;
  locationLabel?: string;
}

export type TileTitleProps = TitleProps & RatingStarsProps;

export const TileTitle = ({
  headline,
  locationLabel,
  starCount,
}: TileTitleProps) => {
  return (
    <div className="tile__title">
      <RatingStars starCount={starCount} />
      <h2>{headline}</h2>
      {locationLabel && (
        <span className="tile__title__location">{locationLabel}</span>
      )}
    </div>
  );
};
