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
    margin: "6rem 0",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  tableContainer: {
    textTransform: "uppercase",
    width: "90%",
    margin: "auto",
  },
  title: {
    textTransform: "uppercase",
    marginLeft: "2rem",
    marginBottom: "1.5rem",
  },
  head: {
    fontWeight: 600,
    fontSize: "0.8rem",
    textAlign: "left",
    border: "none",
    color: "grey",
  },
  features: {
    fontWeight: 600,
    fontSize: "1rem",
    border: "none",
    borderTop: "1px solid grey",
  },
  row: {
    height: "2rem",
  },
  checkCell: {
    textAlign: "left",
    border: "none",
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

const TableMobile = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        The features
      </Typography>
      {rows.map((row) => (
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.header}>
              <TableRow key={row.text}>
                <TableCell className={classes.features} colspan={3}>
                  {row.text}
                </TableCell>
              </TableRow>
              <TableRow className={classes.row}>
                <TableCell className={classes.head}>Basic</TableCell>
                <TableCell className={classes.head}>Pro</TableCell>
                <TableCell className={classes.head}>Business</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={row.text}>
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
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default withStyles(styles)(TableMobile);
