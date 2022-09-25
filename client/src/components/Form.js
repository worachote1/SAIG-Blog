import { useState } from 'react'
import NavBar from './NavBar'
const Form = () => {

    // const [state, setState] = useState({
    //     title: "",
    //     content: "",
    //     prn_type: "Art",
    //     author: ""
    // })

    // const {title,content,prn_type,author} = state

    //Define value to state
    // const inputValue=name=>event=>{
    //     //console.log(name," = ",event.target.value)

    //     //set data refer to each field name
    //     setState({...state,[name]:event.target.value})
    // }

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [prn_type,set_prn_type] = useState("Art")
    const [author,setAuthor] = useState("")
    

    return (
        <div
            className='max-w-[1640px]'
        >
    
            <NavBar />

           {console.log("title : ",title," content : ",content," prn_type : ",prn_type," author : ",author)}
           <p>{`title : ${title} content : ${content}, prn_type : ${prn_type}, author : ${author} `}</p>

            <div className='p-4'>
                <h1 className='font-bold text-3xl px-4'>Write a Blog Post</h1>
                <form >
                    <div className='mt-3'>
                        <label for="small-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Title : </label>
                        <input type="text" id="small-input" class="block p-2 w-[50%] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         focus:outline-none 
         md:text-xl
        " 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
                    </div>
                        
                    <div className='mt-3'>
                        <label for="countries" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Select Type :</label>
                        <select id="countries" class="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none "
                        onChange={(e)=>set_prn_type(e.target.value)}>
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
                        md:text-xl" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                    </div>


                    <div className='mt-3'>
                        <label for="small-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300">Author : </label>
                        <input type="text" id="small-input" class="block p-2 w-[50%] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         focus:outline-none 
         md:text-xl
        " value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        />
                    </div>

                    <div className='mt-8'>
                        <button className='
                px-7 py-3 bg-transparent rounded-full text-black font-medium text-md leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                            Save
                        </button>
                    </div>

                </form>


            </div>
        </div>


    )
}

export default Form