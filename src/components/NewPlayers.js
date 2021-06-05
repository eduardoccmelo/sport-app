import { useState } from "react";
import NewPlayerCard from "./newPlayerCard";

export default function NewPlayer() {
  const [newPlayers, setNewPlayers] = useState([]);

  function handleAddPlayerClick(e) {
    e.preventDefault();
    const inputValue = e.target.addPlayer.value;
    const allPlayers = [...newPlayers, { name: inputValue }];
    setNewPlayers(allPlayers);
    e.target.addPlayer.value = "";
  }

  function handleRemovePlayer(name) {
    const newListOfPlayers = newPlayers.filter((player) => {
      return player.name !== name;
    });
    setNewPlayers(newListOfPlayers);
  }

  console.log(newPlayers);

  function renderPlayers() {
    const allPlayers = newPlayers.map((player) => {
      return (
        <NewPlayerCard
          name={player.name}
          key={player.name}
          onClickToRemove={handleRemovePlayer}
        />
      );
    });
    return allPlayers;
  }

  return (
    <div>
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
      <div className="listOfPlayers">{renderPlayers()}</div>
    </div>
  );
}
