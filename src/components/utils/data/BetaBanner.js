import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BETA from "../../../assets/shared/desktop/bg-beta.jpg";
import ARROW2 from "../../../assets/shared/desktop/arrow2.svg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BETA})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right ",
    backgroundSize: "cover",
    width: "100%",
    // height: "25rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {},
  },
  textContainer: {
    padding: "2rem",
    color: "white",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "8rem",
      width: "95%",
      marginLeft: "2.5%",
    },
  },
  title: {
      margin: "3rem",
    [theme.breakpoints.up("sm")]: {
      color: "white",
      margin: 0,
      width: "50%"
    },
  },
  readButton: {
    color: "white",
    minWidth: "15rem",
  },
  arrow: {
    marginLeft: "2rem",
  },
});

const BetaBanner = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          We're in Beta.
          <br /> Get your invite today!
        </Typography>

        <Button className={classes.readButton}>
          Get an invite
          <img
            src={ARROW2}
            alt="abstract beta background"
            className={classes.arrow}
          />
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(BetaBanner);
