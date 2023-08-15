import React, {ChangeEvent} from 'react';
import styles from '../styles/player.module.scss'
import Slider from "@mui/material/Slider";
import {useTheme} from "@mui/material/styles";
type ProgressProps = {
    left: number;
    right: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Progress: React.FC<ProgressProps> =
    ({
    left,right,onChange
    }) => {
        const customSliderStyles = {
            color: '#fff',
            height: 4,
            '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
                },
                '&.Mui-active': {
                    width: 20,
                    height: 20,
                },
            },
            '& .MuiSlider-rail': {
                opacity: 0.28,
            },
        };
    const theme = useTheme();
    const duration = 200;
    const [position, setPosition] = React.useState(32);
    return (
        <div className={styles.inputRange}>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                    ...customSliderStyles,
                    color:theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                }}
            />
        </div>
    );
};

export default Progress;