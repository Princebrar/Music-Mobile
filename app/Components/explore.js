import Image from 'next/image'
import Song from './song'
export default function Explore({onSongClick}) {
    const songs = [
        { Name: "Jatt Life", Singer: "Prince" },
        { Name: "Thug Life", Singer: "Varinder" },
        { Name: "Hold On", Singer: "Arjan" },
        
    ];
    return (
        <div className="flex flex-col text-white h-full rounded-lg">
            <div className='flex flex-col items-center bg-neutral-800'>
                    <h1 className="m-5 font-bold text-3xl text-center">Explore</h1>
            </div>
            <div className="flex flex-col p-3 bg-neutral-700 h-full">
            <h1 className="m-2 font-bold text-xl">Our Top Playlists</h1>
            <div className='flex flex-row gap-5 p-2 overflow-scroll'>
            {songs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                    </div>
            </div>
            <div className="flex flex-col p-3 bg-neutral-700 h-full">
            <h1 className="m-2 font-bold text-xl">Now in Spatial Audio</h1>
            <div className='flex flex-row gap-5 p-2 overflow-scroll'>
            {songs.map((song, index) => (
                                    <Song key={index} name={song.Name} singer={song.Singer} onSongClick={onSongClick}/>
                                ))}
                    </div>
            </div>
        </div>
    );
  }
  