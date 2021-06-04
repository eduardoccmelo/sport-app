export default function NewPlayerCard({ name }) {
  return (
    <div className="playersCard" key={name}>
      <span>{name}</span>
      <div>x</div>
    </div>
  );
}
