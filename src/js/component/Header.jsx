import React from 'react'
import Button from './Button'

function Header(props) {

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAddBtnClick} bg={props.showAdd ? '#eb0000' : 'green'}/>
    </header>
  )
}

export default Header