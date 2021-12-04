import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong className="SectionName">Definition: </strong>
            <span className="definition">{definition.definition}</span>
            <br />
            <em className="SectionName">Example: {definition.example}</em>
            <br />
            <span className="synonym">
              <Synonym synonym={definition.synonyms} />
            <br />
            </span>
          </div>
        );
      })}
      
    </div>
  );
}
