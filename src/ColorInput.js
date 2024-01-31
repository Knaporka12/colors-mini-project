import React from 'react'

const ColorInput = ({color, setColor}) => {
  return (

    <input 

        className='color-input'
        placeholder='Change color'
        value={color}
        onChange={(e) => {setColor(e.target.value)}}

    ></input>
    
  )
}

export default ColorInput
