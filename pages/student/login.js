import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Grid, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  brand_name: {
    fontSize: "14px !important",
    color: "grey !important",
    fontWeight: "700 !important",
  },
  left_section: {
    background: "#fff",
    padding: "50px",
  },
  login_part: {
    marginTop: "100px",
  },
  title_welcome: {
    fontSize: "1.5rem !important",
    lineHeight: "2rem !important",
    fontWeight: "700 !important",
    marginTop: "1rem !important",
    marginBottom: "0 !important",
  },
  title_helper: {
    fontSize: "13px !important",
    color: "grey !important",
    cursor: "pointer",
  },
  input_section: {
    marginTop: "30px",
    marginBottom: "20px",
  },
  label: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
    color: "#651565 !important",
    marginBottom: "3px",
  },
  textField: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #651565 !important",
      borderRadius: "10px !important",
      fontSize: "12px",
      color: "silver",
    },
  },
  button: {
    backgroundColor: "#651565 !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
  },
  linkTxt: {
    color: "#651565 !important",
    cursor: "pointer",
  },
  right_section: {
    [theme.breakpoints.down("md")]: {
      padding: "50px",
    },
  },
  right_img: {
    width: "100% !important",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  right_content: {
    position: "relative !important",
  },
  right_text: {
    position: "absolute !important",
    bottom: "20px !important",
    color: "white !important",
    width: "43% !important",
    textAlign: "left !important",
    marginLeft: "30px !important",
    lineHeight: "45px !important",
    fontWeight: "normal !important",
    letterSpacing: "1px",
    [theme.breakpoints.down("md")]: {
      width: "80% !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70% !important",
      fontSize: "1.2rem !important",
      lineHeight: "35px !important",
    },
  },
}));
export default function Login() {
  const router = useRouter();
  const classes = useStyles();

  const studentLogin = () => {
    router.push("./dashboard");
  };

  return (
    <>
      <Grid container>
        <Grid item sm={12} md={4} lg={4}>
          <Grid className={classes.left_section}>
            <Typography
              className={classes.brand_name}
              variant="subtitle1"
              gutterBottom
              component="div"
              textAlign={"left"}
              // textAlign={"left"}
            >
              <FontAwesomeIcon icon={faChalkboard} /> kaizen Academy
            </Typography>
            <Grid className={classes.login_part}>
              <Typography
                className={classes.title_welcome}
                variant="h5"
                gutterBottom
                component="div"
                // textAlign={"left"}
              >
                Wellcome back
              </Typography>
              <Typography
                className={classes.title_helper}
                variant="subtitle1"
                gutterBottom
                component="div"
                // textAlign={"left"}
              >
                Login to continue
              </Typography>
              <Grid className={classes.input_section}>
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  className={classes.label}
                >
                  Email Address / Mobile
                </InputLabel>
                <TextField
                  name="email"
                  size="small"
                  fullWidth
                  className={classes.textField}
                />
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  onClick={studentLogin}
                >
                  Continue
                </Button>
                <Typography
                  className={classes.title_helper}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  sx={{ mt: 2 }}
                  // textAlign={"left"}
                >
                  By continuing, you agree to kaizen's{" "}
                  <span className={classes.linkTxt}>Condition of Use</span> and
                  <span className={classes.linkTxt}> Privacy Notice</span>.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} md={8} lg={8}>
          <Grid className={classes.right_section}>
            <img
              src="/images/login_bg.jpg"
              alt="user"
              className={classes.right_img}
            />
            <Grid className={classes.right_content}>
              <Typography
                className={classes.right_text}
                variant="h5"
                gutterBottom
                component="div"
                // textAlign={"left"}
              >
                "Education is most powerfull weapon which you can use to change
                the world""
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
