import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <hr />
        <section>
          <h2 className="SearchedWord">{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <section key={index}>
                <Phonetic phonetic={phonetic} />
              </section>
            );
          })}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
