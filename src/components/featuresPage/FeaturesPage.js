import { withStyles } from "@material-ui/core/styles";
import BetaBanner from "../utils/data/BetaBanner";
import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

const styles = (theme) => ({});

const FeaturesPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <h1>FeaturesPage</h1>
      <BetaBanner />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(FeaturesPage);
