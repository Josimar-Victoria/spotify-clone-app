import { useEffect, useState } from "react";
import "./App.css";
import Login from "./page/login/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null)
  //Ejecutar código basado en una condición
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token

    if(_token){
      setToken(_token)
    }
    console.log({token})
  },[]);
  return (
    <div className="app">
    {token?(
      <h1>musica</h1>
    ):(
      <Login />
    )
    }

    </div>
  );
}

export default App;
