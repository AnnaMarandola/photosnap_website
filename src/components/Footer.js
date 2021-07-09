import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../assets/shared/desktop/arrow.svg";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/shared/desktop/logo.svg";
import FACEBOOK from "../assets/shared/desktop/facebook.svg";
import YOUTUBE from "../assets/shared/desktop/youtube.svg";
import TWITTER from "../assets/shared/desktop/twitter.svg";
import PINTEREST from "../assets/shared/desktop/pinterest.svg";
import INSTAGRAM from "../assets/shared/desktop/instagram.svg";

const styles = (theme) => ({
    root: {
        display: "flex",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
    },
    contactContainer: {
        width: "30%",
    },
    navContainer: {
        display: "flex",
        flexDirection: "column",
        width: "40%",
    },
    buttonContainer: {
        width: "30%",
    }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.contactContainer}>
        <img src={LOGO} alt="photosnap" />
        <div className={classes.mediaIcons}>
          <img src={FACEBOOK} alt="facebook" />
          <img src={YOUTUBE} alt="youtube" />
          <img src={TWITTER} alt="twitter" />
          <img src={PINTEREST} alt="pinterest" />
          <img src={INSTAGRAM} alt="instagram" />
        </div>
      </div>

      <div className={classes.navContainer}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/stories">stories</NavLink>
        <NavLink to="/features">features</NavLink>
        <NavLink to="/pricing">pricing</NavLink>
      </div>

      <div className={classes.buttonContainer}>
        <Button>
          Get an invite
          <img srcSet={ARROW} alt="arrow" />
        </Button>
        <Typography variant="body1">
          Copyright 2019, All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
