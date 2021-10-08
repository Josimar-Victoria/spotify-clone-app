import React from "react";
import { loginUrl } from "../../spotify";
import "./styles.css";
export default function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
        alt="logo login"
      />
      <a href={loginUrl}>INICIAR SESIÓN CON SPOTYFY</a>
    </div>
  );
}
