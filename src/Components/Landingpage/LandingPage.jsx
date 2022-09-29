import { Button, Typography } from "@mui/material";
import React from "react";
import "./LandingPage.css";
import image1 from "../../Image/image1.png";

export const LandingPage = () => {
  return (
    <div className="landing_page_main">
      <div className="heading_main">
        <Typography className="heading_top">Imagine if</Typography>
        <Typography className="heading_middle">Snapchat</Typography>
        <Typography className="heading_top">had events.</Typography>
      </div>
      <div className="heading_sub">
        <Typography className="heading_subtext">
          Easily host and share events with your friends across any social
          media.
        </Typography>
      </div>
      <div className="landing_image">
        <img src={image1} alt="image_1" />
      </div>
      <div>
        <Button variant="outlined" className="create_event_btn">
          🎉 Create my event
        </Button>
      </div>
    </div>
  );
};
