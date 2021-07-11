import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BG from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import ARROW2 from "../../assets/shared/desktop/arrow2.svg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right ",
    backgroundSize: "cover",
    width: "100%",
    height: "35rem",
    [theme.breakpoints.up("sm")]: {
      height: "50rem",
    },
  },
  textContainer: {
    padding: "2rem",
    color: "white",

    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "8rem",
    },
  },
  intro: {
    textTransform: "uppercase",
    color: "white",
    marginBottom: "2rem",
  },
  title: {
    color: "white",
    marginBottom: "1rem",
  },
  sources: {
    display: "flex",
    margin: "2rem 0",
    [theme.breakpoints.up("sm")]: {},
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
      marginTop: "4rem"
  },
  arrow: {
      marginLeft: "2rem"
  }
});

const StoriesBanner = ({ classes }) => {
  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default withStyles(styles)(StoriesBanner);
