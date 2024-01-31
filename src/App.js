import Header from "./Header";
import Square from "./Square";
import ColorInput from "./ColorInput";
import { useState } from "react";


function App() {

  const [color, setColor] = useState('');

  // const changeColor = (newColor) => {

  //   setColor(newColor);
  //   const squareEle = document.querySelector(`.square`);
  //   squareEle.style.backgroundColor = color;

  // }

  return (

    <div className="App">

      <Header></Header>

      <div>

        <Square
          color={color}
        ></Square>

        <ColorInput
          color={color}
          setColor={setColor}
          //changeColor={changeColor}
        ></ColorInput>

      </div>

    </div>

  );
}

export default App;
