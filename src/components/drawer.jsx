import React from "react";
import clsx from "clsx";
import Test from "./test";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import "./drawer.css";
const drawerWidth = 240;
let date = new Date();
const options = [
  { value: date.getFullYear() - 1, label: date.getFullYear() - 1 },
  { value: date.getFullYear() - 2, label: date.getFullYear() - 2 },
  { value: date.getFullYear() - 3, label: date.getFullYear() - 3 },
  { value: date.getFullYear() - 4, label: date.getFullYear() - 4 },
  { value: date.getFullYear() - 5, label: date.getFullYear() - 5 }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open] = React.useState(false);

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [genData, setGendata] = React.useState({
    firstName: "foo",
    lastName: "boo"
  });

  const handleChange_firstName = e => {
    setFname(e.target.value);
  };
  const handleChange_lastName = e => {
    setLname(e.target.value);
  };
  const _handleSubmit = () => {
    genData.push({
      firstName: fname,
      lastName: lname
    });
    setGendata(genData);
    console.log(genData);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <div style={{ width: "100%" }}>
            <Box display="flex">
              <Box flexGrow={1}>
                <div
                  // className={classes.search}
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                  flexGrow={1}
                >
                  <Select
                    placeholder="Search...."
                    // onChange={handleChange}
                    options={options}
                  />{" "}
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#14ff76",
                      color: "white",
                      verticalAlign: "center"
                    }}
                  >
                    + Add New
                  </Button>
                </div>
              </Box>
              <Box>
                <div>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <AccountCircle />
                  </IconButton>
                </div>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Test />
        {/* <div>
          <input
            type="text"
            onChange={e => handleChange_firstName(e)}
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={e => handleChange_lastName(e)}
            placeholder="Last Name"
          />
          <button onClick={_handleSubmit}> hi </button>

          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
              </tr>
              {genData.map((row, i) => (
                <tr key={i}>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </main>
    </div>
  );
}
