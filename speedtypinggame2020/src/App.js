import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [time, setTime] = useState(3)
  const [isTimeRun, setIsTimeRun] = useState(false)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
    }
  
  // function countWords(str) {
  //   const wordsArray = str.trim().split(' ')
  //   return wordsArray.filter(word => word !== '').length
  // }

  useEffect(() => {
    if (isTimeRun && time > 0) {
      setTimeout(() => {
          setTime(prevTime => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
        setIsTimeRun(false)
    }
}, [time, isTimeRun])

console.log(text)
    return (
      <div className="App">
        <h1>HOW FAST DO YOU TYPE?</h1>
        <textarea 
          onChange={handleChange}
          value={text}>
        </textarea>
        <h4>Time remaining: {time}</h4>
        <button 
          onClick={() => setIsTimeRun(true)}
        >Start game
        </button>
        <h1>Word count</h1>
      </div>
    );
}

export default App;
