/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import axios from 'axios'
import { url } from "../App"
import { toast } from "react-toastify"


function AddSong() {
  const [image, setImage] = useState(false)
  const [song, setSong] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [album, setAlbum] = useState("none")
  const [loading, setLoading] = useState(false)
  const [albumData, setAlbumData] = useState([])

  const onSubmitHandle = async (e) => { 

    e.preventDefault();
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('desc', description)
      formData.append('image', image)
      formData.append('audio', song)
      formData.append('album', album)

      const response = await axios.post(`${url}/api/song/add`, formData);
      
      if (response.data.success) {
        toast.success("song added !");
        setName('')
        setAlbum('none');
        setImage(false)
        setDescription("")
        setSong(false)

      }
      else {
        toast.error('Somethig Went wrong :(')
      }

    } catch (error) {
      toast.error(error)

    }
    setLoading(false)
  }

  const loadAlbumData = async () =>{
    try {
      const response = await axios.get(`${url}/api/album/list`)
      if(response.data.success){
        setAlbumData(response.data.albumlist)
      }
      
      else{
        toast.error('something went wrong')
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    loadAlbumData()
  },[])

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (

    <form onSubmit={onSubmitHandle} action="" className="flex flex-col items-start   text-gray-800 gap-8">
      <div className="flex   gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold tracking-wider text-xl">Upload song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img src={song ? assets.upload_added : assets.upload_song} className="w-24 cursor-pointer" alt="" />
          </label>

        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold tracking-wider text-xl">Upload Image</p>
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img className="w-24 cursor-pointer" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song name</p>
        <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className="bg-transparent outline-green-600 border-2 border-gray-600 p-2.5 w-[max(40vw,250px)] " placeholder="Type here" required />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" className="bg-transparent outline-green-600 border-2 border-gray-600 p-2.5 w-[max(40vw,250px)] " placeholder="Type here"  />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>album</p>
        <select onChange={(e) => { setAlbum(e.target.value) }} value={album} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px] ">
          <option  value="none">None</option>
        {albumData.map((item,index)=>(<option key={index} value={item.name}>{item.name}</option>))}

        </select>
      </div>

      <button type="submit" className="text-base bg-green-700 rounded hover:bg-green-950 text-white py-2 px-4 cursor-pointer">Add Song</button>

    </form>
  )
}

export default AddSong