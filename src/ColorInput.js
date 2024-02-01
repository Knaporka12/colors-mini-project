import React from 'react';
import colorNames from 'colornames';

const ColorInput = ({color, setColor, setHexColor, isDarkText, setIsDarkText}) => {
  return (

    <section className='change-section'>

      <input 

        autoFocus
        required
        className='color-input'
        placeholder='Change color'
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexColor(colorNames(e.target.value));
        }}

      ></input>

      <button

        className='change-btn'
        onClick={() => {setIsDarkText(!isDarkText)}}

      >Change text color to {isDarkText ? 'white' : 'black'}</button>

    </section>
    
  )
};

export default ColorInput;
