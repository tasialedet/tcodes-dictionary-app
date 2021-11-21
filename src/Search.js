import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  let [newWord, setNewWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function displayWord(event) {
    event.preventDefault();
    findWord();
  }
  function updateWord(event) {
    setNewWord(event.target.value);
  }
  function findWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="search">
      <form onSubmit={displayWord}>
        <div className="input-group mb-2">
          <input
            type="search"
            className="form-control"
            placeholder="Type your word here"
            aria-describedby="button-addon2"
            autoFocus={true}
            onChange={updateWord}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
