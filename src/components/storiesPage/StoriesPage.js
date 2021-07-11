import { withStyles } from "@material-ui/core/styles";
import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";
import Stories from "./Stories";
import StoriesBanner from "./StoriesBanner";

const styles = (theme) => ({});

const StoriesPage = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Navbar/>
    <StoriesBanner />
    <Stories />
    <Footer/>
    </div>
  );
};

export default withStyles(styles)(StoriesPage);
