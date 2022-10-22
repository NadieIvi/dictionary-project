import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictinary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary mt-5">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
