import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { features } from "./data/featuresData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5rem",
    marginBottom: "5rem",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "10%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      marginTop: "10rem",
    },
  },
  featureCard: {
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "8rem",
    [theme.breakpoints.up("md")]: {
      width: "28%",
    },
  },
  featureLogo: {
    width: "15%",
    marginBottom: "4rem",
    "&:nth-child(2)": {
      width: "25%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "10%",
    },
    [theme.breakpoints.up("md")]: {
      width: "15%",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
  },
});

const Features = ({ classes }) => {
  const path = window.location.pathname;

  const homepageFeatures = features.slice(0, 3);

  const featuresCards = path === "/features" ? features : homepageFeatures;

  return (
    <div className={classes.root}>

      {featuresCards.map((feature, index) => (
        <div key={index} className={classes.featureCard}>
          
          <img
            src={feature.picture}
            alt={feature.title}
            sizes="(max-width: 320px) 280px,800px"
            className={classes.featureLogo}
          />

          <div className={classes.textContainer}>
            <Typography variant="body2" className={classes.title}>
              {feature.title}
            </Typography>
            <Typography variant="body1">{feature.text}</Typography>
          </div>

        </div>
      ))}

    </div>
  );
};

export default withStyles(styles)(Features);
