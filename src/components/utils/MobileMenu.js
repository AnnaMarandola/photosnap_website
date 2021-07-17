import { useState, Fragment } from "react";
import {
  Fade,
  withStyles,
  Link,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme) => ({
  root: {
    justifyContent: "space-between",
  },
  separator: {
    width: "80%",
    border: "1px solid #dfdfdf",
    margin: "1rem 10%",
    // borderImageSlice: 1,
    // borderImageSource:
    //   "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
  },
  menuIcon: {
    color: "white",
    fontSize: 30,
    marginLeft: "3rem",
    position: "absolute",
    right: 0,
  },
  inviteButton: {
    textTransform: "uppercase",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: 600,
    padding: ".35rem 1rem",
    width: "80%",
    margin: "1rem 0", 
    marginLeft: "10%",
    "&:hover": {
      backgroundColor: theme.palette.primary.lightGrey,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      padding: ".7rem 2rem",
    },
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #black",
    borderRadius: "1rem",
    backgroundColor: "white",
    paddingBottom: "1rem",
    width: "100vh",
  },
  list: {},
})((props, classes) => (
  <Menu
    elevation={20}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: "auto",
    fontSize: "1.2em",
    fontWeight: 700,
    lineHeight: "2em",
    backgroundColor: theme.palette.primary.pureWhite,
    color: theme.palette.primary.main,
    justifyContent: "center",
  },
}))(MenuItem);

function MobileMenu({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        <MenuIcon
          className={classes.menuIcon}
        />
      </Button>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={1}
      >
        <Link variant="h6" className={classes.navLink} href="/stories">
          <StyledMenuItem className={classes.menuItem}>Stories</StyledMenuItem>
        </Link>
        <Link variant="h6" className={classes.navLink} href="/features">
          <StyledMenuItem className={classes.menuItem}>Features</StyledMenuItem>
        </Link>
        <Link variant="h6" className={classes.navLink} href="/pricing">
          <StyledMenuItem className={classes.menuItem}>Pricing</StyledMenuItem>
        </Link>
        <hr className={classes.separator} />
        <Button className={classes.inviteButton}>get an invite</Button>
      </StyledMenu>
    </Fragment>
  );
}

export default withStyles(styles)(MobileMenu);
