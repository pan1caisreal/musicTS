
import React from 'react';
import Sidebar from "./Components/sideBar";


const App = () => {
    const menuItem = [
        {text: 'Home', icon: 'home'},
        {text: 'Profile', icon: 'account_circle'},
        {text: 'My playlist', icon: 'queue_music'},
        {text: 'Like Song', icon: 'library_music'},
        {text: 'Like Album', icon: 'album'},
        {text: 'Search',icon: 'search'}
    ]
  return (
      <div>
          <Sidebar items={menuItem} />
      </div>
  );
};

export default App;