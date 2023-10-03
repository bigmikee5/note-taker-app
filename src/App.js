import "./App.css";
import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [currentNotes, setCurrentNotes] = useState([]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };
  const handleClick = () => {
    setCurrentNotes([...currentNotes, note]);
    setNote("");
  };
  return (
    <div className="App">
      <h1>Note taker</h1>
      <p>Note down your thoughts and events</p>
      <div className="formHolder">
        <div>
          <label htmlFor="note" className="formLabel">
            Note:
          </label>
          <input
            type="text"
            id="note"
            className="formControl"
            placeholder="Enter a note here..."
            onChange={handleChange}
            value={note}
          />
          <br />
          <br />
          <button type="button" className="btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
      <div className="tableDiv">
        {currentNotes.length === 0 ? (
          <p>No notes to display</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {currentNotes.map((n, index) => (
                <tr key={index}>
                  <td>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
