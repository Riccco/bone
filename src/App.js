import './App.css';
import React, {useRef} from "react";

function App() {
  const boxRef = useRef(null);
  function moveStart(){
    console.log(boxRef.current.style.top)
    window.document.onmousemove = function (event){
    boxRef.current.style.left = event.clientX  + 'px'
    boxRef.current.style.top = event.clientY + 'px'
    }
  }

  function moveStop(){
    window.document.onmousemove = null
  }
  return (
    <div className="App">
          <div ref={boxRef} onMouseUp={moveStop} onMouseDown={moveStart} className="box"> </div>
    </div>

  );
}

export default App;
