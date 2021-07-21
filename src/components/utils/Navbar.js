import { Link, withStyles, Button } from "@material-ui/core";
import LOGO from "../../assets/shared/desktop/logo.svg";
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "5rem",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {},
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
        <Link href="/">
          <img src={LOGO} alt="logo" className={classes.logo} />
        </Link>
      </div>
      <div className={classes.navContainer}>
        <Link variant="h6" className={classes.navLink} href="/stories">
          Stories
        </Link>
        <Link variant="h6" className={classes.navLink} href="/features">
          Features
        </Link>
        <Link variant="h6" className={classes.navLink} href="/pricing">
          Pricing
        </Link>
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
