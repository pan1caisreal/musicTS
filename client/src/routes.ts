import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Profile from "./pages/Profile";
import LikeSong from "./pages/LikeSong";
import MyPlayLists from "./pages/MyPlayLists";
import LikeAlbum from "./pages/LikeAlbum";
import PlayListPage from "./pages/PlayListPage";
import Playlist from "./Components/Playlist";
import AlbumPage from "./pages/AlbumPage";

export const routes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/Login',
        Component: Login
    },
    {
        path: '/Registration',
        Component: Registration
    },
    {
        path: '/About',
        Component: About
    },
    {
        path: '/playlist/:playlistId',
        Component: PlayListPage
    }
]

export const AuthRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/Profile',
        Component: Profile
    },
    {
        path: '/LikeSong',
        Component: LikeSong
    },
    {
        path: '/MyPlaylists',
        Component: MyPlayLists
    },
    {
        path: '/LikeAlbum',
        Component: LikeAlbum
    },
    {
        path: '/Genre/:genre',
        Component: Playlist
    },
    {
        path: 'album/:albumId',
        Component: AlbumPage
    }
]