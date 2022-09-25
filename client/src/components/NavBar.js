import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    return (

        <div className='max-w-[1640px] mx-auto
        flex justify-between items-center p-4 
        '>
            {/* left side */}
            <div className='flex items-center'>
                <div className='cursor-pointer'
                    onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={20.44} />
                </div>
                <h1 className='text-2xl sm:text-3xl
                lg:text-4xl px-2'>
                    <span className='text-teal-400'>S A I G</span> B l o g
                </h1>

            </div>

            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2
            w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20.44} />
                <input className='p-2 focus:outline-none w-[100%] bg-transparent'
                    type="text" placeholder='Search foods' />
            </div>

            {/* Cart Button */}
            <div>{(true) &&
                <button className='hidden
                px-7 py-3 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                    Log in
                </button>
            }

                {(true) &&
                    <button className='hidden
                    "px-7 py-3 bg-transparent text-black rounded-full font-medium text-sm leading-snug uppercase  shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                        Log out
                    </button>
                }
            </div>


            {/* Mobile Menu */}
            {/* background overlay when click tab icon on the top left side? */}

            {nav ?
                <div className='bg-black/80 
                fixed w-screen h-screen
                top-0 left-0
                z-10'>
                </div>
                : ""}

            {/* if nav is set to false display the same , if it' true move nav side menu form left -100%  */}
            <div className={nav ? 'bg-white fixed top-0 left-0 w-[300px] h-screen duration-300 z-20'
                : 'bg-white fixed top-0 left-[-100%] w-[300px] h-screen duration-300 z-20'
            }>
                <AiOutlineClose size={30} className="absolute top-4 right-2 cursor-pointer" onClick={() => setNav(!nav)} />

                <h2 className='text-2xl p-4'>
                    <span className='text-teal-400'>S A I G</span> B l o g
                </h2>
                <nav>
                    <ul className='flex flex-col p-4  text-gray-800'>
                        <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                        <li>
                            <button className='hidden
            md:flex items-center cursor-pointer bg-black text-white py-2 rounded-full'>
                                <BsFillCartFill size={20} className='mr-2' />
                                logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default NavBar