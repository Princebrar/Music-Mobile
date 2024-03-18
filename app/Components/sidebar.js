"use client";
import React, { useState } from "react";
export default function Sidebar({onViewSelect}) {
    const[view, setView] = useState("home");
    const handleViewSelect = (view) => {
        console.log(view);
        setView(view);
        onViewSelect(view);
    }
    return (
      <div className="flex h-full  max-[1000px]:h-fit w-full flex-col gap-3 text-black">
        <div className="bg-white w-full flex flex-row min-[1000px]:flex-col p-5 max-[1000px]:p-3 max-[700px]:p-2 rounded-2xl h-fit gap-2">
            <h2 className={`p-3 duration-300 ease-out rounded-lg max-[700px]:text-sm max-[700px]:p-1 max-[1000px]:text-base max-[1000px]:p-2 font-bold cursor-pointer ${view=="home" ? " bg-black text-white":"hover:bg-gray-200"}`} onClick={()=>{handleViewSelect("home")}}>
                Home
            </h2>
            <h2 className={`p-3 duration-300 ease-out rounded-lg max-[700px]:text-sm max-[700px]:p-1 max-[1000px]:text-base max-[1000px]:p-2 font-bold cursor-pointer ${view=="explore" ? " bg-black text-white":"hover:bg-gray-200"}`} onClick={()=>{handleViewSelect("explore")}}>
                Explore Music
            </h2>
            <h2 className={`p-3 duration-300 ease-out rounded-lg max-[700px]:text-sm max-[700px]:p-1 max-[1000px]:text-base max-[1000px]:p-2 font-bold cursor-pointer ${view=="user" ? " bg-black text-white":"hover:bg-gray-200"}`} onClick={()=>{handleViewSelect("user")}}>
                User Profile
            </h2>
            <h2 className={`p-3 duration-300 ease-out rounded-lg max-[700px]:text-sm max-[700px]:p-1 max-[1000px]:text-base max-[1000px]:p-2 font-bold cursor-pointer ${view=="search" ? " bg-black text-white":"hover:bg-gray-200"}`} onClick={()=>{handleViewSelect("search")}}>
                Search
            </h2>
        </div>
        <div className="bg-white w-full flex flex-col p-5 rounded-2xl h-full max-[1000px]:h-0 max-[1000px]:hidden">
            <h1 className="m-3 font-bold">My Library</h1>
            <p className="m-3 text-sm">This is Work in Progress....</p>
        </div>
      </div>
    );
  }
  