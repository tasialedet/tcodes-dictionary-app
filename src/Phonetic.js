import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="phoneticText">{props.phonetic.text}</span> 
      <a className="phoneticAudio" href={props.phonetic.audio} target="blank"> Click to listen </a> 
    </div>
  );
}
