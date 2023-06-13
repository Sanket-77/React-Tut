import React from 'react'

const Tut17_FRInput = React.forwardRef((props,ref) => {
return (
    <div>
        <input type="text"  ref={ref}/>
    </div>
)
})
export default Tut17_FRInput
