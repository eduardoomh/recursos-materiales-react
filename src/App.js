import React, { useState, useMemo, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import IdentityContext from "./utils/context/IdentityContext";
import { clearStorage, getStorage } from "./servicios/reutilizables/localStorage";
import { getToken, decodeToken, removeToken } from "./utils/reutilizables/token";
import './App.scss';
import Authenticated from "./pages/Authenticated/Authenticated";

function App() {
  const [identity, setIdentity] = useState(false);

  useEffect(() => {
    const token = getToken();
    if(!token){
      setIdentity(false);
    }else{
      setIdentity(decodeToken(token));
    }
  }, []);

  const logout = () => {
    setIdentity(false);
    clearStorage();
    removeToken();

  }

  const setLogin = (user) => {
    setIdentity(user);

  }

  const updateIdentity = (user) => {
    setIdentity(user);
  }

  const token = () => {
    return getStorage("token");
  }

  const identityData = useMemo(
    () => ({
      identity,
      updateIdentity,
      logout,
      setLogin,
      token
    }),
    [identity]
  );

  return (
    <>
      <div className="app">
        <ApolloProvider client={client}>
          <IdentityContext.Provider value={identityData}>
            {
              identity === false ? <Authenticated /> : <Navigation />
            }
          </IdentityContext.Provider>
        </ApolloProvider>
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
