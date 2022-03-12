import './App.css';
import {useState} from "react";
function App() {


const [counter, setCounter] = useState(0)

  function increment() {

 setCounter(counter+1);

  }
  function decrement() {

    if(counter>0){
      setCounter(counter-1);
    }

    else{
      alert("Counter value should be greater than 0")
    }


  }
  return (
    <div>
      <h1>Counter</h1>
      <div className="App">
        <button type="button" onClick={increment}>+</button>
        <div className="counter">{counter}</div>
        <button type="button" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
