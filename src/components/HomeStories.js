import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../assets/shared/desktop/arrow.svg";
import { stories } from "./storiesData";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  storyContainer: {
    width: "25%",
  },
  storyImage: {
    width: "100%",
  },
  textContainer: {
    position: "relative",
    bottom: "12rem",
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
            <Typography variant="body2">{story.author}</Typography>
            <Button>
              Read Story <img srcSet={ARROW} alt="arrow" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(HomeStories);
