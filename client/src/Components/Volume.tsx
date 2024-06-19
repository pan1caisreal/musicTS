import React, {ChangeEvent} from 'react';
import {Slider} from "@mui/material";
import {useTheme} from "@mui/material/styles";

type VolumeProps = {
    left: number,
    right: number,
    onChangeValue: (e : ChangeEvent<HTMLInputElement>) => void
}


const Volume : React.FC<VolumeProps> =
    ({
        left,right,onChangeValue
    }) => {
    const handleChange = (event: Event, value: number | number[]) =>{
        if(typeof value === 'number'){
            const fakeEvent = {target: {value: value.toString()}} as React.ChangeEvent<HTMLInputElement>
            onChangeValue(fakeEvent)
        }
    }
    const theme = useTheme();
    const sliderStyles = {
        width: '80px',
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
    return (
        <div>
            <Slider
                aria-label="Volume"
                defaultValue={50}
                min={0}
                value={left}
                max={right}
                onChange={handleChange}
                sx={{
                    ...sliderStyles,
                    color:theme.palette.mode === 'light' ? '#fff' : 'rgba(0,0,0,0.87)',
                }}
            />
        </div>
    );
};

export default Volume;