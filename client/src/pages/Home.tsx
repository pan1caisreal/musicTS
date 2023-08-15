import React from 'react';
import {useAppSelector} from "../hooks/redux";
import PlaylistMusicTs from "../Components/playlistMusicTs";

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
                    <div>Плейлисты по жанрам</div>
                )
            }
        </div>
    );
};

export default Home;