import React from 'react'

function Candystore(props) {
  return (
    <div>
      <h1>
        {console.log(props)}
        {props.name} - {props.candy}
      </h1>
    </div>
  )
}

export default Candystore
