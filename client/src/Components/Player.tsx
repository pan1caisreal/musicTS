import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/player.module.scss'
import {IconButton} from "@material-ui/core";
import {
    PauseRounded,
    PlayArrowRounded,
    SkipNextRounded,
    SkipPreviousRounded, VolumeDownRounded, VolumeOffRounded,
    VolumeUpRounded
} from "@material-ui/icons";
import Progress from "./Progress";
import Volume from "./Volume";
import {useActions, useAppSelector} from "../hooks/redux";



const Player = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const {pause, active, duration, volume, currentTime} = useAppSelector(state => state.player)
    const {pauseTrack, playTrack, SetCurrentTimeTrack, SetDurationTrack, SetVolumeTrack, SetActiveTrack} = useActions()
    const [previousValue, setPreviousVolume] = useState<number>(50)

    useEffect(() => {
        if(audioRef.current === null)
        {
            audioRef.current = new Audio()
            audioRef.current.src = `http://localhost:5000/audio/e0e3f8d2-879c-4b48-9756-3b8c9b2c5a45.mp3`
            audioRef.current.volume = volume / 100
        }
    },[])

    const play = () =>{
        if(pause && audioRef.current !== null){
            playTrack()
            audioRef.current.play().then()
        }else{
            if(audioRef.current !== null){
                pauseTrack()
                audioRef.current.pause()
            }
        }
    }

    const changeVolume = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(audioRef.current !== null)
            audioRef.current.volume = Number(e.target.value) / 100
        SetVolumeTrack(Number(e.target.value))
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

    return (
        <div className={styles.player}>
            <div className={styles.player_element}>
                <SkipPreviousRounded className={styles.PlayButton} fontSize="large"/>
                <IconButton onClick={play}>
                    {pause
                        ? <PlayArrowRounded className={styles.PlayButton} fontSize="large"/>
                        : <PauseRounded className={styles.PlayButton} fontSize="large"/>
                    }
                </IconButton>
                <SkipNextRounded className={styles.PlayButton} fontSize="large"/>
                <Progress left={0} right={0} onChange={()=>{}} />
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