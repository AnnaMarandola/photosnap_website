import { Fragment } from "react";
import {
  Slide,
  useScrollTrigger,
  Toolbar,
  IconButton,
  Link,
  BottomNavigation,
  Fab,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

import LOGO from "../../assets/shared/desktop/logo2.svg";
import { withStyles } from "@material-ui/core/styles";
import BackToTop from './BackToTop';
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    height: "3rem",
    width: "100%",
    color: "white",
    backgroundColor: "black",
    position: "fixed",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    zIndex: 98,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    width: "60%",
  },
  topButton: {
    color: "black",
    background: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    [theme.breakpoints.up("sm")]: {
        display: "none",
      },
  },

});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

const MobileNav2 = ({ classes, props }) => {
  return (
    <Fragment>
      <HideOnScroll {...props} >
        <BottomNavigation className={classes.root}>
          <Link href="/">
            <img src={LOGO} alt="logo" className={classes.logo} />
          </Link>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
             <MobileMenu />
            </IconButton>
          </Toolbar>
        </BottomNavigation>
      </HideOnScroll>
      <BackToTop>
        <Fab
          className={classes.topButton}
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </Fragment>
  );
};

export default withStyles(styles)(MobileNav2);
