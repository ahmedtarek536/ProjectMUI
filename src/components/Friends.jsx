import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Friends() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <FriendItem
        img="https://mui.com/static/images/avatar/1.jpg"
        name="Brunch this weekend?"
        title="Ali Connors "
        des="— I'll be in your neighborhood doing errands this…"
      />
      <FriendItem
        img="https://mui.com/static/images/avatar/2.jpg"
        name="Summer BBQ"
        title="to Scott, Alex, Jennifer "
        des="— Wish I could come, but I'm out of town this…"
      />
      <FriendItem
        img="https://mui.com/static/images/avatar/3.jpg"
        name="Oui Oui"
        title="Sandra Adams"
        des="— Do you have Paris recommendations? Have you ever…"
      />
    </List>
  );
}

function FriendItem({ img, name, title, des }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {title}
              </Typography>
              {des}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
