import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [textarea, setTextarea] = useState('');
  
  function handleChange(e) {
    const inputText = e.target.value;
    setTextarea(inputText);
    setCount(inputText.length);
    countWords(inputText);
  }
  
  function countWords(inputText) {
    const words = inputText.split(' ');
    const filteredWords = words.filter(word => word !== '');
    const wordCount = filteredWords.length;
    setTextare(wordCount);
  }

  return (
    <div className="container">
      <div className="contant-container">
        <div className="header">
          <h1>Character Counter</h1>
        </div>
        <div className="bodey">
          <textarea onChange={handleChange} placeholder='Copy your text here to count'></textarea>
        </div>
        <div className="foooter">
          <h3>Character Count: {count}</h3>
          {/* <h3>Word Count: {textarea}</h3> */}
        </div>
      </div>
    </div>
  )
}

export default App
