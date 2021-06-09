export default function NewPlayerCard({ name, onClickToRemove }) {
  return (
    <div className="playersCard" key={name}>
      <span className="playerCardName">{name.toUpperCase()}</span>
      <div className="playerCardDelete" onClick={() => onClickToRemove(name)}>
        x
      </div>
    </div>
  );
}
