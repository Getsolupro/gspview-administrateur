import {
  primaryColor,
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "./main";

const dashboardStyle = {
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  content: {
    padding: "2em",
    margin: "2em",
  },
  tableRowActor: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#dadada",
    },
  },
  contentActor: {
    minHeight: "100vh",
    marginBottom: "3em",
    marginTop: "3em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  cardActor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
  },
  addButton: {
    backgroundColor: primaryColor[0],
    color: "white",
    "&:hover": {
      backgroundColor: "#94142c",
    },
  },
};

export default dashboardStyle;
