import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ARROW2 from "../../assets/shared/desktop/arrow2.svg";

const styles = (theme) => ({
  textContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      padding: "2rem",
      color: "white",
      width: "80%",
      paddingTop: "11rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
      minWidth: "45rem",
      paddingTop: "8rem",
      paddingLeft: "8rem",
    }
  },
  intro: {
    textTransform: "uppercase",
    color: "white",
    marginBottom: "2rem",
  },
  title: {
    color: "white",
    marginBottom: "1rem",
    textTransform: "uppercase",
    maxWidth: "20rem",
  },
  sources: {
      display: "flex",
      margin: "2rem 0",
      color: "white"
  },
  date: {
    color: theme.palette.primary.lightGrey,
    marginRight: "1rem",
  },
  text: {
    color: theme.palette.primary.lightGrey,
  },
  readButton: {
      color: "white",
      marginTop: "4rem",

  },
  arrow: {
      marginLeft: "2rem",
  }
});

const StoriesBannerText = ({ classes }) => {
  return (
      <div className={classes.textContainer}>
        <Typography className={classes.intro}>
          Last month's featured story
        </Typography>
        <Typography variant="h1" className={classes.title}>
          Hazy full moon of Appalachia
        </Typography>
        <div className={classes.sources}>
          <Typography className={classes.date}>March 2nd 2020</Typography>
          <Typography variant="body2"> by John Appleseed</Typography>
        </div>
        <Typography className={classes.text}>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </Typography>
        <Button className={classes.readButton}>
          read the story<img src={ARROW2} alt="arrow" className={classes.arrow} />
        </Button>
      </div>
  );
};

export default withStyles(styles)(StoriesBannerText);
