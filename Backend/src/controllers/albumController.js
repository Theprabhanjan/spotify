import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColor = req.body.bgColor;
    const imageFile = req.file;
    const imageUplode  = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
    const albumData = {
        name,desc,bgColor,imageFile,image:imageUplode.secure_url
    }

    const album = albumModel(albumData)
    await album.save()
    res.json({success:true,message:"album added"})
  } catch (error) {
    res.json({success:false,message:`${error}`})
  }
};
const listAlbum = async (req, res) => {
    try {
        const allAlbum = await albumModel.find({})
        res.json({success:true, albumlist:allAlbum})
    } catch (error) {
        res.json({success:false,message:`${error}`})
    }
};
const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'removed the album'})

    } catch (error) {
        res.json({success:false,message:'something went wrong'})
        
    }
};

export { addAlbum, listAlbum, removeAlbum };
