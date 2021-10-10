import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./styles.css";
export default function Hedaer() {
  const [{ user }] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Busacra Artista..." />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
