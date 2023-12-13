import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length , setlength] = useState(8)
  const [password , setpassword] = useState("")
  const [numberAllowed , setnumbeAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "  "
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}_~"

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setpassword(pass);
  } , [length , setpassword , numberAllowed , charAllowed])

  const copyPassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  const passRef = useRef(null);

  return (
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-bold text-center mb-8 mt-9 text-white'>PASSWORD-GENERATOR</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={1} max={99} value={length} className='cursor-pointer' onChange={(e) => {
              setlength(e.target.value)}} />
              <label> length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
              setnumbeAllowed((prev) => !prev);
            }}/>
            <label>Include No.</label>

            <input type="checkbox" defaultChecked={charAllowed} id='numberInput' onChange={() => {
              setcharAllowed((prev) => !prev);
            }}/>
            <label>Include char.</label>
          </div>
        </div>
      </div>

  )
}

export default App
