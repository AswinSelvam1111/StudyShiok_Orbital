import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={logo} className="base" width="246" height="192" alt="" />
        </div>
        <div>
          <h2>Welcome!</h2>
          <p>Login to your account to continue.</p>
        </div>
    
      </section>


    </>
  )
}

export default App
//