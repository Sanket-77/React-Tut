import React from 'react'

export default function Tut8_Child_Comp(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandeler}>Greet parent</button> */}
      <button onClick={() => props.greetHandeler('child')}>Greet parent</button> // child to parent
    </div>
  )
}


// Methods as props 

//  we call the parent compo method frop child comp
