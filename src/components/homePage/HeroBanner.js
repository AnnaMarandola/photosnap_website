import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ARROW from "../../assets/shared/desktop/arrow.svg";
import ARROW2 from "../../assets/shared/desktop/arrow2.svg";
import { cards } from "../utils/data/cardsData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      height: "fit-content",
      "&:nth-of-type(2n + 1)": {
        flexDirection: "row-reverse",
      },
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
    },
  },
  gradientLine: {
    width: "65%",
    height: "1rem",
    background: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    [theme.breakpoints.up("sm")]: {
      width: "2rem",
      height: "50%",
    },
  },
  textContainer: {
    heigth: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "70rem",
      flexDirection: "row",
    },
  },
  texts: {
    margin: "2rem",
    [theme.breakpoints.up("sm")]: {
      margin: "4rem",
    },
    [theme.breakpoints.up("md")]: {
      margin: "6rem",
    },
  },
  title: {
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  subtitle: {
    marginBottom: "4rem",
  },
  imgContainer: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  inviteButton: {
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },
  arrow: {
    marginLeft: "2rem",
  },
});

const Herobanner = ({ classes, cardId }) => {
  const card = cards.find((card) => card.id === cardId);
  return (
    <div className={classes.root} style={{ backgroundColor: card.color }}>

      <div className={classes.textContainer}>

        {card.color === "black" ? (
          <div className={classes.gradientLine} />
        ) : null}

        <div className={classes.texts}>
          <Typography
            variant="h1"
            className={classes.title}
            style={
              card.color === "black"
                ? { color: "white" }
                : { color: "black" }
            }
          >
            {card.title}
          </Typography>
          <Typography
            variant="body1"
            className={classes.subtitle}
            style={
              card.color === "black"
                ? { color: "white" }
                : { color: "black" }
            }
          >
            {card.subtitle}
          </Typography>
          {card.buttonText && (
            <Button
              style={
                card.color === "black"
                ? { color: "white" }
                : { color: "black" }
              }
              className={classes.inviteButton}
            >
              {card.buttonText}{" "}
              <img
                src={
                  card.color === "black"
                    ? ARROW2
                    : ARROW
                }
                alt="arrow"
                className={classes.arrow}
              />
            </Button>
          )}
        </div>
        
      </div>

      <div className={classes.imgContainer}>
        <img
          src={card.picture}
          sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
          alt={card.id}
          className={classes.image}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Herobanner);
