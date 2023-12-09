import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(1)

  const addValue = () => {
    if(counter <= 19){
      setcounter(counter + 1)
    }
  }

  const removeValue = () =>{
    if(counter >= 1 ){
      setcounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter App | Govind's Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Increase-value</button>
      <button onClick={removeValue}>Decrease-value</button>
    </>
  )
}

export default App
