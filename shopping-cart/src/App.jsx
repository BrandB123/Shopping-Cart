// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link } from "react-router-dom";
import './App.css'
import NavigationBar from './NavigationBar.jsx'

function App() {

  return (
    <div>
      <NavigationBar cartState={ null }/>
      <div className="homePage">
        <h1 className='homePageContent'>Check out our store to find everything you could need!</h1>
      </div>
    </div>
  )
}

export default App
