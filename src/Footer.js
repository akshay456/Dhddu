import React from 'react'

const Footer = ({items}) => {
    

  return (
    <footer> {items.length}  {items.length<=1 ? "are item ready to go" :  "are itemssss ready to go"}</footer>
  )
}

export default Footer