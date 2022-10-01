import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

const UpdateForm = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [prn_type, set_prn_type] = useState("Art")
    const [author, setAuthor] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        console.table({title,content,prn_type,author})
        console.log("display API Link -> ",process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/create`,{title,content,prn_type,author})
        .then((res)=>{
            console.log(res)
            //alert("Save data success")
            Swal.fire(
                'Warning',
                'Update data success',
                'success'
              )

            //clear form 
            setTitle("")
            setContent("")
           // set_prn_type(prn_type)
            setAuthor("")
        })
        .catch((err)=>{
            //err.res.data.msg_err
            console.log(err)
            console.log(err.response.data.msg_error)
            Swal.fire({
                icon: 'error',
                title: 'Warning...',
                text: `${err.response.data.msg_error}`
              })
        })
    }


    //fetch former data to be displayed
    const {slug} = useParams()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/blog/${slug}`)
        .then((res)=>{
            console.log("Former data -> ")
            console.log(res)
            const data = res.data
            setTitle(data.title)
            setContent(data.content)
            //set_prn_type(data.prn_type)
            setAuthor(data.author)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div
            className='max-w-[1640px] mx-auto p-3'
        >

            <NavBar />
            {/* 
           {console.log("title : ",title," content : ",content," prn_type : ",prn_type," author : ",author)}
           <p>{`title : ${title} content : ${content}, prn_type : ${prn_type}, author : ${author} `}</p> */}

            <div className='p-4'>
                <h1 className='font-bold text-3xl text-lime-300'>Update blog</h1>
                <form onSubmit={submitForm}>
                    <div className='mt-3'>
                        <label for="small-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Title : </label>
                        <input type="text" id="small-input" class="block p-2 w-[50%] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         focus:outline-none 
         md:text-xl
        "
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='mt-3'>
                        <label for="countries" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Select Type :</label>
                        <select id="countries" class="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none "
                            onChange={(e) => set_prn_type(e.target.value)}>
                            <option value='Art'>Art</option>
                            <option value="Business">Business</option>
                            <option value="Money">Money</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Science">Science</option>
                            <option value="Technology">Technology</option>
                        </select>
                    </div>

                    <div className='mt-3'>
                        <label for="message" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-400">Content : </label>
                        <textarea id="message" rows="7" class="block p-2.5 w-[90%] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none 
                        md:text-xl" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>


                    <div className='mt-3'>
                        <label for="small-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Author : </label>
                        <input type="text" id="small-input" class="block p-2 w-[50%] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         focus:outline-none 
         md:text-xl
        " value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>

                    <div className='mt-8'>
                        <input type='submit' value="Save" className=' px-7 py-3 bg-green-600 rounded-full text-black font-medium text-md leading-snug uppercase shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in-out"
             md:inline-block' />
                    </div>

                </form>
            </div>

            <Footer />
        </div>
    )
}

export default UpdateForm