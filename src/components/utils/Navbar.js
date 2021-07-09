import { Link, withStyles, Button } from "@material-ui/core";
import LOGO from "../../assets/shared/desktop/logo.svg";

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
  navLink: {
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.lightGrey,
    },
  },
  inviteButton: {
    textTransform: "uppercase",
  }
});

function Navbar({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.LogoContainer}>
        <img src={LOGO} alt="logo" className={classes.logo} />
      </div>
      <div className={classes.navContainer}>
        <Link variant="h6" className={classes.navLink} href="/features">
          Features
        </Link>
        <Link variant="h6" className={classes.navLink} href="/pricing">
          Pricing
        </Link>
        <Link variant="h6" className={classes.navLink} href="/stories">
          Stories
        </Link>
      </div>
      <div className={classes.inviteContainer}>
        <Button className={classes.inviteButton}>get an invite</Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
