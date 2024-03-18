import React from "react";
import Image from "next/image";
import Song from "./song";
export default function User({onSongClick}) {
    const songs = [
        { Name: "Jatt Life", Singer: "Prince" },
        { Name: "Thug Life", Singer: "Varinder" },
        { Name: "Hold On", Singer: "Arjan" },
        
    ];
    return (
        <div className="flex flex-col gap-0 h-full rounded-lg text-white">
        <div className="bg-slate-900 w-full h-2/5 flex items-center p-3">
            <Image src="/Wow.jpeg" alt="user" width={200} height={200} className="float-left rounded-full aspect-square object-cover align-middle drop-shadow-lg"/>
            <div className="p-3 flex flex-col gap-1">
            <span className=" text-sm font-light">Profile</span>
            <h1 className="text-9xl font-bold items-center max-[700px]:text-4xl max-[400px]:text-lg max-[700px]:m-3 max-[400px]:m-2">Prince</h1>
            <h2 className=" text-sm font-light">@prince_brar</h2>
            <h2 className=" text-sm font-light">3-Dec-2004</h2>
            </div>
        </div>
        <div className="bg-slate-800 w-full h-1/5 flex flex-row items-center p-3 justify-evenly">
        <button className="bg-blue-500 hover:bg-blue-700 font-bold p-2 text-center rounded ease-out duration-300 w-1/5 max-[700px]:text-sm max-[400px]:text-xs">
            Edit Profile
        </button>
        <button className="bg-red-500 hover:bg-red-700 font-bold p-2 text-center rounded ease-out duration-300 w-1/5 max-[700px]:text-sm max-[400px]:text-xs">
            Delete Account
        </button>
        </div>
        <div className="bg-slate-700 w-full h-full flex flex-col">
        <h1 className="m-3 font-bold text-xl">My Playlists</h1>
        <p className="m-3 text-sm">These are all the playlists that you have created:</p>
        <div className='flex flex-row gap-5 p-2 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
        {songs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                    </div>
                    
        </div>
        </div>
    );
  }
  