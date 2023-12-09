import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'


function App() {
  const [color, setcolor] = useState("olive");

  return (  
      <div className="w-full duration-200 h-100" style={{backgroundColor : color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={() => setcolor("red")}>RED</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={() => setcolor("green")}>RED</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={() => setcolor("blue")}>BLUE</button>

          </div>
        </div>
      </div>
  )
}

export default App