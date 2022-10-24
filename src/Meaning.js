import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <div className="definition"> {definition.definition} </div>

              <Examples definition={definition} />

              <Synonyms synonyms={definition.synonyms} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
