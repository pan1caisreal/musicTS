import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Image from '../assets/test_image_for_playlists.jpg'
import ImageModal from "../Components/ImageModal";


const PlayListPage = () => {
    const playlistData = {
        title: 'Chill Vibes',
        owner: 'MusicTs',
        coverUrl: Image,
    };

    const {playlistId} = useParams()
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () =>{
        setShowModal(!showModal)
    }
    return (
        <div className="playlistPage">
            <div className="playlistHeader">
                <div className="playlistCover" onClick={toggleModal}>
                    <img src={playlistData.coverUrl} alt={playlistData.title} />
                </div>
                <div className="playlistDetails">
                    <div className="playlistTitle">{playlistData.title}</div>
                    <div className="playlistOwner">By {playlistData.owner}</div>
                </div>
                {showModal &&(
                    <ImageModal imageUrl={playlistData.coverUrl} onClose={toggleModal} />
                )

                }
            </div>
            {/* Добавьте здесь список треков плейлиста */}
        </div>
    );
};

export default PlayListPage;