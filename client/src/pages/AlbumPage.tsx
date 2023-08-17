import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ImageModal from "../Components/ImageModal";
import {GetAlbumById, GetAlbumsSong} from "../http/PlaylistApi";
import {IAlbum, IPlaylist, ISong} from "../models/IPlaylist";
import '../styles/main.scss'
import {useActions} from "../hooks/redux";
import dayjs from 'dayjs';

const AlbumPage =  () => {
    const {albumId} = useParams()
    const [album, setAlbum] = useState<IAlbum>()
    const [albumSongs, setAlbumSongs] = useState<ISong[]>()
    const [colors, setColors] = useState<number[]>([])
    useEffect(() => {
        if (albumId) {
            GetAlbumById(albumId).then((data) => {
                setAlbum(data)
                setColors(data.color)
                console.log(colors)
            })
            GetAlbumsSong(albumId).then((data) => setAlbumSongs(data))
        }
    }, []);
    const {SetPlaylist} = useActions()
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const {playTrack, pauseTrack, SetActiveTrack} = useActions()

    const play = (track: ISong) => {
        SetActiveTrack(track)
        playTrack()
    }

    const gradientStyle = {
        background: `linear-gradient(to bottom, rgba(${colors[1]}, 1) 0%, rgba(${colors[0]}, 1) 100%)`
    };

    return (
        <div className="playlistPage">
            <div className="playlistHeader" style={gradientStyle}>
                <div className="playlistCover" onClick={toggleModal}>
                    <img src={'http://localhost:5000/album/' + album?.cover_url} alt={album?.title}
                         className="playlist_image"/>
                </div>
                <div className="playlistDetails">
                    <div className="playlistTitle">{album?.title}</div>
                    <div className="playlistOwner">By {album?.artist}</div>
                    <div
                        className="albumInfo">{dayjs(album?.release_date).format("YYYY")} • {albumSongs?.length} треков
                    </div>
                </div>
                {showModal && (
                    <ImageModal imageUrl={'http://localhost:5000/album/' + album?.cover_url} onClose={toggleModal}/>
                )}
            </div>
            <div className="track_container">
                <div>
                    123
                </div>
            </div>
            {albumSongs?.map((track, index) => (
                <div key={index} className="playlist_track" onClick={() => {
                    play(track)
                    SetPlaylist(albumSongs)
                }}>
                    <div className="track_image_container">
                        <div className="track_number">{index + 1}</div>
                        <img src={`http://localhost:5000/${track.cover_url}`} alt={"track_cover"}
                             className="track_image"/>
                        <div className="play_icon">&#9654;</div>
                    </div>
                    <div className="track_details">
                        <div className="track_artist">{track.artist}</div>
                        <div className="track_title">{track.title}</div>
                    </div>
                    {/*<FavoriteRoundedIcon className="favorite"/>*/}
                </div>
            ))}
        </div>
    );
};

export default AlbumPage;