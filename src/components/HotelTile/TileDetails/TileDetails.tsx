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
  return (
    <div className="tile__details">
      {!!capacityLabel && (
        <div className="tile__details__capacity">{capacityLabel}</div>
      )}
      <div className="flex tile__details__ratings">
        {hasHygieneCertificate && (
          <div className="flex flex--gap tile__details__hygiene">
            <div className="tile__details__hygiene-icon" />
            <span>Hygiene-Zertifikat</span>
          </div>
        )}
        {!!grade && (
          <div className="flex flex--gap tile__details__rating">
            <div className="tile__details__grade">{grade.points}</div>
            <span>{grade.label}</span>
          </div>
        )}
      </div>
    </div>
  );
};
