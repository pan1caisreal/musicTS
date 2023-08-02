import React from 'react';
import Sidebar from "./Components/sideBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => {
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