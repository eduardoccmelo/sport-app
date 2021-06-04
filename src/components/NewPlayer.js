export default function NewPlayer() {
  return (
    <div className="newPlayer">
      <label>
        <input type="text" placeholder="New Player"></input>
      </label>
      <button className="newPlayerButton" type="button">
        Add
      </button>
    </div>
  );
}
