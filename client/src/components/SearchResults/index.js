import React from "react";
// import "./style.css";

function SearchResults(props) {
  const resultCount = props.results.length;
  let resultMessage;
  let resultDisplay;

  // If results.length > 0
  if (resultCount) {
    console.log("props.results", props.results);
    resultMessage = "You have " + props.results.length + " results.";
    resultDisplay = props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <button type="submit" name="view" value={result.id} onClick={props.handleViewSubmit} className="btn btn-primary float-right">VIEW</button>
        <button type="submit" name="save" value={result.id} onClick={props.handleSaveSubmit} className="btn btn-primary float-right">SAVE</button>
        <h4>{result.volumeInfo.title}</h4>
        <h5>{result.volumeInfo.subtitle}</h5>
        <h6>By {result.volumeInfo.authors}</h6>
        {result.volumeInfo.imageLinks.thumbnail ? (
          <div className="clearfix">
            <img className="img-fluid rounded float-left" alt="Responsive image" src={result.volumeInfo.imageLinks.thumbnail} />
            {result.volumeInfo.description}
            <a href={result.selfLink} target='_blank'>SelfLink</a>
          </div>
        ) : (
            <h5>bye</h5>
          )}
      </li>
    ));
  }

  return (
    <div>
      {resultMessage}
      {resultDisplay}
    </div>
  )
}

export default SearchResults;
