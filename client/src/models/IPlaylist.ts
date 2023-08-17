export interface IPlaylist{
    _id: string,
    title: string,
    author: string,
    songs: ISong[],
    cover_url: string
}

export interface ISong{
    _id: string,
    title: string,
    artist: string,
    text: string,
    album: string | boolean,
    listens_count: number,
    cover_url: string,
    audio_url: string,
    __v: string

}


export interface IAlbum{
    _id: string,
    title: string,
    artist: string,
    release_date: Date,
    cover_url: string,
    __v: string,
    color: number[],
}