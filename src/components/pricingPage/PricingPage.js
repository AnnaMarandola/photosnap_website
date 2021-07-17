import { withStyles } from "@material-ui/core/styles";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import BetaBanner from "../utils/BetaBanner";
import Herobanner from "../homePage/HeroBanner";
import SubscriptionsTable from "./SubscriptionsTable";
import Plans from "./Plans";
import MobileNav from "../utils/MobileNav";

const styles = (theme) => ({});

const PricingPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Herobanner cardId={"pricing"} />
      <Plans />
      <SubscriptionsTable />
      <BetaBanner />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default withStyles(styles)(PricingPage);
