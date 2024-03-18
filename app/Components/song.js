"use client";
import Image from 'next/image';

export default function Song({ name, singer, onSongClick }) {
    return (
        <div className=' bg-black text-white rounded-2xl w-fit flex flex-col gap-2 p-3 drop-shadow-md hover:drop-shadow-xl hover:scale-105 duration-300 ease-out' onClick={onSongClick}>
            <div>
                <Image src="/Wow.jpeg" alt="album1" width={200} height={200} className=' rounded-xl aspect-square object-cover' />
            </div>
            <div>
                <h2 className=' text-xl font-semibold'>{name}</h2>
                <h3 className=' text-sm font-medium'>By {singer}</h3>
                <p className='text-sm font-light'>Wowowow</p>
            </div>
        </div>
    );
}
