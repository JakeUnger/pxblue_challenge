import React from "react";
// Material-UI components
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { listItems } from "./list";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  banner: {
    background:
      "linear-gradient(rgba(0, 123, 193, 1), rgba(0, 75, 158, 1)),url(https://cdn.pixabay.com/photo/2016/07/11/15/12/factory-1509853_1280.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundBlendMode: "soft-light",
    minHeight: theme.spacing.unit * 34,
    color: "#fff",
    padding: theme.spacing.unit * 8 + " 0",
    opacity: 0.8
  },
  bannerMain: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  content: {
    marginLeft: theme.spacing.unit * 10
  },
  h5: {
    margin: theme.spacing.unit * 8 + "0"
  },
  flexCenter: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  header: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    transform: "translateY(-100%)",
    transition: "all 0.5s ease-in-out"
  },
  top: {
    transform: "translateY(0%)"
  },
  noPadLeft: {
    paddingLeft: "0px"
  }
});

class Resources extends React.Component {
  state = {
    list: listItems,
    activeClass: "",
    opacity: 1
  };

  componentDidMount() {
    window.addEventListener("scroll", event => {
      this.setState({ opacity: window.scrollY });
      if (window.scrollY > 70) {
        this.setState({
          activeClass: "top"
        });
      } else {
        this.setState({
          activeClass: ""
        });
      }
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar
          className={
            classes.header + [this.state.activeClass ? classes.top : ""]
          }
        >
          <Toolbar>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <div style={{ flex: 1 }}>
              <Typography variant="h6" color="inherit">
                NPM Packages
              </Typography>
              <Typography
                className="sub-text"
                variant="body1"
                color="inherit"
              />
            </div>
            <IconButton color="inherit" />
          </Toolbar>
        </AppBar>
        <div className={classes.banner}>
          <Toolbar className={classes.bannerMain}>
            <div className={classes.flexCenter}>
              <IconButton color="inherit" />
              <IconButton color="inherit" />
            </div>
            <div
              className={classes.content}
              style={{ opacity: 1 - this.state.opacity / 200 }}
            >
              <Typography variant="h4" color="inherit">
                Power Xpert Blue Resources
              </Typography>

              <Typography variant="h6" color="inherit">
                NPM Packages
              </Typography>
            </div>
          </Toolbar>
        </div>
        <List component="nav">
          {this.state.list.map(function(item, i) {
            return (
              <ListItem key={`item-${i}`}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <div>
                  <List>
                    <ListItemText primary={item.resource_item} />
                    <ListItem href="https://www.npmjs.com/package/@pxblue/colors">
                      <img src="https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&amp;style=flat" />
                    </ListItem>
                    <ListItem
                      href="https://www.npmjs.com/package/@pxblue/colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&amp;style=flat" />
                    </ListItem>
                  </List>
                </div>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(Resources);