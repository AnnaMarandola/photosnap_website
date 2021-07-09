import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({});

const StoriesPage = ({ classes }) => {
  return (
    <div className={classes.root}>
    <h1>StoriesPage</h1>
    </div>
  );
};

export default withStyles(styles)(StoriesPage);
