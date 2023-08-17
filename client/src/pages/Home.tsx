import React from 'react';
import {useAppSelector} from "../hooks/redux";
import PlaylistMusicTs from "../Components/playlistMusicTs";
import PlaylistByGenre from "../Components/PlaylistByGenre";

const Home = () => {
    const {isAuth} = useAppSelector(state => state.user)
    return (
        <div>
            {!isAuth ?
                (
                    <div>
                        <PlaylistMusicTs />
                    </div>
            ) : (
                    <div>
                        <PlaylistByGenre />
                    </div>
                )
            }
        </div>
    );
};

export default Home;