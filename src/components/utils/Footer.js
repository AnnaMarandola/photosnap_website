import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../../assets/shared/desktop/arrow2.svg";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/shared/desktop/logo2.svg";
import ContactIcons from "./ContactIcons";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  contactContainer: {
    // width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3rem 0",
  },
  logo: {
    marginBottom: "2rem"
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "40%",
    textTransform: "uppercase",
    marginBottom: "5rem"
  },
  navlink: {
    color: theme.palette.primary.pureWhite,
    textDecoration: "none",
    lineHeight: "2rem",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.lightGrey,
    }
  },
  buttonContainer: {
    // width: "30%",
    textAlign: "center",
    marginBottom: "4rem"
  },
  inviteButton: {
    color: theme.palette.primary.pureWhite,
    marginBottom: "1rem"

  },
  arrow: {
    marginLeft: "2rem",
  },
  copyright: {
    color: theme.palette.primary.lightGrey,
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.contactContainer}>
        <img src={LOGO} alt="photosnap" className={classes.logo} />
        <ContactIcons />
      </div>

      <div className={classes.navContainer}>
        <NavLink className={classes.navlink} to="/">home</NavLink>
        <NavLink className={classes.navlink} to="/stories">stories</NavLink>
        <NavLink className={classes.navlink} to="/features">features</NavLink>
        <NavLink className={classes.navlink} to="/pricing">pricing</NavLink>
      </div>

      <div className={classes.buttonContainer}>
        <Button className={classes.inviteButton}>
          Get an invite
          <img srcSet={ARROW} alt="arrow" className={classes.arrow} />
        </Button>
        <Typography variant="body1" className={classes.copyright}>
          Copyright 2019, All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
