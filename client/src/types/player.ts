import {ISong} from "../models/IPlaylist";

export interface PlayerState{
    active: null | ISong;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
    playlist: null | ISong[];
    nextTrack: ISong | null;
    previousTrack: ISong | null;
}

export enum PlayerActionTypes{
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_DURATION = "SET_DURATION",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_VOLUME = "SET_VOLUME",
    SET_PLAYLIST = "SET_PLAYLIST",
    NEXT_TRACK = "NEXT_TRACK",
    PREVIOUS_TRACK = "PREVIOUS_TRACK",
}

interface PlayAction {
    type: PlayerActionTypes.PLAY
}

interface PauseAction {
    type: PlayerActionTypes.PAUSE
}

interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE
    payload: ISong
}

interface SetPlaylist {
    type: PlayerActionTypes.SET_PLAYLIST
    payload: ISong[]
}

interface SetDurationAction {
    type: PlayerActionTypes.SET_DURATION
    payload: number
}

interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME
    payload: number
}

interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME
    payload: number
}

interface NextTrack {
    type: PlayerActionTypes.NEXT_TRACK
    payload: ISong
}

interface PreviousTrack {
    type: PlayerActionTypes.PREVIOUS_TRACK
    payload: ISong
}

export type PlayerAction =
    PlayAction |
    PauseAction |
    SetActiveAction |
    SetCurrentTimeAction |
    SetVolumeAction |
    SetDurationAction |
    SetPlaylist |
    NextTrack |
    PreviousTrack
