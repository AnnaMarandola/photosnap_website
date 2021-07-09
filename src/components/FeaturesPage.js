import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({});

const FeaturesPage = ({ classes }) => {
  return (
    <div className={classes.root}>
    <h1>FeaturesPage</h1>
    </div>
  );
};

export default withStyles(styles)(FeaturesPage);
