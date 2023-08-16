import React, {ChangeEvent} from 'react';
import styles from '../styles/player.module.scss'
import Slider from "@mui/material/Slider";
import {useTheme, styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
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
        const handleChange = (event: Event, value: number | number[]) =>{
            if(typeof value === 'number'){
                const fakeEvent = {target: {value: value.toString()}} as React.ChangeEvent<HTMLInputElement>
                onChange(fakeEvent)
            }
        }
        const theme = useTheme();

        const TinyText = styled(Typography)({
            fontSize: '0.75rem',
            opacity: 0.38,
            fontWeight: 500,
            letterSpacing: 0.2,
        });

        const formatDuration = (value:number) =>{
            const minute = Math.floor(value / 60)
            const secondLeft = value - minute * 60
            return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
        }

    return (
        <div className={styles.inputRange}>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={left}
                min={0}
                max={right}
                onChange={handleChange}
                sx={{
                    ...customSliderStyles,
                    color:theme.palette.mode === 'light' ? '#fff' : 'rgba(0,0,0,0.87)',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                }}
                className={styles.duration}
            >
                <TinyText className={styles.durationText}>{formatDuration(left)}</TinyText>
                <TinyText className={styles.durationText}>-{formatDuration(right - left)}</TinyText>
            </Box>
        </div>
    );
};

export default Progress;