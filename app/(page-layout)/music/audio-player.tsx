"use client"

import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react"

export default function AudioPlayer() : React.ReactNode {
    const audioSource = useRef<HTMLAudioElement>(null);
    const progressBar = useRef<HTMLInputElement>(null);

    const [duration, setDuration] :
        [duration: number, setDuration: Dispatch<SetStateAction<number>>] = useState(0);
    const [current, setCurrent] :
        [current: number, setCurrent: Dispatch<SetStateAction<number>>] = useState(0);
    const [isPlaying, setPlaying] : 
        [currentTrack: boolean, setCurrentTrack: Dispatch<SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        if(audioSource.current) {
            const seconds = Math.floor(audioSource.current.duration);
            setDuration(seconds);
            if(progressBar.current)
                progressBar.current.max = `${seconds}`;
        }
    }, [audioSource?.current?.onloadedmetadata, audioSource?.current?.readyState]);

    const togglePlaying = () => {
        const playing = isPlaying;
        setPlaying(!isPlaying);
        if(!playing) {
            audioSource?.current?.play();
        } else {
            audioSource?.current?.pause();
        }
    }

    const doPlayAnimation = () => {
        if(progressBar?.current?.value && audioSource?.current?.currentTime)
            progressBar.current.value = `${audioSource.current.currentTime}`;
        changePosition();
    }

    const formatTime = (sec: number): string => {
        const mins: number = (sec !== 0) ? Math.floor(sec / 60) : 0;
        const seconds: number = Math.floor(sec % 60);
        const secondsFormatted: string = (seconds < 10) ? `0${seconds}` : `${seconds}`;
        return `${mins}:${secondsFormatted}`;
    }

    const changePosition = () => {
        if(audioSource?.current?.currentTime && progressBar?.current?.value)
            audioSource.current.currentTime = parseInt(progressBar.current.value);
        if(progressBar?.current?.value)
            setCurrent(parseInt(progressBar.current.value));
    }

    return <div className="text-white bg-black flex flex-col items-stretch align-center border-white rounded-lg border-2 w-1/6 h-48">
        <audio ref={audioSource} src="music.mp3"></audio>
        <div className="flex flex-col gap-2 border-gray border-b-2 py-2 px-4">
            <div className="flex items-center gap-4">
                <button className="border-white border-2 rounded-full w-10 h-10 text-center"
                    onClick={togglePlaying}>
                    {isPlaying ? <PauseIcon /> : <PlayIcon /> }
                </button>
                <p className="font-bold">Song Name</p>
            </div>
            <div className="flex gap-2">
                <p>{!isNaN(current) && formatTime(current)}</p>
                <input type="range" className="" defaultValue={0} ref={progressBar} onChange={changePosition}/>
                <p>{!isNaN(duration) && formatTime(duration)}</p>
            </div>
            
        </div>
        <div className="overflow-scroll flex flex-col">
            <button className="px-2 py-1 text-start hover:text-golden">Track 1</button>
            <button className="px-2 py-1 text-start hover:text-golden">Track 2</button>
            <button className="px-2 py-1 text-start hover:text-golden">Track 3</button>
            <button className="px-2 py-1 text-start hover:text-golden">Track 4</button>
        </div>
    </div>
}

export function PlayIcon() {
    return <p className="text-xs">&#9654;</p>
}

export function PauseIcon() {
    return <p>&#9208;</p>
}