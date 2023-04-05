import { useState } from "react";
import { TileDetailsModal } from "./TileDetailsModal";

export interface TileDetailsProps {
  capacityLabel?: string;
  hasHygieneCertificate?: boolean;
  ratings: Array<number>;
  grade?: {
    points: number;
    label: string;
  };
}

export const TileDetails = ({
  capacityLabel,
  hasHygieneCertificate,
  grade,
  // eslint-disable-next-line no-empty-pattern
  ratings,
}: TileDetailsProps) => {
  const [isHygieneModalOpen, setIsHygieneModalOpen] = useState(false);

  const ratingAvg =
    ratings.reduce((partialSum, a) => partialSum + a, 0) / ratings.length;
  const shortenedRatingAvg = Math.round(ratingAvg * 10) / 10;
  const computedRatingLabel = getLabelForRating(shortenedRatingAvg);

  return (
    <>
      {isHygieneModalOpen && (
        <TileDetailsModal
          overline="Hygiene-Zertifikat"
          title="Selbst Zertifiziertes Hotel"
          isOpen={isHygieneModalOpen}
          setModalState={setIsHygieneModalOpen}
        />
      )}

      <div className="tile__details">
        {!!capacityLabel && (
          <div className="tile__details__capacity">{capacityLabel}</div>
        )}
        <div className="flex tile__details__ratings">
          {hasHygieneCertificate && (
            <>
              <div
                className="flex flex--gap tile__details__hygiene"
                onClick={() => setIsHygieneModalOpen(true)}
              >
                <div className="tile__details__hygiene-icon" />
                <span>Hygiene-Zertifikat</span>
              </div>
            </>
          )}
          {(!grade || ratings.length > 0) && (
            <div className="flex flex--gap tile__details__rating">
              <div className="tile__details__grade">{shortenedRatingAvg}</div>
              <span>{computedRatingLabel}</span>
            </div>
          )}
          {!!grade && ratings.length < 1 && (
            <div className="flex flex--gap tile__details__rating">
              <div className="tile__details__grade">{grade?.points}</div>
              <span>{grade.label}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
function getLabelForRating(shortenedRatingAvg: number) {
  if (shortenedRatingAvg < 6) return "Ansprechend";
  else if (shortenedRatingAvg > 6 && shortenedRatingAvg < 8) return "Gut";
  else return "Sehr gut";
}

