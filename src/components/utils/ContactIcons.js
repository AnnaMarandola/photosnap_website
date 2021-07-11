import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../../assets/shared/desktop/arrow2.svg";
import { NavLink } from "react-router-dom";
import FACEBOOK from "../../assets/shared/desktop/facebook.svg";
import YOUTUBE from "../../assets/shared/desktop/youtube.svg";
import TWITTER from "../../assets/shared/desktop/twitter.svg";
import PINTEREST from "../../assets/shared/desktop/pinterest.svg";
import INSTAGRAM from "../../assets/shared/desktop/instagram.svg";

const styles = (theme) => ({

});

const ContactIcons = ({ classes }) => {
  return (
    <div className={classes.root}>
          <img src={FACEBOOK} alt="facebook" />
          <img src={YOUTUBE} alt="youtube" />
          <img src={TWITTER} alt="twitter" />
          <img src={PINTEREST} alt="pinterest" />
          <img src={INSTAGRAM} alt="instagram" />

        <NavLink className={classes.navlink} to="/">home</NavLink>

        <Button className={classes.inviteButton}>
          Get an invite
          <img srcSet={ARROW} alt="arrow" className={classes.arrow} />
        </Button>
      </div>
  );
};

export default withStyles(styles)(ContactIcons);
