const styles = theme => ({
  toolbar: {
    paddingLeft: 0
  },
  drawer: {
    maxWidth: "85%",
    width: theme.spacing.unit * 45
  },
  header: {
    height: "180px",
    color: "white",
    background: theme.palette.primary["500"],
    padding: "16px"
  },
  subheader: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  listItem: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  listItem: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  listItemSelected: {
    position: "relative",
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&:before": {
      content: '""',
      zIndex: -1,
      position: "absolute",
      height: "100%",
      width: "calc(100% - 8px)",
      left: 0,
      top: 0,
      backgroundColor: theme.palette.primary["50"],
      borderRadius: "0px 24px 24px 0px"
    },
    "&$open:hover:before": {
      backgroundColor: theme.palette.primary["100"]
    },
    "& $listIcon": {
      color: theme.palette.primary["500"]
    }
  },
  listItemText: {
    paddingLeft: "1px"
  },
  // these must be defined, even if empty so we can reference them in other nested rules
  listIcon: {},
  open: {}
});
export default styles;
