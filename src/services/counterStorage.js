export function getPlayersCountFromLocalStorage() {
  const myPlayersCount = JSON.parse(localStorage.getItem("count")) || [];
  return myPlayersCount;
}

export function addPlayerCountToLocalStorage() {
  const myPlayersCount = getPlayersCountFromLocalStorage();
  const newCount = Number(myPlayersCount) + 1;
  localStorage.setItem("count", JSON.stringify(newCount));
}

export function removePlayerCountFromLocalStorage() {
  const myPlayersCount = getPlayersCountFromLocalStorage();
  const newCount = Number(myPlayersCount) - 1;
  localStorage.setItem("count", JSON.stringify(newCount));
}
