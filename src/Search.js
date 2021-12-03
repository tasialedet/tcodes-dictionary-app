import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Search.css";

export default function Search(props) {
  let [newWord, setNewWord] = useState(null);
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function displayWord(event) {
    event.preventDefault();
    findWord();
    searchPexels();
  }
  function updateWord(event) {
    setNewWord(event.target.value);
  }
  function findWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }
  function searchPexels() {
    const pexelsApiKey =
      "563492ad6f9170000100000103d287c62c524ccbabfe1b8d2d4cb6bf";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${newWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
      <hr />
      <Images images={images} />
    </div>
  );
}
