"use client"

import { ChangeEventHandler, Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react"

export default function AudioPlayer() : React.ReactNode {
    const audioSource : 
        MutableRefObject<HTMLAudioElement | null> = useRef<HTMLAudioElement | null>(null);
    const progressBar :
        MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const animation = useRef<number>(0);
    const songLabel :
        MutableRefObject<HTMLParagraphElement |null> = useRef<HTMLParagraphElement | null>(null);

    const [track, setTrack] :
        [track: string, setDuration: Dispatch<SetStateAction<string>>] = useState('music/foreign-policy.mp3');
    const [duration, setDuration] :
        [duration: number, setDuration: Dispatch<SetStateAction<number>>] = useState(0);
    const [current, setCurrent] :
        [current: number, setCurrent: Dispatch<SetStateAction<number>>] = useState(0);
    const [playing, setPlaying] : 
        [currentTrack: boolean, setCurrentTrack: Dispatch<SetStateAction<boolean>>] = useState(false);

    //  update total duration
    useEffect(() => {
        if(audioSource.current) {
            const seconds: number = Math.floor(audioSource.current.duration);
            setDuration(seconds);
            if(progressBar.current)
                progressBar.current.max = `${seconds}`;
        }
    }, [audioSource?.current?.onloadedmetadata, audioSource?.current?.readyState]);

    const changeTrack = (song: string) => {
        if(audioSource?.current && song) {
            if(song === track) return;
            setTrack(song);
            if(songLabel?.current)
                songLabel.current.textContent = parseTrackName(song);
            setPlaying(false);
            (() => changeTrackPos)();
        }
    }

    const parseTrackName = (name: string): string => {
        if(name) {
            const oName: Array<string> = name.replace('music/','').replace('.mp3','').split('-');
            return oName.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                .reduce((acc: string, curr: string) => `${acc} ${curr}`);
        }
        return '';
    }

    const togglePlaying = () => {
        const play: boolean = playing;
        setPlaying(!playing);
        if(!play) {
            audioSource?.current?.play();
            animation.current = requestAnimationFrame(updateBar);
        } else {
            audioSource?.current?.pause();
            cancelAnimationFrame(animation.current);
        }
    }

    const updateBar = () => {
        if(progressBar?.current && audioSource?.current) {
            progressBar.current.value = `${audioSource.current.currentTime}`;
            setCurrent(audioSource.current.currentTime);
            console.log("Bar updated.");
            animation.current = requestAnimationFrame(updateBar);
        }
    }

    const formatTime = (sec: number): string => {
        const mins: number = (sec !== 0) ? Math.floor(sec / 60) : 0;
        const seconds: number = Math.floor(sec % 60);
        const secondsFormatted: string = (seconds < 10) ? `0${seconds}` : `${seconds}`;
        return `${mins}:${secondsFormatted}`;
    }

    const changeTrackPos: ChangeEventHandler<HTMLInputElement> = () => {
        if(audioSource?.current?.currentTime && progressBar?.current?.value)
            audioSource.current.currentTime = parseInt(progressBar.current.value);
        if(progressBar?.current?.value)
            setCurrent(parseInt(progressBar.current.value));
    }

    return <div className="text-white bg-black flex flex-col items-stretch align-center border-white rounded-lg border-2 w-fit lg:w-1/3 h-fit">
        <audio ref={audioSource} src={track}></audio>
        <div className="flex flex-col gap-2 border-gray border-b-2 py-4 px-4">
            <div className="flex items-center gap-4">
                <button className="border-white border-2 rounded-full w-10 h-10 text-center"
                    onClick={togglePlaying}>
                    {playing ? <PauseIcon /> : <PlayIcon />}
                </button>
                <p className="font-bold" ref={songLabel} >{parseTrackName(track)}</p>
            </div>
            <div className="flex gap-2">
                <p>{!isNaN(current) && formatTime(current)}</p>
                <input type="range" className="flex-1" defaultValue={0} ref={progressBar} onChange={changeTrackPos}/>
                <p>{!isNaN(duration) && formatTime(duration)}</p>
            </div>
            
        </div>
        <div className="overflow-scroll flex flex-col bg-gray-900 gap-2 p-2">
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/foreign-policy.mp3')}>Foreign Policy</button>
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/523.mp3')}>523</button>
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/courage-one.mp3')}>Courage One</button>
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/hollowed-place.mp3')}>Hollowed Place</button>
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/quantify.mp3')}>Quantify</button>
            <button className="text-start hover:text-golden" onClick={() => changeTrack('music/vuci.mp3')}>Vuci</button>
        </div>
    </div>
}

export function PlayIcon() {
    return <p className="text-xs">&#9654;</p>
}

export function PauseIcon() {
    return <p>&#9208;</p>
}