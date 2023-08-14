import React from 'react';
import Image from '../assets/test_image_for_playlists.jpg'
import {Link} from "react-router-dom";

const PlaylistMusicTs = () => {
    const playlistsMusicTs = [
        { id: 1, name: 'Chill Vibes', songs: 25 },
        { id: 2, name: 'Workout Jams', songs: 15 },
        { id: 3, name: 'Chill Vibes', songs: 25 },
        { id: 4, name: 'Workout Jams', songs: 15 },
        { id: 5, name: 'Chill Vibes', songs: 25 },
        { id: 6, name: 'Workout Jams', songs: 15 },
        { id: 7, name: 'Chill Vibes', songs: 25 },
        { id: 8, name: 'Workout Jams', songs: 15 },
        { id: 9, name: 'Chill Vibes', songs: 25 },
        { id: 10, name: 'Workout Jams', songs: 15 },
    ] // заглушка
    return (
        <div className="playlist">
            <div className="playlist_tag">MusicTs playlists</div>
            <div className="playlist_container">
                {playlistsMusicTs.map(playlist =>(
                    <Link key={playlist.id} className="playlist_card" to={`playlist/${playlist.id}`}>
                        <div className="card_image_container">
                            <img src={Image} alt={playlist.name} className="card_image" />
                            <div className="play_icon">&#9654;</div>
                        </div>
                        {playlist.name}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default PlaylistMusicTs;