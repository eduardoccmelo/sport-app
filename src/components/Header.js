import { useState, useEffect } from "react";
import {
  getTitleFromLocalStorage,
  changeTitleToLocalStorage,
} from "../services/titleStorage";

export default function Header() {
  const [headerText, setHeaderText] = useState("Click to add a Title");

  useEffect(() => {
    const myTitle = getTitleFromLocalStorage();
    if (myTitle.length === 0) {
      setHeaderText("Click to add a Title");
    } else {
      setHeaderText(myTitle);
      changeTitleToLocalStorage(myTitle);
    }
  }, []);

  function handleOnClickHeaderTitle() {
    const myTitle = getTitleFromLocalStorage();
    const newTitle = prompt("Type a Title:", myTitle);
    if (!newTitle) {
      setHeaderText("Click to add a Title");
      changeTitleToLocalStorage("Click to add a Title");
    } else {
      setHeaderText(newTitle);
      changeTitleToLocalStorage(newTitle);
    }
  }
  return (
    <div onClick={handleOnClickHeaderTitle} className="pageHeader">
      {headerText}
    </div>
  );
}
