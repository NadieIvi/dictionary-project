import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  let audio = new Audio("");

  const start = () => {
    audio.play();
  };

  if (props.phonetic.audio && props.phonetic.text) {
    audio = new Audio(props.phonetic.audio);

    return (
      <div className="Phonetics">
        <li className="phonetic-text">
          {props.phonetic.text}
          <button className="phonetic-audio-btn" onClick={start}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
        </li>
      </div>
    );
  } else {
    return null;
  }
}
