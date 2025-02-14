import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'


function SideBar() {
    
    return (
        <div className='bg-[#003A10] min-h-screen pl-[5vw]'>
            <img src={assets.logo} className='mt-5 mr-5 w-[max(10vw,100px)]  sm:block hidden' alt="" />
            <img src={assets.logo_small} className='mt-5 mr-7  w-[max(5vw,40px)] ml-5 block sm:hidden' alt="" />
            <div className='flex flex-col gap-5 mt-10'>
                <NavLink to={'/add-song'}  className='flex items-center gap-2.5 text-gray-800 bg-white borde-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] test-sm font-medium'>
                    <img src={assets.add_song} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink >
                <NavLink to={'/list-song'} className='flex items-center gap-2.5 text-gray-800 bg-white borde-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] test-sm font-medium'>
                    <img src={assets.song_icon} className='w-5' alt="" />
                    <p className='hidden sm:block'>Show all Songs</p>
                </NavLink>  
                <NavLink to={'/add-album'} className='flex items-center gap-2.5 text-gray-800 bg-white borde-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] test-sm font-medium'>
                    <img src={assets.add_album} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink >
                <NavLink to={'/list-album'} className='flex items-center gap-2.5 text-gray-800 bg-white borde-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] test-sm font-medium'>
                    <img src={assets.album_icon} className='w-5' alt="" />
                    <p className='hidden sm:block'>Show all Albums</p>
                </NavLink>
               
            </div>
        </div>
    )
}

export default SideBar