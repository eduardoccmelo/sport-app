import { useState } from "react";

export default function NewPlayer() {
  const [newPlayer, setNewPlayer] = useState();

  function handleAddPlayerClick(e) {
    e.preventDefault();
    let inputValue = e.target.addPlayer.value;
    setNewPlayer(inputValue);
    e.target.addPlayer.value = "";
  }

  console.log(newPlayer);

  return (
    <form className="newPlayer" onSubmit={handleAddPlayerClick}>
      <label>
        <input
          type="text"
          name="addPlayer"
          id="addPlayer"
          placeholder="New Player"
        ></input>
      </label>
      <button className="newPlayerButton" type="submit">
        Add
      </button>
    </form>
  );
}
