import { useState } from "react";

export default function Header() {
  const [headerText, setHeaderText] = useState("Click to add a Title");

  function handleOnClickHeaderTitle() {
    const newTitle = prompt("type something");
    if (!newTitle) {
      setHeaderText("Click to add a Title");
    } else {
      setHeaderText(newTitle);
    }
  }
  return (
    <div onClick={handleOnClickHeaderTitle} className="pageHeader">
      {headerText}
    </div>
  );
}
