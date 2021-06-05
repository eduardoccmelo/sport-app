import { useState, useEffect } from "react";
import NewPlayerCard from "./newPlayerCard";
import {
  getPlayersFromLocalStorage,
  addPlayerToLocalStorage,
  removePlayerFromLocalStorage,
} from "../services/playersStorage";

export default function NewPlayer() {
  const [newPlayers, setNewPlayers] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  useEffect(() => {
    const myPlayers = getPlayersFromLocalStorage();
    setNewPlayers(myPlayers);
  }, []);

  function handleAddPlayerClick(e) {
    e.preventDefault();
    const inputValue = e.target.addPlayer.value;
    addPlayerToLocalStorage({
      name: inputValue,
    });
    const myPlayers = getPlayersFromLocalStorage();
    setNewPlayers(myPlayers);
    setNumberOfPlayers(numberOfPlayers + 1);
    e.target.addPlayer.value = "";
  }

  function handleRemovePlayer(name) {
    removePlayerFromLocalStorage(name);
    const myPlayers = getPlayersFromLocalStorage();
    setNewPlayers(myPlayers);
    setNumberOfPlayers(numberOfPlayers - 1);
  }

  console.log(newPlayers);

  function renderPlayers() {
    return newPlayers.map((player) => {
      return (
        <NewPlayerCard
          key={player.name}
          name={player.name}
          onClickToRemove={handleRemovePlayer}
        />
      );
    });
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
            required
          ></input>
        </label>
        <button className="newPlayerButton" type="submit">
          Add
        </button>
      </form>
      <div className="listOfPlayers">{renderPlayers()}</div>
      <div className="numberOfPlayers">
        Number of Players: {numberOfPlayers}
      </div>
    </div>
  );
}
