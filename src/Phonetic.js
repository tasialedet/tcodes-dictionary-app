import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="phoneticText">{props.phonetic.text}</span>
      <button className="phoneticAudioButton">
        <a className="phoneticAudio" href={props.phonetic.audio} target="blank">
          {" "}
          Click to listen{" "}
        </a>
      </button>
    </div>
  );
}
