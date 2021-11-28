import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <strong>Synonyms:</strong>
        {props.synonym.map(function (synonym, index) {
          return <li key={index}> {synonym} </li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
