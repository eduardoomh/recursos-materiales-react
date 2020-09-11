import React, { useState, useMemo } from 'react';
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation";
import IdentityContext from "./utils/context/IdentityContext";
import { clearStorage, getStorage } from "./servicios/reutilizables/localStorage";
import './App.scss';
import Authenticated from "./pages/Authenticated/Authenticated";

function App() {
  const [ identity, setIdentity ] = useState(getStorage("usuario") || false);


  const logout = () => {
    setIdentity(false);
    clearStorage();
  }

  const login = () => {
    setIdentity(getStorage("usuario"));
  }

  const token = () => {
    return getStorage("token");
  }

  const identityData = useMemo(
    () =>  ({
      identity,
      logout,
      login,
      token
    }),
    [identity]
  );

  return (
    <>
    <div className="app">
      <IdentityContext.Provider value={identityData}> 
        {
          identity === false ? <Authenticated /> : <Navigation />
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
