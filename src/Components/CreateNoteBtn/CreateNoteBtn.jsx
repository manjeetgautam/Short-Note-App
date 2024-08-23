import React from 'react'

const CreateNoteBtn = ({onClickFunc}) => {
  return (
    <button className='theme-button absolute w-20 h-20 border rounded-full z-50 right-10 bottom-10'
    onClick={onClickFunc()}
    >+</button>
  )
}

export default CreateNoteBtn