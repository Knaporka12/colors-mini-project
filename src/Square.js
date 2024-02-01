import React from 'react';

const Square = ({color}) => {
  return (

    <div 
      className='square' 
      style={{backgroundColor: color}}
    >
      <h2 className='square__h2'>{color}</h2>

    </div>

  )
}

export default Square;
