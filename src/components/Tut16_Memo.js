import React from 'react'

function Tut16_Memo({name}) {
    console.log('rendering memo compo');
  return (
    <div>
      {name}
    </div>
  )
}
 
export default React.memo(Tut16_Memo)
