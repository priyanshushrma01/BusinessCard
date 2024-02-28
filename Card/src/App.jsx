import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Card name={"Priyanshu Sharma"} description={"A 2nd year college student"} interests={["Open Source","Web dev","Web3"]} 
      linkedin={"https://www.linkedin.com/in/priyanshu-sharma-a935501b7/"}></Card>
    </div>
  )
}

export default App
