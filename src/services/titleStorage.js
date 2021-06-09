export function getTitleFromLocalStorage() {
  const myTitle = JSON.parse(localStorage.getItem("pageTitle")) || [];
  return myTitle;
}

export function changeTitleToLocalStorage(pageTitle) {
  const myTitle = getTitleFromLocalStorage();
  myTitle[0] = pageTitle;
  localStorage.setItem("pageTitle", JSON.stringify(myTitle));
}
