import React from 'react';
import RussianRap from '../assets/russian_rap.jpg'
import ForeignRok from '../assets/Foreign_Rok.jpg'
import {Link} from "react-router-dom";

const PlaylistByGenre = () => {

    const Genre = [
        {id: 1, name: 'Русский хип-хоп', url: RussianRap},
        {id: 2, name: 'Иностранный рок', url: ForeignRok}
    ]

    return (
        <div className="playlist">
            <div className="playlist_tag">Playlists by Genre</div>
            <div className="playlist_container">
                {Genre.map(Genre =>(
                    <Link key={Genre.id} className="playlist_card" to={`Genre/${Genre.name}`}>
                        <div className="card_image_container">
                            <img src={Genre.url} alt={"Genre"} className="card_image"/>
                            <div>{Genre.name}</div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default PlaylistByGenre;