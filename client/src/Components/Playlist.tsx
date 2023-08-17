import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {IAlbum} from "../models/IPlaylist";
import {GetAlbumsByGenre} from "../http/PlaylistApi";

const Playlist = () => {
    const {genre} = useParams()
    const [album, setAlbum] = useState<IAlbum[]>([])

    useEffect(() => {
        if(genre)
            GetAlbumsByGenre(genre).then((data) => setAlbum(data))
    },[])
    return (
        <div className="playlist">
            <div className="playlist_tag">{genre}</div>
            <div className="playlist_container">
                {album.map(album =>(
                    <Link key={album._id} className="playlist_card" to={`/album/${album._id}`}>
                        <div className="card_image_container">
                            <img src={'http://localhost:5000/album/' + album.cover_url} alt={album.cover_url} className="card_image" />
                        </div>
                        {album.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Playlist;