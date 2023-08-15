import React, {useEffect} from 'react';
import Sidebar from "./Components/sideBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {checkAuth} from "./http/AuthApi";
import {useAppDispatch} from "./hooks/redux";
import {setUser} from "./store/reducers/UserSlice";
import Player from "./Components/Player";

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() =>{
        checkAuth().then(data =>{
            if(data !== null)
                dispatch(setUser(data))
        })
    },[])
  return (
      <BrowserRouter>
          <Sidebar />
          <div className="app">
              <AppRouter />
          </div>
          <Player />
      </BrowserRouter>
  );
};

export default App;