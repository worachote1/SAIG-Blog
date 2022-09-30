import React, { useState, useEffect } from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'

const ShowBlogs = () => {

    const [blogs, setBlogs] = useState([])

    const fetchData = () => {
        axios.get(`${process.env.REACT_APP_API}/blogs`)
            .then((res) => {

                console.log("get data success !")
                console.log(res)
                setBlogs(res.data)
            })
            .catch((err) => {
                alert(err)
                console.log("Can't get data")
            })
    }

    // Fetch data when web is open
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className=' w-full flex flex-col mt-2'>
            {/* {JSON.stringify(blogs)} */}
            {blogs.map((blog, index) => (
                <div className='mb-2 p-4 border-b-[1px]' key={index}>
                    <Link to={`/blog/${blog.slug}`}>
                        <h2 className='font-bold'>{blog.title}</h2>
                    </Link>

                    <p>{blog.content.substring(0, 220)} <span className='font-light'>...</span></p>
                    <p className='font-light'>Author : {blog.author} </p>
                    <p className='font-light'>Published : {new Date(blog.createdAt).toLocaleString()}</p>
                </div>

            ))}
        </div>
    )
}

export default ShowBlogs