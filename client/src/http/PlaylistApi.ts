import {Api, authApi} from "./index";
import {IAlbum, IPlaylist, ISong} from "../models/IPlaylist";

export const GetDefaultPlayList = async () : Promise<IPlaylist[]> =>{
    const {data} = await Api.get('MusicTsPlayList')
    return data
}

export const GetOneByIdPlaylist = async (id : string) : Promise<IPlaylist> => {
    const {data} = await Api.get('MusicTsPlayList/' + id)
    return data
}

export const GetAlbumsByGenre = async (genre: string) : Promise<IAlbum[]> =>{
    const {data} = await authApi.get('album/genre/' + genre)
    return data
}

export const GetAlbumById = async (id: string) : Promise<IAlbum> =>{
    const {data} = await authApi.get('album/' + id)
    return data
}

export const GetAlbumsSong = async (id: string) : Promise<ISong[]> =>{
    const {data} = await authApi.get('songs/AlbumSong/' + id)
    return data
}