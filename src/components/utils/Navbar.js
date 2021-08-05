import { withStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/shared/desktop/logo.svg";
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "5rem",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: "40%",
    },
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      width: "120%",
    },
  },
  navLink: {
    textTransform: "uppercase",
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.lightGrey,
    },
  },
  inviteButton: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      padding: ".7rem 2rem",
      textTransform: "uppercase",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      fontWeight: 600,
      margin: "0 1rem",
      "&:hover": {
        backgroundColor: theme.palette.primary.lightGrey,
        color: theme.palette.primary.main,
      },
    },
  },
  burgerMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

function Navbar({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.LogoContainer}>
        <NavLink to="/">
          <img src={LOGO} alt="logo" className={classes.logo} />
        </NavLink>
      </div>
      <div className={classes.navContainer}>
        <NavLink variant="h6" className={classes.navLink} to="/stories">
          Stories
        </NavLink>
        <NavLink variant="h6" className={classes.navLink} to="/features">
          Features
        </NavLink>
        <NavLink variant="h6" className={classes.navLink} to="/pricing">
          Pricing
        </NavLink>
      </div>
      <div className={classes.inviteContainer}>
        <Button className={classes.inviteButton}>get an invite</Button>
      </div>
      <div className={classes.burgerMenu}>
        <MobileMenu />
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
