/* eslint-disable no-unused-vars */
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import React, { useContext, useRef } from "react"
import { PlayerContext } from "./context/PlayerContext"


function App() {

  const {audioRef,track,songsData} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      {songsData.lenght !== 0 ?<> <div className="h-[90%] flex p-1">
        <Sidebar/>
        <Display/>
        </div>
        <Player/>
        </> 
     :null
      }
        <audio ref={audioRef} src={track ? track.file:""} preload="auto"></audio>
      </div>
  )
}

export default App