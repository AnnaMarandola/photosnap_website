import { withStyles } from "@material-ui/core/styles";
import Navbar from "../utils/Navbar";
import HeroBanner from "./HeroBanner";
import HomeStories from "./HomeStories";
import Features from "../utils/Features"; 
import Footer from "../utils/Footer";

const styles = (theme) => ({});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <HeroBanner cardId={"create-and-share"}/>
      <HeroBanner cardId={"beautifulstories"}/>
      <HeroBanner cardId={"designed-for-everyone"}/>
      <HomeStories />
      <Features />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(HomePage);
