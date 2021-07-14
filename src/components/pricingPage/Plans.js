import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import PricingCards from "./PricingCards";


const styles = (theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
    },
    choice: {
        margin: "2rem",
        color: theme.palette.primary.main,
    }, 
    other: {
      margin: "2rem",
      color: theme.palette.primary.lightGrey,
    }
});

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 90,
    height: 38,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    color: theme.palette.primary.main,
    "&$checked": {
      transform: "translateX(53px)",
      color: theme.palette.primary.pureWhite,
      "& + $track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: " 2px solid black",
      },
    },
    "&$focusVisible $thumb": {
    },
  },
  thumb: {
    width: 35,
    height: 35,
  },
  track: {
    borderRadius: 52 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.primary.lightGrey,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {
  },
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



const Plans = ({ classes }) => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked( event.target.checked );
  };

  return (
    <>
    <div className={classes.root}>
    <Typography 
    variant="body2" 
    className={ isChecked ? classes.other : classes.choice }
    >
    Monthly
    </Typography>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={isChecked}
            onChange={handleChange}
            name="checkedB"
          />
        }
      />
      <Typography variant="body2" className={ isChecked ? classes.choice : classes.other }>Yearly</Typography>
    </div>
      <PricingCards checked={isChecked}/>
      </>
  );
};

export default withStyles(styles)(Plans);
