import React, { useState, useEffect } from 'react'

import Navbar from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';
import axios from 'axios'


function App() {

  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API}/blogs`)
    .then((res)=>{
      
      console.log("get data success !")
      console.log(res)
      setBlogs(res.data)
    })
    .catch((err)=>{
      alert(err)
      console.log("Can't get data")
    })
  }

  // Fetch data when web is open
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='max-w-[1640px] mx-auto px-5' >
      <Navbar />
      {/* {JSON.stringify(blogs)} */}

      <div className=' w-full flex flex-col mt-2'> 
      {blogs.map((blog,index)=>( 
        <div className='mb-2 p-4 border-b-[1px]'>
          <h2 className='font-bold'>{blog.title}</h2>
          <p>{blog.content.substring(0,220)} <span className='font-light'>...</span></p>
          <p className='font-light'>Author : {blog.author} </p>
          <p className='font-light'>Published : {new Date(blog.createdAt).toLocaleString()}</p>
        </div>
    
      ))}
    </div>
    </div>
  );
}

export default App;
