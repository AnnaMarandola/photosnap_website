import { withStyles } from "@material-ui/core/styles";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";


const styles = (theme) => ({});

const PricingPage = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Navbar />
    <h1>PricingPage</h1>
    <Footer />
    </div>
  );
};

export default withStyles(styles)(PricingPage);
