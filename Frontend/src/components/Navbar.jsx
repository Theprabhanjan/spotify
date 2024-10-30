/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import React from "react"


function Navbar() {
  const navigate = useNavigate()
  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
        <div  className="flex items-center gap-2 ">
            <img 
            onClick={()=>navigate(-1)}
            className="w-9 bg-black p-2 cursor-pointer rounded-full"
            src={assets.arrow_left} alt="" />
            <img 
            onClick={()=>navigate(1)}
            className="w-9 bg-black p-2 cursor-pointer rounded-full"
            src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4">
            <p className="bg-white text-black cursor-pointer text-[15px] px-4 py-1.5 rounded-full hidden md:block">Explore Premium</p>
            <p className="text-white bg-black cursor-pointer text-[15px] px-4 py-1.5 rounded-full hidden md:block">SIGN UP</p>
            <p className="text-gray bg-zinc-600 cursor-pointer text-[15px] px-4 py-1.5 rounded-full hidden md:block uppercase">LOG In</p>
        </div>

    </div>
    <div className="flex items-center gap-2 mt-4">
        <p className="bg-slate-300 cursor-pointer text-black px-8 py-1 rounded-2xl text-bold">All</p>
        <p className="text-slate-300 cursor-pointer bg-black px-8 py-1 rounded-2xl text-bold">Music</p>
        <p className="text-slate-300 cursor-pointer bg-black px-8 py-1 rounded-2xl text-bold">Podcast</p>
    </div>
    </>
  )
}

export default Navbar