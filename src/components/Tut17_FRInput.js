import React from 'react'

// export default function Tut17_FRInput() {
//   return (
//     <div>
      
//     </div>
//   )
// }


const Tut17_FRInput = React.forwardRef((props,ref) => {
return (
    <div>
        <input type="text"  ref={ref}/>
    </div>
)
})
export default Tut17_FRInput