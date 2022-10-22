import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictinary() {
  let [keyword, setKeyword] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  return (
    <div className="Dictionary mt-5">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
