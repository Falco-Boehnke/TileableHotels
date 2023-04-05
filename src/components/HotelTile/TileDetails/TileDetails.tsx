import { useState } from "react";
import { TileDetailsModal } from "./TileDetailsModal";

export interface TileDetailsProps {
  capacityLabel?: string;
  hasHygieneCertificate?: boolean;
  grade?: {
    points: number;
    label: string;
  };
}

export const TileDetails = ({
  capacityLabel,
  hasHygieneCertificate,
  grade,
}: TileDetailsProps) => {
  const [isHygieneModalOpen, setIsHygieneModalOpen] = useState(false);

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
          {!!grade && (
            <div className="flex flex--gap tile__details__rating">
              <div className="tile__details__grade">{grade.points}</div>
              <span>{grade.label}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
