/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import React from "react"

function Sidebar() {
    const navigate = useNavigate()
  return (
    <div className="h-full text-white gap-2 flex-col hidden  w-[23%] lg:flex rounded p-1">
        <div className=" bg-[#121212]  h-[15%] rounded flex flex-col justify-around gap-1  " >
            <div onClick={()=>navigate(`/`)} className="flex items-center gap-3 pl-8 cursor-pointer ">
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8  cursor-pointer">
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
         
           
        </div>
        <div className="bg-[#121212] rounded h-[85%]">
            <div className='p-4 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                    <img  className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className="p-4 bg-[#242424] m-2 font-semibold flex flex-col items-start justify-start rounded">
                <h1>Create your first playlist</h1>
                <p className='font-light'>its easy, we'll hekp you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>create playlist</button>

            </div>
            <div className="p-4 bg-[#242424] m-2 mt-3 font-semibold  rounded flex flex-col items-start justify-start ">
                <h1>Let's find podacst to follow</h1>
                <p className='font-light'>We'll keep you update on new episods</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>

            </div>
        </div>
    </div>
  )
}

export default Sidebar