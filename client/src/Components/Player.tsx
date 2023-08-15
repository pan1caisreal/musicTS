import React, {useState} from 'react';
import styles from '../styles/player.module.scss'
import {IconButton} from "@material-ui/core";
import {
    PauseRounded,
    PlayArrowRounded,
    SkipNextRounded,
    SkipPreviousRounded,
    VolumeUpRounded
} from "@material-ui/icons";
import Progress from "./Progress";
import Volume from "./Volume";

const Player = () => {
    const [pause,setPause] = useState(false)
    const [isVolumeHovered, setIsVolumeHovered] = useState(false);
    const play = () =>{
        setPause(!pause)
    }

    const handleVolumeMouseEnter = () =>{
        setIsVolumeHovered(true)
    }

    const handleVolumeMouseLeave = () =>{
        setIsVolumeHovered(false)
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
                <div
                    className={styles.volume}
                    onMouseEnter={handleVolumeMouseEnter}
                    onMouseLeave={handleVolumeMouseLeave}
                >
                    <div className={styles.volumeInputContainer}>
                        <VolumeUpRounded className={styles.volumeIcon} fontSize="large" />
                        <Volume />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;