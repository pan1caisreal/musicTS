import {PlayerAction, PlayerActionTypes, PlayerState} from "../../types/player";

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    pause: true,
    volume: 50,
    playlist: null,
    nextTrack: null,
    previousTrack: null,
}


export const playerReducer = (state = initialState, action: PlayerAction) : PlayerState =>{
    switch (action.type){
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypes.PLAY:
            return {...state, pause: false}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.SET_PLAYLIST:
            return {...state, playlist: action.payload}
        case PlayerActionTypes.NEXT_TRACK:
            return {...state, nextTrack: action.payload, duration: 0, currentTime: 0, pause: false}
        case PlayerActionTypes.PREVIOUS_TRACK:
            return {...state, previousTrack: action.payload, duration: 0, currentTime: 0, pause: false}
        default:
            return state
    }
}