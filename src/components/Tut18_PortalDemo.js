import React from 'react'
import  ReactDOM  from 'react-dom'

// poratl take two parameters 1 jsx and 2 Dom note is mount the element on to 

function Tut18_PortalDemo() {
  return ReactDOM.createPortal(
    <h1>portals Demo</h1>,
    document.getElementById('portal-root')
  )
}

export default Tut18_PortalDemo
