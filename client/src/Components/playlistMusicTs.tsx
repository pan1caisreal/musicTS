import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {GetDefaultPlayList} from "../http/PlaylistApi";
import {IPlaylist} from "../models/IPlaylist";

const PlaylistMusicTs = () => {

    const [playlist, setPlaylist] = useState<IPlaylist[]>([])
    useEffect(() => {
        GetDefaultPlayList().then((data) => {
            setPlaylist(data)
        })

    },[])
    return (
        <div className="playlist">
            <div className="playlist_tag">MusicTs playlists</div>
            <div className="playlist_container">
                {playlist.map(playlist =>(
                    <Link key={playlist._id} className="playlist_card" to={`playlist/${playlist._id}`}>
                        <div className="card_image_container">
                            <img src={'http://localhost:5000/playlist/' + playlist.cover_url} alt={playlist.cover_url} className="card_image" />
                        </div>
                        {playlist.title}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default PlaylistMusicTs;