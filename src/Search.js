import React, { useState } from "react";

export default function Search(props) {
  let [newWord, setNewWord] = useState(props.defaultWord);

  function searchWord(event) {
    event.preventDefault();
    alert([newWord]);
  }
  function updateWord(event) {
    setNewWord(event.target.value);
  }
  return (
    <div className="search">
      <form onSubmit={searchWord}>
        <div class="input-group mb-2">
          <input
            type="search"
            className="form-control"
            placeholder="Type your word here"
            aria-describedby="button-addon2"
            autoFocus={true}
            onChange={updateWord}
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
