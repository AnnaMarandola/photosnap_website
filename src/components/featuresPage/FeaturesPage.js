import { withStyles } from "@material-ui/core/styles";
import Herobanner from "../homePage/HeroBanner";
import BetaBanner from "../utils/BetaBanner";
import Features from "../utils/Features";
import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

const styles = (theme) => ({});

const FeaturesPage = ({ classes, match }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Herobanner cardId={"features"}/>
      <Features />
      <BetaBanner />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(FeaturesPage);
