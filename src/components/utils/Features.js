import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { features } from "./data/featuresData";

const styles = (theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginTop: "12rem",
        marginBottom: "12rem",
    }
});

const Features = ({ classes }) => {
  return (
    <div className={classes.root}>
      {features.map((feature, index) => (
        <div key={index} className={classes.featureCard}>
          <img
            src={feature.picture}
            alt={feature.title}
            sizes="(max-width: 320px) 280px,
            800px"
            className={classes.featureLogo}
          />
          <div className={classes.textContainer}>
            <Typography variant="h4">{feature.title}</Typography>
            <Typography variant="body2">{feature.text}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Features);