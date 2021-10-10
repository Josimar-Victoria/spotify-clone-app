import React from "react";
import Hedaer from "../hedaer/Hedaer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import { useDataLayerValue } from "../../DataLayer";
import "./styles.css";
import SoungRow from "../soungRow/SoungRow";
export default function Body() {
  const [{ discover_weekly }] = useDataLayerValue();

  console.log(discover_weekly);
  return (
    <div className="body">
      <Hedaer />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="coverImg" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* Lista de canciones */}
        {discover_weekly?.tracks.items.map((item) => (
          <SoungRow key={item.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}
