import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../../assets/shared/desktop/arrow2.svg";
import { stories } from "../utils/data/storiesData";



const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  storyContainer: {
    position: "relative",
    width: "100%",
    marginBottom: "-14rem",
    "&:hover": {
      animation: "$slideUp 1s",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
  },
  storyImage: {
    width: "100%",
    "&:hover": {
      animation: "$slideUp 1s",

      borderBottom: 'solid 1rem',
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    },
  },
  textContainer: {
    position: "relative",
    bottom: "12rem",
    margin: "2rem",
    "&:hover": {
      borderBottom: 'solid 1rem',
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    },
  },
  separator: {
    color: theme.palette.primary.lightGrey,
    margin: "1.5rem 0",
  },
  storyButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  "@keyframes slideUp": {
    from: { bottom: "0rem" },
    to: { bottom: "1rem" },
  },
});

const HomeStories = ({ classes }) => {
  return (
    <div className={classes.root}>
      {stories.map((story, index) => (
        <div key={index} className={classes.storyContainer}>
          <img
            src={story.picture}
            alt={story.title}
            sizes="(max-width: 320px) 280px,
            800px"
            className={classes.storyImage}
          />
          <div className={classes.textContainer}>
            <Typography variant="h3">{story.title}</Typography>
            <Typography variant="body1">{story.author}</Typography>
            <hr className={classes.separator} />
            <div className={classes.storyButtons}>
              <Button className={classes.buttonText}>Read Story</Button>
              <Button className={classes.buttonArrow}>
                <img srcSet={ARROW} alt="arrow" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(HomeStories);
