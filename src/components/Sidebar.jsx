import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Sidebar({ setMode }) {
  function handleMode() {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  }
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <Item text="HomePage" icon={<HomeIcon />} />
          <Item text="Pages" icon={<ArticleIcon />} />
          <Item text="Groups" icon={<GroupIcon />} />
          <Item text="MarketPlace" icon={<StorefrontIcon />} />
          <Item text="Friends" icon={<PersonIcon />} />
          <Item text="Settings" icon={<SettingsIcon />} />
          <Item text="Profile" icon={<AccountBoxIcon />} />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={handleMode} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

function Item({ text, icon }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default Sidebar;
