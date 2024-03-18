"use client";
import React from "react";
import Song from "./song";
import { useState } from "react";
export default function Search({onSongClick}) {
    const [newSongs, setNewSongs] = useState([]);
    const songs = [
        { Name: "Jatt Life", Singer: "Prince" },
        { Name: "Thug Life", Singer: "Varinder" },
        { Name: "Hold On", Singer: "Arjan" },
        
    ];

    const onSearch = (val) => {
        console.log(val.target.value);
        while (true)
        {
            if (val.target.value == "")
            {
                setNewSongs([]);
                break;
            }
            else
            {
                let temp = [];
                for (let i = 0; i < songs.length; i++)
                {
                    if (songs[i].Name.toLowerCase().includes(val.target.value.toLowerCase()))
                    {
                        temp.push(songs[i]);
                    }
                }
                setNewSongs(temp);
                break;
            }
        
        }
    }
    return (
        <div className="flex flex-col gap-0 h-full rounded-lg text-white">
        <form>
            <input type="text" className="p-3 w-full bg-slate-800" placeholder="Search for Songs, Albums, Artists, etc." onChange={(val)=>{onSearch(val)}}/>
        </form>
        <div className="bg-slate-700 w-full h-full flex flex-col">
        <h1 className="m-3 font-bold text-xl">Your Result</h1>
        <p className="m-3 text-sm">These are all the songs whose name is:</p>
        <div className='flex flex-row gap-5 p-2 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
        {newSongs.length==0 ? <p className="m-2 text-sm">No Results Found</p> :         newSongs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                    </div>
                    
        </div>
        </div>
    );
  }
  