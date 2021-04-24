import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paper: {
    width: "30%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    padding: "30px",
    marginBottom: "10px",
  },
  field: {
    margin: "10px 0px 10px 0px",
  },
  typography: {
    textAlign: "center",
    marginTop: "70px",
  },
  btn: {
    maxWidth: "150px",
    minWidth: "40px",
    margin: "0 auto",
  },
});
export default useStyles;
