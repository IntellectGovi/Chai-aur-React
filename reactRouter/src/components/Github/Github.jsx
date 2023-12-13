import React, { useEffect, useState } from 'react'

function Github() {

    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/IntellectGovi')
        .then(response => response.json())
        .then(data => {
            console.log(data),
            setData(data);
        })
    })
  return (
    <div className='text-3xl text-center text bg-gray-700 text-white p-4' >
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="github profile" className='mx-auto rounded-full mt-4' ></img>
    </div>
  )
}

export default Github