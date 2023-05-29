import React from 'react'

const Header = (props) => {

  const headerStyle= {backgroundColor:"greenyellow", color:"#fff", alignItems:"center"}

  return (
    <header style={headerStyle}><h1>{props.title}</h1></header>
  )
}

Header.defaultProps={
  title:"do-do list"
}

export default Header