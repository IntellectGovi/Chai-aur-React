import { useState , useId } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from '.hooks/useCurrencyInfo'



function App() {
  const [amount, setamount] = useState(0)



  return (
    <>
      <h1>currency convertor</h1>
      <InputBox/>
    </>
  )
}

export default App
