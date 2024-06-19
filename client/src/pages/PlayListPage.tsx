import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ImageModal from "../Components/ImageModal";
import {GetOneByIdPlaylist} from "../http/PlaylistApi";
import {IPlaylist, ISong} from "../models/IPlaylist";
import '../styles/main.scss'
import {useActions} from "../hooks/redux";

const PlayListPage = () => {
    const {playlistId} = useParams()
    const [playlist, setPlaylist] = useState<IPlaylist>()
    const {SetPlaylist} = useActions()
    const [showModal, setShowModal] = useState(false)
    useEffect(() =>{
        if(playlistId !== undefined){
            GetOneByIdPlaylist(playlistId).then((data) => {
                setPlaylist(data)
            })
        }
    },[])
    const toggleModal = () =>{
        setShowModal(!showModal)
    }

    const {playTrack, pauseTrack, SetActiveTrack} = useActions()

    const play = (track: ISong) =>{
        SetActiveTrack(track)
        playTrack()
    }

    return (
        <div className="playlistPage">
            <div className="playlistHeader">
                <div className="playlistCover" onClick={toggleModal}>
                    <img src={'http://localhost:5000/playlist/' + playlist?.cover_url} alt={playlist?.title} className="playlist_image"/>
                </div>
                <div className="playlistDetails">
                    <div className="playlistTitle">{playlist?.title}</div>
                    <div className="playlistOwner">By {playlist?.author}</div>
                </div>
                {showModal &&(
                    <ImageModal imageUrl={'http://localhost:5000/playlist/' + playlist?.cover_url} onClose={toggleModal} />
                )}
            </div>
            {playlist?.songs.map((track, index) =>(
                <div key={index} className="playlist_track" onClick={() => {
                    play(track)
                    SetPlaylist(playlist?.songs)
                }}>
                    <div className="track_image_container">
                        <img src={`http://localhost:5000/${track.cover_url}`} alt={"track_cover"} className="track_image"/>
                        <div className="play_icon">&#9654;</div>
                    </div>
                    <div className="track_details">
                        <div className="track_artist">{track.artist}</div>
                        <div className="track_title">{track.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayListPage;