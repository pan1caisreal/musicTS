import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ImageModal from "../Components/ImageModal";
import {GetAlbumById, GetAlbumsSong} from "../http/PlaylistApi";
import {IAlbum, IPlaylist, ISong} from "../models/IPlaylist";
import '../styles/main.scss'
import {useActions, useAppSelector} from "../hooks/redux";
import dayjs from 'dayjs';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIconLike from '@mui/icons-material/FavoriteRounded';
import {IconButton} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';

const AlbumPage =  () => {
    const {albumId} = useParams()
    const [album, setAlbum] = useState<IAlbum>()
    const [albumSongs, setAlbumSongs] = useState<ISong[]>()
    const [colors, setColors] = useState<number[]>([])
    const [like,setLike] = useState(false)
    const [hover,setHover] = useState<number | null>(null)
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)
    const {pause} = useAppSelector(state => state.player)
    useEffect(() => {
        if (albumId) {
            GetAlbumById(albumId).then((data) => {
                setAlbum(data)
                setColors(data.color)
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

    const gradientStyleHeader = {
        background: `linear-gradient(to bottom, rgba(${colors[1]}, 1) 0%, rgba(${colors[0]}, 1) 100%)`
    };

    const gradientStyleBody = {
        background: `linear-gradient(to bottom, rgba(${colors[0]}, 1) 0%, rgba(0, 0, 0, 1) 100%)`
    }


    const getSongDurationInSeconds = (song: ISong) =>{
        const [minute, seconds] = song.duration.split(":").map(Number)
        return minute * 60 + seconds
    }

    const formatDuration = (durationInSeconds: number) =>{
        const minute = Math.floor(durationInSeconds / 60)
        const seconds = durationInSeconds % 60
        return `${minute}:${seconds < 10 ? '0' : ''}${seconds}`
    }


    const getTotalDuration = () =>{
        if(albumSongs){
            const totalDuration = albumSongs.reduce((total, song) => total + getSongDurationInSeconds(song), 0)
            return formatDuration(totalDuration)
        }
        return '0:00'
    }

    return (
        <div className="playlistPage bottom-space">
            <div className="playlistHeader" style={gradientStyleHeader}>
                <div className="playlistCover" onClick={toggleModal}>
                    <img src={'http://localhost:5000/album/' + album?.cover_url} alt={album?.title}
                         className="playlist_image"/>
                </div>
                <div className="playlistDetails">
                    <div className="playlistTitle">{album?.title}</div>
                    <div className="playlistOwner">By {album?.artist}</div>
                    <div
                        className="albumInfo">{dayjs(album?.release_date).format("YYYY")}
                        • {albumSongs?.length} треков • Длительность альбома {getTotalDuration()}
                    </div>
                </div>
                {showModal && (
                    <ImageModal imageUrl={'http://localhost:5000/album/' + album?.cover_url} onClose={toggleModal}/>
                )}
            </div>
            <div className="track_container" style={gradientStyleBody}>
                <div className="InfoTrackContainer">
                    <div className="playIcon">
                        <IconButton>
                            <PlayCircleIcon sx={{fontSize: 80}} className="playAlbumIcon"/>
                        </IconButton>
                        <IconButton onClick={() => setLike(!like)}>
                            {!like ? (
                                    <FavoriteRoundedIcon sx={{fontSize: 40}} className="favorite"/>
                                )
                                :(
                                    <FavoriteRoundedIconLike sx={{fontSize: 40}} className="favorite_like"/>
                                )
                            }
                        </IconButton>
                        <IconButton>
                            <MoreHorizRoundedIcon sx={{fontSize: 40}} className="MoreFeature"/>
                        </IconButton>
                    </div>
                    <div className="AlbumInfoSongs">
                        <div className="Info">
                            <TagRoundedIcon className="TrackIndex" />
                            <div className="TrackTitle">Название</div>
                            <AccessTimeRoundedIcon className="durationTrackIcon"/>
                        </div>
                    </div>
                </div>
                <div className="tracks">
                    {albumSongs?.map((track, index) => (
                        <div
                            key={index}
                            className="playlist_track"
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => {
                                play(track)
                                SetPlaylist(albumSongs)
                                setPlayingIndex(index)
                            }}
                        >
                            <div className="track_image_container">
                                <div className="track_number">
                                    {hover === index ? (
                                        <IconButton>
                                            {playingIndex === index ? (
                                                pause ? (
                                                    <PlayCircleOutlineRoundedIcon className="track_number" />
                                                ) : (
                                                    <PauseCircleOutlineRoundedIcon className="track_number" />
                                                )
                                            ) : (
                                                <PlayCircleOutlineRoundedIcon className="track_number" />
                                            )}
                                        </IconButton>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <img src={`http://localhost:5000/${track.cover_url}`} alt={"track_cover"}
                                     className="track_image"/>
                            </div>
                            <div className="track_details">
                                <div className="track_artist">{track.artist}</div>
                                <div className="track_title">{track.title}</div>
                            </div>
                            <div className="track_duration">{track.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="whitespace"></div>
        </div>
    );
};

export default AlbumPage;