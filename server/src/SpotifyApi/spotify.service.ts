import {Injectable} from "@nestjs/common";
import {SpotifyApi} from "@spotify/web-api-ts-sdk";

@Injectable()

export class SpotifyService{
    constructor() {}

    async getTopTracks() : Promise<any>{
        try{
            const api = SpotifyApi.withClientCredentials('79b49ff133d54f7a8adcc374714f80f5','7892b14aaf224c73bec799501bb36429')
            const tracks = await api.playlists.getPlaylist('7iFPfffm9ntC7LVqVt4O6f')
            // const playlistName = tracks.name;
            // console.log("Название плейлиста:", playlistName);
            // const playlistUrl = tracks.external_urls.spotify;
            // console.log("Ссылка на плейлист:", playlistUrl);
            // const data = tracks.tracks.items
            // data.forEach((track, index) =>{
            //     const trackName = track.track.name
            //     console.log(`Трек ${index + 1}: ${trackName}`)
            //     const trackUrl = track.track.external_urls.spotify;
            //     console.log(`Ссылка на трек ${index + 1}: ${trackUrl}`);
            // })
            return tracks
        }catch (e){
            throw new Error('Failed to fetch top tracks')
        }
    }
}