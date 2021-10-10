import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import SidebarOption from "./sidebarOption/SidebarOption";
import "./styles.css";

export default function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://www.triarii.com.co/wp-content/uploads/2020/08/spotify-branco-1-1.png"
        alt="logo"
      />
      <SidebarOption Icon={Home} title="Inicio" />
      <SidebarOption Icon={Search} title="Buscar" />
      <SidebarOption Icon={LibraryMusic} title="Tu Biblioteca" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}
