import React from 'react';
import style from '../styles/profile.module.scss'
import {useAppSelector} from "../hooks/redux";
import SpotifyLogo from "../assets/SpotifyLogo.png"
import VkMusicLogo from "../assets/VkMusicLogo.png"
import AppleMusicLogo from "../assets/applemusic-logo.png"
import {SpotifyAuth} from "../http/SpotifyApi";

const Profile = () => {
    const {user} = useAppSelector(state => state.user)
    return (
        <div className={style.profile}>
            {user?.username}
            <div className={style.SpotifyLink} onClick={SpotifyAuth}>
                <img src={SpotifyLogo} style={{width: 64, height:64}}/>
                <div className={style.text}>Связать аккаунт Spotify с нашей площадкой</div>
            </div>
            <div className={style.AppleMusicLink}>
                <img src={AppleMusicLogo} style={{width: 64, height: 64}} alt="AppleMusicLogo"/>
                <div className={style.text}>Связать аккаунт AppleMusic с нашей площадкой</div>
            </div>
            <div className={style.VkMusicLinkLink}>
                <img src={VkMusicLogo} style={{width: 64, height: 64}} alt="VkMusicLogo"/>
                <div className={style.text}>Связать аккаунт VkMusic с нашей площадкой</div>
            </div>
        </div>
    );
};

export default Profile;