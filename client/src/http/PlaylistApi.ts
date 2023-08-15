import {Api} from "./index";
import {IPlaylist} from "../models/IPlaylist";

export const GetDefaultPlayList = async () : Promise<IPlaylist[]> =>{
    const {data} = await Api.get('MusicTsPlayList')
    return data
}

export const GetOneByIdPlaylist = async (id : string) : Promise<IPlaylist> => {
    const {data} = await Api.get('MusicTsPlayList/' + id)
    return data
}