import React from 'react'


function Box(props) {
  return (
    <div className="box-container box-container-solid">
      {props.children}
    </div>
  )
}

export default Box;