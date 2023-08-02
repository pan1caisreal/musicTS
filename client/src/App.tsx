import React from 'react';
import Sidebar from "./Components/sideBar";
import {useTranslation} from "react-i18next"

const App = () => {
    const isAuth = false;
    const {t} = useTranslation()
    const menuItemAuth = [
        { text: t('musicTs'), icon: 'play_circle' },
        { text: t('Profile'), icon: 'account_circle' },
        { text: t('LikeSong'), icon: 'library_music' },
        { text: t('MyPlaylists'), icon: 'queue_music' },
        { text: t('LikeAlbum'), icon: 'album' },
        { text: t('Search'), icon: 'search' },
        { text: t('Logout'), icon: 'logout' }
    ];

    const menuItemNotAuth = [
        { text: t('musicTs'), icon: 'play_circle' },
        { text: t('Login'), icon: 'account_circle' },
        { text: t('Registration'), icon: 'person_add' },
        { text: t('About'), icon: 'info' }
    ];
  return (
      <div>
          {isAuth ? (
              <Sidebar items={menuItemAuth} />
          ) : (
              <Sidebar items={menuItemNotAuth} />
          )}

      </div>
  );
};

export default App;