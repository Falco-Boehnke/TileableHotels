import styles from "./TileDetailsModal.module.css";
interface TileDetailsProps {
  overline?: string;
  title?: string;
  isOpen?: boolean;
  setModalState: (isOpen: boolean) => void;
}

export const TileDetailsModal = ({
  overline,
  title,
  isOpen,
  setModalState,
}: TileDetailsProps) => {
  if (!isOpen) return <></>;
  return (
    isOpen && (
      <div
        className={styles[`hygiene-modal-wrapper`]}
        onClick={() => setModalState(false)}
      >
        <div
          className={styles[`hygiene-modal`]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={styles["hygiene-modal__close"]}
            onClick={() => setModalState(false)}
          >
            X
          </div>
          <hr style={{ width: "100%", borderTop: "1px solid #E0E0E0" }} />
          <div className={styles["modal-content"]}>
            {overline && <span>{overline}</span>}
            {title && <h5>{title}</h5>}
            <ul>
              <li>Hygiene- & Reinigungsmaßnahmen</li>
              <li>Kontaktloser Empfang der Gäste</li>
              <li>Abstand halten</li>
              <li>Lebensmittel & Getränkesicherheit</li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
