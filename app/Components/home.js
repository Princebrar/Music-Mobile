import React from 'react';
import Image from 'next/image';
import Song from './song';
export default function Home({onSongClick}) {
    const songs = [
        { Name: "Jatt Life", Singer: "Prince" },
        { Name: "Thug Life", Singer: "Varinder" },
        { Name: "Hold On", Singer: "Arjan" },
        
    ];

    return (
                <div className="flex flex-col h-full text-white rounded-lg ">
                    <div className='flex flex-col items-center bg-zinc-800'>
                    <h1 className="m-5 font-bold text-3xl text-center max-[700px]:text-xl max-[400px]:text-lg max-[700px]:m-3 max-[400px]:m-2">Home</h1>
                    </div>
                    <div className='flex flex-col p-3 bg-zinc-700 h-fit'>

                    <div className='p-4 h-fit'>
                    <h1 className="m-2 font-bold text-xl max-[700px]:text-base max-[400px]:text-sm max-[400px]:m-1">Recommended For you</h1>
                    <p className="p-2 text-sm font-light max-[400px]:text-xs max-[400px]:p-1">These are all the recommendations for you based on your past history:</p>
                    <div className='flex flex-row gap-5 p-2 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
                    {songs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                    </div>
                    </div>
                        <div className='flex flex-col p-3 bg-zinc-700 h-fit'>
                            <h1 className="m-2 font-bold text-xl max-[700px]:text-base max-[400px]:text-sm max-[400px]:m-1">Something New For you</h1>
                            <p className="p-2 text-sm font-light max-[400px]:text-xs max-[400px]:p-1">These are all the new songs that you may Like:</p>
                            <div className='flex flex-row gap-5 p-2 max-[700px]:gap-3 max-[400px]:gap-2'>
                                {songs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
  