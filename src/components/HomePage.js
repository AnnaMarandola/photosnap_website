import { withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import PictureCard from "./PictureCard";
import HomeStories from "./HomeStories";
import Features from "./Features"; 
import Footer from "./Footer";

const styles = (theme) => ({});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <PictureCard cardId={"create-and-share"} />
      <PictureCard cardId={"beautifulstories"} />
      <PictureCard cardId={"designed-for-everyone"} />
      <HomeStories />
      <Features />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(HomePage);
