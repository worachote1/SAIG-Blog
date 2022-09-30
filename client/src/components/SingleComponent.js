import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const SingleComponent = () => {
    const [blog, setBlog] = useState('')

    const { slug } = useParams()

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/blog/${slug}`)
            .then(response => {
                setBlog(response.data)
            })
            .catch(err => alert(err))
    }, [])

    return (
        <div className='max-w-[1640px] mx-auto px-5'>
            <NavBar />
            <div className=' w-full  mt-2 p-4 border-t-[1px]'>

                <h2 className='font-bold text-3xl'>{blog.title}</h2>
                <p className='mt-2'>{blog.content} </p>
                <div className='mt-4'>
                    <p className='font-light'>Author : {blog.author} </p>
                    <p className='font-light'>
                        Published : {new Date(blog.createdAt).toLocaleString()}
                    </p>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default SingleComponent