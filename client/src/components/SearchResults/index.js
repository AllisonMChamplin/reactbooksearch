import React from "react";
import "./style.css";

function SearchResults(props) {
  const resultCount = props.results.length;
  let resultMessage;
  let resultDisplay;

  // If results.length > 0
  if (resultCount) {
    resultMessage = "You have " + props.results.length + " results.";
    resultDisplay = props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <img alt="Book Cover Thumbnail Image" src={result.volumeInfo.imageLinks.smallThumbnail} className="img-fluid" />
      </li>
    ));

  } 
  // else {
  //   resultMessage = ""
  // }

  return (
    <div>
      {resultMessage}
      {resultDisplay}
    </div>
  )
}

export default SearchResults;
