import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListAlbum from './pages/ListAlbum';
import ListSong from './pages/ListSong';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:3000'


function App() {

  return (
    <div className=' flex items-start  m-h-screen '>
      <ToastContainer />
      <SideBar/>
      <div className='flex-1 h-screen overflow-y-hidden bg-[#F3FFF7]'>
      <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12 '>
          <Routes>
            <Route path='/add-song' element={<AddSong />} />
            <Route path='/add-album' element={<AddAlbum />} />
            <Route path='/list-album' element={<ListAlbum />} />
            <Route path='/list-song' element={<ListSong />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
