import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  useSelector(state => console.log(state))

  return (
    <>
    </>
  )
}

export default App


