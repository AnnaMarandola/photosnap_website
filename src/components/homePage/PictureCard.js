import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../../assets/shared/desktop/arrow.svg";
import { cards } from "../utils/data/cardsData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    }
  },
});

const PictureCard = ({ classes, cardId }) => {
  const card = cards.find((card) => card.id === cardId);
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h3">{card.title}</Typography>
        <Typography variant="body2">{card.subtitle}</Typography>
        <Button>
          {card.buttonText} <img srcSet={ARROW} alt="arrow" />
        </Button>
      </div>
      <div className={classes.imgContainer}>
        <img
          src={card.picture}
          sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
          alt={card.id}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(PictureCard);
