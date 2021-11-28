import React from "react";
import "./App.css";
import Images from "./Images";
import Search from "./Search";

function App() {
  return (
    <div className="Dictionary" id="targetDictionary">
      <h1>Dictionary</h1>
      <p>What word would you like to look up?</p>
      <Search defaultWord="ram" />
      <Images />
      <p>
        Created & Open-Sourced by Tasia Ledet on{" "}
        <a
          href="https://github.com/tasialedet/tcodes-dictionary"
          target="blank"
        >
          Github
        </a>{" "}
        & Hosted on{" "}
        <a href="https://objective-kepler-9b99bd.netlify.app" target="blank">
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
