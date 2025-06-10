import { useState } from "react";
import data from "./Data";
import "./styles.css";
// Single selection

// Multiple selection

export default function () {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  function handleMultiSelection(getCurrentID) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentID = cpyMutiple.indexOf(getCurrentID);

    if (findIndexOfCurrentID === -1) cpyMutiple.push(getCurrentID);
    else cpyMutiple.splice(findIndexOfCurrentID, 1);

    setMultiple(cpyMutiple);
  }

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="Title"
      >
        Enable Multi Selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === data.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
