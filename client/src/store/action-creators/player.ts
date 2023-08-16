import {PlayerAction, PlayerActionTypes} from "../../types/player";
import {ISong} from "../../models/IPlaylist";

export const playTrack = (): PlayerAction =>{
    return {type: PlayerActionTypes.PLAY}
}
export const pauseTrack = (): PlayerAction =>{
    return {type: PlayerActionTypes.PAUSE}
}
export const SetDurationTrack = (payload: number): PlayerAction =>{
    return {type: PlayerActionTypes.SET_DURATION, payload}
}
export const SetActiveTrack = (payload: ISong): PlayerAction =>{
    return {type: PlayerActionTypes.SET_ACTIVE, payload}
}
export const SetVolumeTrack = (payload: number): PlayerAction =>{
    return {type: PlayerActionTypes.SET_VOLUME, payload}
}
export const SetCurrentTimeTrack = (payload: number): PlayerAction =>{
    return {type: PlayerActionTypes.SET_CURRENT_TIME, payload}
}

export const SetPlaylist = (payload: ISong[]) : PlayerAction =>{
    return {type: PlayerActionTypes.SET_PLAYLIST, payload}
}

export const NextTrack = (payload: ISong) : PlayerAction =>{
    return {type: PlayerActionTypes.NEXT_TRACK, payload}
}

export const PreviousTrack = (payload: ISong) : PlayerAction =>{
    return {type: PlayerActionTypes.PREVIOUS_TRACK, payload}
}