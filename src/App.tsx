import React, {useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing/Routing";
import {AuthContext} from "./Context/context";
function App() {
    const [isAuth, setIsAuth] = useState<boolean>(true)

  return (
    <div className="App">
      <AuthContext.Provider value={{isAuth,setIsAuth}} >
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
