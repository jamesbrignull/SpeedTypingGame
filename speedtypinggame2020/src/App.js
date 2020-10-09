import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  function handleChange(event) {
    const { value } = event.target
    setText(value)
    }
  

console.log(text)
    return (
      <div className="App">
        <h1>HOW FAST DO YOU TYPE?</h1>
        <textarea 
          onChange={handleChange}
          value={text}>
        </textarea>
        <h4>Time remaining</h4>
        <button>Start game</button>
        <h1>Word count</h1>
      </div>
    );
}

export default App;
