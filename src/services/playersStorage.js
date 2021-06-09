export function getPlayersFromLocalStorage() {
  const myPlayers = JSON.parse(localStorage.getItem("playerName")) || [];
  return myPlayers;
}

export function getSinglePlayerFromLocalStorage(name) {
  const myPlayers = getPlayersFromLocalStorage();
  const singlePlayer = myPlayers.find((player) => {
    return player.name === name;
  });
  return singlePlayer;
}

export function addPlayerToLocalStorage(playerName) {
  const myPlayers = getPlayersFromLocalStorage();
  myPlayers.push(playerName);
  localStorage.setItem("playerName", JSON.stringify(myPlayers));
}

export function removePlayerFromLocalStorage(playerName) {
  const myPlayers = getPlayersFromLocalStorage();
  const newPlayers = myPlayers.filter((player) => {
    return player.name !== playerName;
  });
  localStorage.setItem("playerName", JSON.stringify(newPlayers));
}
