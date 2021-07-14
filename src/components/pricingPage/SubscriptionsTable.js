import React from "react";
import {
  withStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import CHECK from "../../assets/pricing/desktop/check.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "6rem 0",
  },
  tableContainer: {
    textTransform: "uppercase",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      minWidth: "40rem",
    },
  },
  title: {
    textTransform: "uppercase",
    margin: "3rem 0",
    [theme.breakpoints.up("md")]: {
    },
  },
  head: {
    fontWeight: 600,
    borderBottom: "1.5px solid #000",
    fontSize: "1rem",
    textAlign: "center",
    "&:nth-of-type(1)": {
      textAlign: "left",
    },
  },
  features: {
    height: "5rem",
    fontWeight: 600,
    fontSize: "1rem",
  },
  checkCell: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "0 4rem",
    },
  },
});

const createData = (text, basic, pro, business) => ({
  text,
  basic,
  pro,
  business,
});

const rows = [
  createData("unlimited story posting", CHECK, CHECK, CHECK),
  createData("unlimited photo upload", CHECK, CHECK, CHECK),
  createData("embedding custom content", "", CHECK, CHECK),
  createData("customize metadata", "", CHECK, CHECK),
  createData("advanced metrics", "", "", CHECK),
  createData("photo downloads", "", "", CHECK),
  createData("search engine indexing", "", "", CHECK),
  createData("custom analytics", "", "", CHECK),
];

const SubscriptionsTable = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Compare
      </Typography>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell className={classes.head}>The features</TableCell>
              <TableCell className={classes.head}>Basic</TableCell>
              <TableCell className={classes.head}>Pro</TableCell>
              <TableCell className={classes.head}>Business</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.text}>
                <TableCell
                  className={classes.features}
                  component="th"
                  scope="row"
                >
                  {row.text}
                </TableCell>
                <TableCell className={classes.checkCell}>
                  {row.basic === CHECK && <img src={row.basic} alt="checked" />}
                </TableCell>
                <TableCell className={classes.checkCell}>
                  {row.pro === CHECK && <img src={row.pro} alt="checked" />}
                </TableCell>
                <TableCell className={classes.checkCell}>
                  {row.business === CHECK && (
                    <img src={row.business} alt="checked" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withStyles(styles)(SubscriptionsTable);
