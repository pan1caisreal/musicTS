import React, {useEffect} from 'react';
import Sidebar from "./Components/sideBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {checkAuth} from "./http/AuthApi";
import {useAppDispatch} from "./hooks/redux";
import {setUser} from "./store/reducers/UserSlice";

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
      </BrowserRouter>
  );
};

export default App;