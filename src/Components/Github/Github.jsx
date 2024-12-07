import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const Github = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
       fetch('https://api.github.com/users/abhishekmaurya575')
       .then(response=>response.json())
       .then(data =>{
        setData(data)
       })
    })
  return (
    <div className='text-center mt-4 bg-gray-400 text-white p-12  text-3xl min-h-[400px] w-full lg:flex lg:flex-col  items-center justify-center'>
     <div className='mb-10'>Github Followers:{data.followers}</div>
     <div> <img src={data.avatar_url} className='w-60 h-60 rounded-full '></img></div>
    </div>
  )
}

export default Github
