/* eslint-disable no-unused-vars */
import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";


function AddAlbum() {
  const [image, setImage] = useState(false)
  const [color, setColor] = useState('#000000')
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('image', image)
      formData.append('bgColor', color)
      const response = await axios.post(`${url}/api/album/add`,formData)
        if(response.data.success){
        toast.success(response.data.message)
        setDesc("")
        setName("")
        setImage(false)    
        setColor("#000000")
      }
      else
      toast.error("something went wrong (:")

    } catch (error) {
      console.log(error);
      toast.error('Error occured !')
    }
    setLoading(false)
  }

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex flex-col gap-4">
        <p>Uploade Image</p>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/* " hidden />
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="w-24 cursor-pointer" alt="" />
        </label>

      </div>
      <div className="flex flex-col  gap-2.5">
        <p>Album Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className="bg-transparent outline-green-600 rounded-md border-2 p-2.5 w-[max(40vw,250px)] border-gray-700" placeholder="Type here" type="text" />
      </div>
      <div className="flex flex-col  gap-2.5">
        <p>Album description</p>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} className="bg-transparent outline-green-600 rounded-md border-2 p-2.5 w-[max(40vw,250px)] border-gray-700" placeholder="Type here" type="text" />
      </div>
      <div className="flex flex-col  gap-2.5">
        <p>Background Color</p>
        <input onChange={(e) => { setColor(e.target.value) }} value={color} type="color" />
      </div>
      <button type="submit" className="text-base bg-green-700 rounded hover:bg-green-950 text-white py-2 px-4 cursor-pointer">Add Album</button>
    </form>
  )
}

export default AddAlbum