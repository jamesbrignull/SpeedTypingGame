import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 10

  const [text, setText] = useState('')
  const [time, setTime] = useState(STARTING_TIME)
  const [isTimeRun, setIsTimeRun] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
    }
  
  function countWords(str) {
    const wordsArray = str.trim().split(' ')
    return wordsArray.filter(word => word !== '').length
  }

  function startGame() {
    setIsTimeRun(true)
    setTime(STARTING_TIME)
    setText('')
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRun(false)
    setWordCount(countWords(text))
  }

  useEffect(() => {
    if (isTimeRun && time > 0) {
      setTimeout(() => {
          setTime(prevTime => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
        endGame()
    }
}, [time, isTimeRun])

console.log(text)
    return (
      <div className="App">
        <h1>HOW FAST DO YOU TYPE?</h1>
        <textarea 
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRun}>
        </textarea>
        <h4>Time remaining: {time}</h4>
        <button 
          onClick={startGame}
          disabled={isTimeRun}>
        Start game
        </button>
        <h1>Word count: {wordCount}</h1>
      </div>
    );
}

export default App;
