"use client";
import React, { useState, useEffect, useRef } from "react";
import Home from "./Components/home";
import Search from "./Components/search";
import Explore from "./Components/explore";
import User from "./Components/user";
import Sidebar from "./Components/sidebar";

export default function Page() {
    const [playervisible, setPlayer] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [view1, setView] = useState("home");
    const audioRef = useRef(null);
    
    useEffect(() => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [playing]);

    const onViewSelect = (view) => {
        setView(view);
    };

    const onSongClick = () => {
        setPlayer(true);
    };

    const onPlayerClose = () => {
        console.log("Player Closed");
        setPlayer(false);
        setPlaying(false);
        audioRef.current.currentTime = 0;
    };
    const nextSong = () => {
        console.log("Next Song");
        audioRef.current.currentTime = 0;
    };
    const prevSong = () => {
        console.log("Previous Song");
        audioRef.current.currentTime = 0;
    };
    const togglePlay = () => {
        setPlaying(!playing);
    };

    return (
        <main className="bg-gray-300 flex flex-col h-screen w-full">
            <div className="flex flex-col h-screen max-[1000px]:h-fit">
                <div className={`flex flex-row h-8 fixed ease-out duration-300 ${!playervisible ? " scale-0" : "scale-100"}`}>
                    <audio ref={audioRef} src="./First Song.m4a" />
                <div className='flex flex-row bg-zinc-800 w-screen gap-4 content-center justify-center'>
                  <div className="flex flex-col w-6 h-6 absolute left-4 top-1 bg-red-600 rounded-md text-center object-center cursor-pointer" onClick={onPlayerClose}>
                    X
                  </div>
                <div className='flex w-fit cursor-pointer' onClick={prevSong}>
                    <svg className='w-fit h-full scale-90' fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                        <path d="M274.3,262.5L512,381.4V143.6L274.3,262.5z M36.6,262.5l237.7,118.9V262.5V143.6L36.6,262.5z M0,143.6v237.7h36.6V262.5
                            V143.6H0z"/>
                    </svg>
                </div>
                <div className='flex w-fit cursor-pointer'onClick={togglePlay} >
                  {playing ? <svg className='w-fit h-full p-1 rounded-full border-solid border-black border-2' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#FFFFFF"/>
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#FFFFFF"/>
</svg>:                    <svg className='w-fit h-full p-1 rounded-full border-solid border-black border-2' fill="#FFFFFF" width="800px" height="800px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"/>
                    </svg>}

                </div>
                <div className='flex w-fit cursor-pointer' onClick={nextSong}>
                    <svg className='w-fit h-full scale-90' fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                        <path d="M0,381.4l237.7-118.9L0,143.6V381.4z M237.7,262.5v118.9l237.7-118.9L237.7,143.6V262.5z M475.4,143.6v118.9v118.9H512
                            V143.6H475.4z"/>
                    </svg>
                </div>
            </div> </div>

          <div className={`flex flex-row max-[1000px]:flex-col h-full gap-4 p-3 ease-out duration-300 ${playervisible && "pt-9"}`}>
          <div className="flex w-1/5 max-[1000px]:w-full h-full max-[1000px]:h-fit">
              <Sidebar onViewSelect={onViewSelect}/>
          </div>
          <div className="bg-white w-full flex flex-col rounded-2xl h-full overflow-scroll">
              {view1=="home" && <Home onSongClick={onSongClick}/>}
              {view1=="explore" && <Explore onSongClick={onSongClick}/>}
              {view1=="user" && <User onSongClick={onSongClick}/>}
              {view1=="search" && <Search onSongClick={onSongClick}/>}
          </div>
          </div>
          </div>   
      </main>
    );
  }
  