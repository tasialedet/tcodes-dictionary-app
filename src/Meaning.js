import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="definition">•{definition.definition}</span>
            <br />
            <em className="example">{definition.example}</em>
          </div>
        );
      })}
      <br />
    </div>
  );
}
