import React from 'react';
import '../styles/main.scss';
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {logoutUser} from "../store/reducers/UserSlice";


const Sidebar = () => {
    const {isAuth} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    const menuItemAuth = [
        { path:"/", text: t('musicTs'), icon: 'play_circle' },
        { path:"/Profile",text: t('Profile'), icon: 'account_circle' },
        { path:"/LikeSong",text: t('LikeSong'), icon: 'library_music' },
        { path:"/MyPlaylists",text: t('MyPlaylists'), icon: 'queue_music' },
        { path:"/LikeAlbum",text: t('LikeAlbum'), icon: 'album' },
    ];

    const menuItemNotAuth = [
        { path:"/",text: t('musicTs'), icon: 'play_circle' },
        { path:"/Login",text: t('Login'), icon: 'account_circle' },
        { path:"/Registration",text: t('Registration'), icon: 'person_add' },
        { path:"/About",text: t('About'), icon: 'info' }
    ];

    const Logout = () =>{
        dispatch(logoutUser())
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className="sidebar">
            <ul>
                {isAuth ?
                    (
                    menuItemAuth.map((item, index) => (
                        <li key={index} onClick={() => navigate(item.path)}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <div className="TextMenu">{item.text}</div>
                        </li>
                    ))
                    ) : (
                        menuItemNotAuth.map((item, index) => (
                            <li key={index} onClick={() => navigate(item.path)}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <div className="TextMenu">{item.text}</div>
                            </li>
                        ))
                    )
                }
                {isAuth &&
                    <li
                        onClick={Logout}
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <div className="TextMenu">{t("Logout")}</div>
                    </li>
                }
                <li>
                    <LanguageSwitcher />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
