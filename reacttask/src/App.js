import airpods from './airpods.jpg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="contentHere">
      <div className="container2"></div>
      <div className="number">
        {count}
      </div>
      <br />
      <hr></hr>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;