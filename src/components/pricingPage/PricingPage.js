import { withStyles } from "@material-ui/core/styles";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import BetaBanner from "../utils/data/BetaBanner";
import Herobanner from "../homePage/HeroBanner";

const styles = (theme) => ({});

const PricingPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Herobanner cardId={"pricing"} />
      <BetaBanner />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(PricingPage);
