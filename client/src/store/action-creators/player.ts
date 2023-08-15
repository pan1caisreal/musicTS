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