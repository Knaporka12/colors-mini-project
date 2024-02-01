import Header from "./Header";
import Square from "./Square";
import ColorInput from "./ColorInput";
import { useState } from "react";


function App() {

  const [color, setColor] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

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
          hexColor={hexColor}
          isDarkText={isDarkText}
        ></Square>

        <ColorInput
          color={color}
          setColor={setColor}
          setHexColor={setHexColor}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
          //changeColor={changeColor}
        ></ColorInput>

      </div>

    </div>

  );
}

export default App;
