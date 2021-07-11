import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FACEBOOK from "../../assets/shared/desktop/facebook.svg";
import FACEBOOK1 from "../../assets/shared/desktop/facebook1.svg";
import YOUTUBE from "../../assets/shared/desktop/youtube.svg";
import YOUTUBE1 from "../../assets/shared/desktop/youtube1.svg";
import TWITTER from "../../assets/shared/desktop/twitter.svg";
import TWITTER1 from "../../assets/shared/desktop/twitter1.svg";
import PINTEREST from "../../assets/shared/desktop/pinterest.svg";
import PINTEREST1 from "../../assets/shared/desktop/pinterest1.svg";
import INSTAGRAM from "../../assets/shared/desktop/instagram.svg";
import INSTAGRAM1 from "../../assets/shared/desktop/instagram1.svg";

const styles = (theme) => ({
  root: {},

  facebookIcon: {
    backgroundImage: `url(${FACEBOOK1})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    width: "1.5rem",
    height: "1.5rem",
    "&:hover": {
      backgroundImage: `url(${FACEBOOK})`,
    },
  },

  youtubeIcon: {
    backgroundImage: `url(${YOUTUBE1})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    width: "1.5rem",
    height: "1.5rem",
    "&:hover": {
      backgroundImage: `url(${YOUTUBE})`,
    },
  },

  twitterIcon: {
    backgroundImage: `url(${TWITTER1})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    width: "1.5rem",
    height: "1.5rem",
    "&:hover": {
      backgroundImage: `url(${TWITTER})`,
    },
  },

  pinterestIcon: {
    backgroundImage: `url(${PINTEREST1})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    width: "1.5rem",
    height: "1.5rem",
    "&:hover": {
      backgroundImage: `url(${PINTEREST})`,
    },
  },

  instagramIcon: {
    backgroundImage: `url(${INSTAGRAM1})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    width: "1.5rem",
    height: "1.5rem",
    "&:nth-child(1)": {
      "&:hover": {
        backgroundImage: `url(${INSTAGRAM})`,
      },
    },
  },
});

const ContactIcons = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Button className={classes}>
        <span className={classes.facebookIcon} />
      </Button>
      <Button>
        <span className={classes.youtubeIcon} />
      </Button>
      <Button>
        <span className={classes.twitterIcon} />
      </Button>
      <Button>
        <span className={classes.pinterestIcon} />
      </Button>
      <Button>
        <span className={classes.instagramIcon} />
      </Button>
    </div>
  );
};

export default withStyles(styles)(ContactIcons);
