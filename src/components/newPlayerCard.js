export default function NewPlayerCard({ name }) {
  return (
    <div className="playersCard" key={name}>
      <span className="playerCardName">{name}</span>
      <div className="playerCardDelete">x</div>
    </div>
  );
}
