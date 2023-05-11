import React from 'react'

const Footer = () => {
    const year = new Date();

  return (
    <footer>copy rights &copy; {year.getFullYear()}</footer>
  )
}

export default Footer