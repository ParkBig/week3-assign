import { useState } from "react";
import "./App.css"


function App() {
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([]);

  const onChange = (ev) => {setInputValue(ev.target.value);}
  const onClick = () => {if (inputValue === "") {return;}  setArr([...arr,inputValue]); setInputValue("");}
  return (
    <div className="App-upperDiv">
      <div className="App-underDiv">
        <div className="App-firDiv">
          <div>
            <input value={inputValue} onChange={onChange} autoFocus/>
            <button onClick={onClick} >추가하기</button>
          </div>
          <h1>Todo List</h1>
        </div>
        <div>
          <div className="App-secDiv">
            {arr.map((prop,index)=><div key={index} className="App-listDiv">{prop}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
