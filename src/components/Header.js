import React from 'react'

function Header({onDarkModeClick}) {
  return (
    
        <button onClick={onDarkModeClick}
       className= ' {isDarkMode ? "Dark" : "Light"} '>Dark Mode</button>
    
  )
}

export default Header