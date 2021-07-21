import { withStyles } from "@material-ui/core/styles";
import BG from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import StoryBannerText from "./StoryBannerText";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
    width: "100%",
    height: "18rem",
    [theme.breakpoints.up("sm")]: {
      height: "50rem",
    },
  },
  textContainerMobile: {
    backgroundColor: "black",
    height: "fit-content",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
  },
  textContainerDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    },
 
  }
});

const StoriesBanner = ({ classes }) => {
  return (
    <>
    <div className={classes.root}>
      <div className={classes.textContainerDesktop}>
      <StoryBannerText />
      </div>
    </div>
    <div className={classes.textContainerMobile}>
      <StoryBannerText />
      </div>
    </>
  );
};

export default withStyles(styles)(StoriesBanner);
