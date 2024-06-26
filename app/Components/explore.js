import Image from 'next/image'
import Song from './song'
export default function Explore({onSongClick,playing,tracks,song_playing_data,isFetching}) {
    return (
        <div className="flex flex-col text-white h-full rounded-lg">
            <div className='flex flex-col items-center bg-neutral-800'>
                    <h1 className="m-5 font-bold text-3xl text-center max-[700px]:text-xl max-[400px]:text-lg max-[700px]:m-3 max-[400px]:m-2">Explore</h1>
            </div>
            <div className="flex flex-col p-3 bg-neutral-700 h-fit">
            <h1 className="m-2 font-bold text-xl max-[700px]:text-base max-[400px]:text-sm max-[400px]:m-1">Our Top Playlists</h1>
            <div className='flex flex-row gap-5 p-2 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
            {isFetching ? (
                            <div className={`backdrop-blur-md backdrop-brightness-150 w-[180px] h-[200px]  text-white rounded-2xl animate-pulse flex flex-col align-middle text-center object-center p-3 pt-[80px] text-xl content-center max-[700px]:p-2 hover:scale-105 duration-300 ease-in-out`}>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            tracks.map((song, index) => (
                                <Song key={index} data={song} name={song.title_short} singer={song.artist.name} onSongClick={onSongClick} playing={playing} picture={song.album.cover_xl} song_playing_data={song_playing_data}/>
                            ))
                        )}
                    </div>
            </div>
            <div className="flex flex-col p-3 bg-neutral-700 h-full">
            <h1 className="m-2 font-bold text-xl max-[700px]:text-base max-[400px]:text-sm max-[400px]:m-1">Now in Spatial Audio</h1>
            <div className='flex flex-row gap-5 p-2 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
            {isFetching ? (
                            <div className={`backdrop-blur-md backdrop-brightness-150 w-[180px] h-[200px]  text-white rounded-2xl animate-pulse flex flex-col align-middle text-center object-center p-3 pt-[80px] text-xl content-center max-[700px]:p-2 hover:scale-105 duration-300 ease-in-out`}>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            tracks.map((song, index) => (
                                <Song key={index} data={song} name={song.title_short} singer={song.artist.name} onSongClick={onSongClick} playing={playing} picture={song.album.cover_xl} song_playing_data={song_playing_data}/>
                            ))
                        )}
                    </div>
            </div>
        </div>
    );
  }
  