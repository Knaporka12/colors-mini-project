import React from 'react';

const Square = ({color, hexColor, isDarkText}) => {
  return (

    <div 
      className='square' 
      style={{backgroundColor: color}}
    >
      <h2 

        className='square__h2' 
        style={{color: isDarkText ? 'black' : 'white'}}
        
      >{color ? color : 'Empty value'}</h2>

      <h2

        className='square__h2' 
        style={{color: isDarkText ? 'black' : 'white'}}

      >{hexColor ? hexColor : null}</h2>

    </div>

  )
};

export default Square;
