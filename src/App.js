import React from 'react'
import Profile from './profile/Profile'
import img from './nad.png'
function App() {
  const show =(x) =>{
    alert (x)
  }


  return (
    <div >
     <Profile   fullName="nadhem attaoui" bio="want to be web developer" profession="method engineer" fct={show}>{img} </Profile>
    </div>
  )
}

export default App

