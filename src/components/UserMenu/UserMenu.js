import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  email: {
    paddingRight: "10px",
  },
});
const UserMenu = ({ user, logout }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.email}>
        {user.email}
      </Typography>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
