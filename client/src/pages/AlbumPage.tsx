import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ImageModal from "../Components/ImageModal";
import {GetAlbumById, GetAlbumsSong} from "../http/PlaylistApi";
import {IAlbum, ISong} from "../models/IPlaylist";
import '../styles/main.scss'
import {useActions, useAppSelector} from "../hooks/redux";
import dayjs from 'dayjs';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
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
    const [likeAlbum,setLikeAlbum] = useState(false)
    const [hover,setHover] = useState<number | null>(null)
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)
    const {pause} = useAppSelector(state => state.player)
    const [firstCLick, setFirstClick] = useState(false)
    const [firstClickAlbum, setFirstAlbumClick] = useState(false)
    const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null)
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

    const playAlbum = () =>{
        if(!firstClickAlbum){
            setPlayingIndex(0)
            setFirstClick(true)
            if(albumId)
                setActiveAlbumId(albumId)
            if(albumSongs) {
                SetPlaylist(albumSongs)
                play(albumSongs[0])
            }
            setFirstAlbumClick(true)
        }else{
            if(activeAlbumId === albumId){
                if(pause){
                    playTrack()
                }else{
                    pauseTrack()
                }
            }else{
                if(albumId)
                    setActiveAlbumId(albumId)
                if(albumSongs){
                    SetPlaylist(albumSongs)
                    play(albumSongs[0])
                }
            }
        }
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
                        <IconButton onClick={playAlbum}>
                            {activeAlbumId === albumId ? (
                                pause ? (
                                    <PlayCircleIcon sx={{fontSize: 80}} className="playAlbumIcon"/>
                                ) : (
                                    <PauseCircleIcon sx={{fontSize: 80}} className="playAlbumIcon"/>
                                )
                            ):(
                                    <PlayCircleIcon sx={{fontSize: 80}} className="playAlbumIcon"/>
                                )
                            }
                        </IconButton>
                        <IconButton onClick={() => setLikeAlbum(!likeAlbum)}>
                            {!likeAlbum ? (
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
                                if(!firstCLick) {
                                    play(track)
                                    if(albumId)
                                        setActiveAlbumId(albumId)
                                    SetPlaylist(albumSongs)
                                    setPlayingIndex(index)
                                    setFirstClick(true)
                                }else{
                                    if(playingIndex === index){
                                        if(pause){
                                            playTrack()
                                        }else{
                                            pauseTrack()
                                        }
                                    }else{
                                        if(albumId)
                                            setActiveAlbumId(albumId)
                                        play(track)
                                        SetPlaylist(albumSongs)
                                        setPlayingIndex(index)
                                    }
                                }

                            }}
                        >
                            <div className="track_image_container">
                                <div className="track_number">
                                    {hover === index ? (
                                        <IconButton>
                                            {playingIndex === index ? (
                                                pause ? (
                                                    <PlayCircleOutlineRoundedIcon className="track_number" style={{color:"rgb(30,215,96)"}}/>
                                                ) : (
                                                    <PauseCircleOutlineRoundedIcon className="track_number" style={{color:"rgb(30,215,96)"}}/>
                                                )
                                            ) : (
                                                <PlayCircleOutlineRoundedIcon className="track_number" />
                                            )}
                                        </IconButton>
                                    ) : (
                                        (playingIndex === index && !pause ? (
                                            <img width={14} height={14} alt={"gif"} src={"https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"}/>
                                        ) : (
                                            <div>{index + 1}</div>
                                        ))
                                    )}
                                </div>
                                <img src={`http://localhost:5000/${track.cover_url}`} alt={"track_cover"}
                                     className="track_image"/>
                            </div>
                            <div className="track_details">
                                <div className="track_artist">{track.artist}</div>
                                {playingIndex === index ? (
                                    <div className="track_title" style={{color:"rgb(30,215,96)"}}>{track.title}</div>
                                    ) : (
                                    <div className="track_title">{track.title}</div>
                                )

                                }
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