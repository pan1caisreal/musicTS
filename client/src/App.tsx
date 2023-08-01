import React from 'react';
import Sidebar from "./Components/sideBar";

const App = () => {

    const isAuth = false;

    const menuItemAuth = [
        {text: "MusicTs", icon: "play_circle"},
        {text: 'Profile', icon: 'account_circle'},
        {text: 'Like Song', icon: 'library_music'},
        {text: 'My playlists', icon: 'queue_music'},
        {text: 'Like Album', icon: 'album'},
        {text: 'Search',icon: 'search'},
        {text: 'Logout', icon: 'logout'}
    ]

    const menuItemNotAuth = [
        {text: "MusicTs", icon: "play_circle"},
        {text: 'Login', icon: 'account_circle'},
        {text: 'Registration', icon: 'person_add'},
        {text: 'About us', icon: 'info'}
    ]
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