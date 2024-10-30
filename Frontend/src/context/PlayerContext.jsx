/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useRef, useState } from "react";
import React from "react";
import axios from 'axios'
// import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvide = (props) => {
    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()
    const url = 'http://localhost:3000'
    const[songsData, setSongsData] = useState([])
    const[albumsData, setAlbumsData] = useState([])

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0

        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }
    const playWithId = async (id) => {
        await songsData.map((item)=>{
            if(id === item._id){
                setTrack(item);
            }
        })
        await audioRef.current.play()
        setPlayStatus(true)
    }
    const previous = async () => {
       songsData.map(async(item,index)=>{
        if(track._id === item._id && index>0){
            await setTrack(songsData[index-1]);
            await audioRef.current.play()
            setPlayStatus(true)
        }
       })
    }
    const next = async () => {
        // if (track.id < songsData.length - 1) {
        //     await setTrack(songsData[track.id + 1])
        //     await audioRef.current.play()
        //     setPlayStatus(true)
        // }
        songsData.map(async(item,index)=>{
            if(track._id === item._id && index< songsData.length){
                await setTrack(songsData[index+1]);
                await audioRef.current.play()
                setPlayStatus(true)
            }
           })
    }

    const increseVolume =  () => {
        
        if (audioRef.currrent.volume < 1.0) {
             audioRef.current.volume += 0.1;
        }
    }
    const decreaseVolume =  () => {
        if (audioRef.current.volume > 0) {
             audioRef.current.volume -= 0.1;
        }
    }
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/ seekBg.current.offsetWidth)*audioRef.current.duration)

    }
const getsSongsData = async()=>{
    try {
        const response = await axios.get(`${url}/api/song/list`)
        if(response.data.success){
            setSongsData(response.data.songs)
            setTrack(response.data.songs[0])
        }
        else{
            console.log('did not connected');
        }
    } catch (error) {
        console.log(error);
        
    }
}

const getAlbumsData = async ()=>{   
    try {
        const response = await axios.get(`${url}/api/album/list`)
        if( response.data.success){
            setAlbumsData(response.data.albumlist)
        }
        else{
            console.log('didnt get album list');
        }
    } catch (error) {
        console.log(error);
        
    }
}

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)

                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        })
    }, [audioRef])


    useEffect(()=>{
        getsSongsData()
        getAlbumsData()
    },[])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        next, previous, increseVolume, decreaseVolume, seekSong,songsData,albumsData
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvide