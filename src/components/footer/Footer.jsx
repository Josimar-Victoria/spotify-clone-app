import React from "react";

import "./styles.css";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
        className="footer_albumLogo"
          src="	https://i.ytimg.com/vi/WRKYfRPTcy0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAtiisyvfZXxW1ZWLee30MRP1Osag"
          alt="cover song"
        />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__cente">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid items>
            <PlaylistPlay />
          </Grid>
          <Grid items>
            <VolumeDown />
          </Grid>
          <Grid items xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
