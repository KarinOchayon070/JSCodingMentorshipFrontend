import React from "react";
import { useNavigate } from "react-router-dom";

function LobbyPage() {
  const navigate = useNavigate();

  const handleCodeBlockClick = (codeBlockTitle) => {
    navigate(`/codeblockpage/${codeBlockTitle}`);
  };

  // The name of the codes blocks.
  const codeItems = [
    "Array",
    "Sorting",
    "Math",
    "Recursion"
  ];

  return (
    <div className="LobbyPage">
      <div className="headerContainer">
        <div className="logoContainer">
        <a href={window.location.origin}>
          <img src="./logo.png" alt="Logo" className="logoImage"  />
         </a>
        </div>
        <h1 className="LobbyPageMainTitle word">Welcome To Coding Mentorship 👋</h1>
      </div>
      <h2 className="LobbyPageSubTitle">Please Choose Code Block</h2>
      <ul className="codesItemsList">
        {codeItems.map((item, index) => (
          <li key={index} onClick={() => handleCodeBlockClick(item)}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LobbyPage;
