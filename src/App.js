import React, { useState, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation";
import IdentityContext from "./utils/context/IdentityContext";
import './App.scss';
import Authenticated from "./pages/Authenticated/Authenticated";

function App() {
  const [ isIdentity, setIsIdentity ] = useState(false);
  const history = useHistory();

  const logout = () => {
    setIsIdentity(false);
  }

  const login = () => {
    setIsIdentity(true);
  }

  const identityData = useMemo(
    () =>  ({
      isIdentity,
      logout,
      login
    }),
    [isIdentity]
  );

  return (
    <>
    <div className="app">
      <IdentityContext.Provider value={identityData}> 
        {
          isIdentity !== true ? <Authenticated /> : <Navigation />
        }
      </IdentityContext.Provider>    
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover 
    />
    </div>

   </>
  );
}

export default App;
