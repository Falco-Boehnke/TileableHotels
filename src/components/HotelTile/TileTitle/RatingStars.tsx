export interface RatingStarsProps {
  starCount: number;
}
export const RatingStars = ({ starCount }: RatingStarsProps) => {
  if (starCount < 1) return <></>;

  const renderCount = new Array(starCount).fill(true);
  return (
    <div className="flex tile__stars">
      {renderCount.map(() => (
        <span className="tile__star" />
      ))}
    </div>
  );
};
