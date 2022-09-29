import React from "react";
import "./EventPage.css";
import event_image from "../../Image/event_image.png";
import { FaGreaterThan } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export const EventPage = () => {
  return (
    <div className="event_page_main">
      <div className="event_mian">
        <img className="img_main" src={event_image} />
      </div>
      <div className="event_heading_main">
        <Typography className="heading_title">Birthday Bash</Typography>
        <Typography className="heading_sub_title">Hosted by Elysia</Typography>
      </div>
      <Grid item xs={12} md={6}>
        <List>
          <ListItem
            className="list_item"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <FaGreaterThan className="gt_icon" />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar variant="rounded" className="avatar">
                <BiCalendar className="icon_calendar" />
              </Avatar>
            </ListItemAvatar>
            <div className="typo_date_time">
              <Typography className="typo_time">18 August 6:00PM</Typography>
              <Typography className="typo_date">
                to 19 August 1:00PM UTC +10
              </Typography>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem
            className="list_item"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <FaGreaterThan className="gt_icon" />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar variant="rounded" className="avatar">
                <HiOutlineLocationMarker className="icon_location" />
              </Avatar>
            </ListItemAvatar>
            <div className="typo_date_time">
              <Typography className="typo_time">Street name</Typography>
              <Typography className="typo_date">
                Suburb, State, Postcode
              </Typography>
            </div>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};
