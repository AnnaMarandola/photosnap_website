import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { plans } from "../utils/data/plansData";

const styles = (theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      width: "80%",
      margin: "3rem 10%",
    },
  },
  planCard: {
    width: "90%",
    padding: "2rem",
    height: "30rem",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.lightGrey,
    color: theme.palette.primary.main,
    marginBottom: "2rem",
    "&:nth-of-type(2)": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.pureWhite,
      height: "36rem",
      borderTop: "1rem solid grey",
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    },
    [theme.breakpoints.up("md")]: {
      margin: "3rem",
     
    },
  },
  planTitle: {
      marginBottom: "2rem",
  },

  planText: {
    color: "gray!important",
    marginBottom: "2rem",
    fontSize: "1.2rem"

  },
  planPrice: {
    fontSize: "3rem",
    fontWeight: 600,
  },
  duration: {
    color: "gray!important",
    marginBottom: "2rem",
  },
  blackButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.pureWhite,
    padding: "1rem 0",
    "&:hover": {
        backgroundColor: theme.palette.primary.lightGrey,
        color: theme.palette.primary.main,
        fontWeight: 700,
    }
  },
  whiteButton: {
    backgroundColor: theme.palette.primary.pureWhite,
    color: theme.palette.primary.main,
    padding: "1rem 0",
    "&:hover": {
        backgroundColor: theme.palette.primary.lightGrey,
        fontWeight: 700,
    }
  },
});

const PricingCards = ({ classes, checked }) => {
  return (
    <div className={classes.root}>
      {plans.map((plan, id) => (
        <div key={id} className={classes.planCard}>
          <Typography variant="h3" className={classes.planTitle}>{plan.title}</Typography>
          <Typography className={classes.planText}>{plan.text}</Typography>
          <Typography className={classes.planPrice}>
            $ {checked ? plan.yearlyPrice : plan.monthlyPrice}
          </Typography>
          <Typography className={classes.duration}>
            {checked ? "per year" : "per month"}
          </Typography>
          { plan.title === "Pro" ? 
          <Button className={classes.whiteButton}>
            pick plan
          </Button>
          : <Button className={classes.blackButton}> pick plan</Button>
          }
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(PricingCards);
