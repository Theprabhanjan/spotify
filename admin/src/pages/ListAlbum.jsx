/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react"
import { url } from "../App";
import { toast } from "react-toastify";


function ListAlbum() {
// eslint-disable-next-line no-unused-vars
const [data, setData] = useState([]);

const fetchAlbums = async ()=>{
  try {
    const response = await axios.get(`${url}/api/album/list`)
     
    if (response.data.success) {
      setData(response.data.albumlist)
      
    } 
  } catch (error) {
    console.log(error);
    toast.error(error)
    
  }
}
const removeAlbum = async (id)=>{
  try {
    const response = await axios.post(`${url}/api/album/remove`,{id})
    if(response.data.success){
      toast.success(response.data.message)
      await fetchAlbums()
    }
  } catch (error) {
    console.log(error);
    toast.error('something Went Wrong')
  }
}
useEffect(()=>{
  fetchAlbums()
},[])

  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.1fr] items-center gap-2.5 border-gray-600 p-3 text-sm mr-5 bg-gray-100">
          <b>Image</b><b>Name</b><b>Description</b><b>Album Color</b><b>Action</b>
          </div>
          {
           data.map((item, index)=>{
            return (
              <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center border border-gray-300 text-sm mr-5 gap-2.5 p-3">
                <img src={item.image} className="w-20" alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" value={item.bgColor} />
                <p onClick={()=>{removeAlbum(item._id)}} className="cursor-pointer">X</p>

              </div>
              
            ) 
           })
           
          }
        {fetchAlbums}
      </div>
    </div>
  )
}

export default ListAlbum