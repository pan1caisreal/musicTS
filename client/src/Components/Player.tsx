import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/player.module.scss'
import {IconButton} from "@mui/material";
import {
    PauseRounded,
    PlayArrowRounded,
    SkipNextRounded,
    SkipPreviousRounded, VolumeDownRounded, VolumeOffRounded,
    VolumeUpRounded
} from "@mui/icons-material";
import Progress from "./Progress";
import Volume from "./Volume";
import {useActions, useAppSelector} from "../hooks/redux";
import {ISong} from "../models/IPlaylist";



const Player = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const {pause, active, duration, volume, currentTime, playlist} = useAppSelector(state => state.player)
    const {pauseTrack, playTrack, SetCurrentTimeTrack, SetDurationTrack, SetVolumeTrack, SetActiveTrack, NextTrack, PreviousTrack} = useActions()
    const [previousValue, setPreviousVolume] = useState<number>(50)

    useEffect(() => {
        if(!audioRef.current)
        {
            audioRef.current = new Audio()
        }else{
            setAudio()
            play()
        }
    },[active])

    const nextTrack = (playlist : ISong[], active: ISong) =>{
        const activeIndex = playlist.findIndex(track => track === active)
        const nextIndex = activeIndex + 1
        if(nextIndex < playlist.length){
            return playlist[nextIndex]
        }
        return null
    }

    const SkipToPrevious = () =>{
        if(playlist && playlist.length > 0 && active){
            const previous = previousTrack(playlist, active)
            if(previous){
                PreviousTrack(previous)
                SetActiveTrack(previous)
            }
        }
    }

    const SkipToNext = () =>{
        if(playlist && playlist.length > 0 && active){
            const next = nextTrack(playlist, active)
            if(next){
                NextTrack(next)
                SetActiveTrack(next)
            }
        }
    }

    const previousTrack = (playlist: ISong[], active: ISong) =>{
        const activeIndex = playlist.findIndex(track => track === active)
        const previousIndex = activeIndex - 1
        if(previousIndex >= 0){
            return playlist[previousIndex]
        }
        return null
    }

    const setAudio = () =>{
        if(active && audioRef.current !== null){
            audioRef.current.src = `http://localhost:5000/${active.audio_url}`
            audioRef.current.volume = volume / 100
            audioRef.current.onloadedmetadata = () =>{
                if(audioRef.current !== null)
                    SetDurationTrack(Math.ceil(audioRef.current.duration))
            }

            audioRef.current.ontimeupdate = () =>{
                if(audioRef.current !== null)
                    SetCurrentTimeTrack(Math.ceil(audioRef.current.currentTime))
            }

            audioRef.current.onended = () =>{
                if(playlist && playlist.length > 0){
                    const next = nextTrack(playlist, active)
                    if(next){
                        NextTrack(next)
                        SetActiveTrack(next)
                    }
                }
            }
        }
    }

    const play = () =>{
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    playTrack();
                }).catch(error => {
                    console.error("Ошибка воспроизведения аудио:", error);
                });
            } else {
                audioRef.current.pause();
                pauseTrack();
            }
        }
    }

    const changeVolume = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(audioRef.current !== null)
            audioRef.current.volume = Number(e.target.value) / 100
        SetVolumeTrack(Number(e.target.value))
    }

    const changeCurrentTime = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(audioRef.current !== null)
            audioRef.current.currentTime = Number(e.target.value)
        SetCurrentTimeTrack(Number(e.target.value))
    }

    const offVolume = () =>{
        if(audioRef.current !== null)
        {
            setPreviousVolume(audioRef.current.volume)
            audioRef.current.volume = 0
        }
        SetVolumeTrack(0)
    }

    const UpdateVolume = () =>{
        if(audioRef.current !== null){
            audioRef.current.volume = Number(previousValue)
        }
        SetVolumeTrack(Number(previousValue) * 100)
    }

    if(!active){
        return null
    }

    return (
        <div className={styles.player}>
            <div className={styles.player_element}>
                <IconButton onClick={SkipToPrevious}>
                    <SkipPreviousRounded className={styles.PlayButton} fontSize="large" />
                </IconButton>
                <IconButton onClick={play}>
                    {pause
                        ? <PlayArrowRounded className={styles.PlayButton} fontSize="large"/>
                        : <PauseRounded className={styles.PlayButton} fontSize="large"/>
                    }
                </IconButton>
                <IconButton onClick={SkipToNext}>
                    <SkipNextRounded className={styles.PlayButton} fontSize="large"/>
                </IconButton>
                <div className={styles.trackInfo}>
                    <img src={`http://localhost:5000/${active?.cover_url}`} alt={"cover"}/>
                    <div className={styles.activeTrack}>
                        <strong>{active?.artist}</strong>
                        <div className={styles.titleTrack}>{active?.title}</div>
                    </div>
                </div>
                <Progress left={currentTime} right={duration} onChange={changeCurrentTime} />
                <div className={styles.volume}>
                    <div className={styles.volumeInputContainer}>
                        {volume >= 50 &&
                            <VolumeUpRounded className={styles.volumeIcon} fontSize="large" onClick={offVolume}/>
                        }
                        {volume < 50 && volume !== 0 &&
                            <VolumeDownRounded className={styles.volumeIcon} fontSize="large" onClick={offVolume}/>
                        }
                        {volume === 0 &&
                            <VolumeOffRounded className={styles.volumeIcon} fontSize="large" onClick={UpdateVolume}/>
                        }
                        <Volume left={volume} right={100} onChangeValue={changeVolume}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;