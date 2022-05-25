import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Grid, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  brand_name: {
    fontSize: "14px !important",
    color: "grey !important",
    fontWeight: "700 !important",
    fontFamily: "sans-serif !important",
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
    fontSize: "12px !important",
    color: "grey !important",
    cursor: "pointer",
    fontFamily: "sans-serif !important",
  },
  input_section: {
    marginTop: "30px",
    marginBottom: "12px",
  },
  label: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
    color: "#4c3f4c !important",
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
    fontWeight: "500 !important",
    fontSize: "13px !important",
  },
  linkTxt: {
    color: "#651565 !important",
    cursor: "pointer",
    fontFamily: "sans-serif !important",
  },
  right_section: {
    [theme.breakpoints.down("md")]: {
      padding: "10px",
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

  // Second Screen
  forget_password_helper: {
    fontSize: "12px !important",
    color: "#2eb377 !important",
    cursor: "pointer",
    fontFamily: "sans-serif !important",
  },
  title_helper_number: {
    fontSize: " 14px !important",
    fontWeight: "700 !important",
    fontFamily: "sans-serif !important",
  },
  title_helper_number_link: {
    fontSize: "13px !important",
    color: "#651565 !important",
    cursor: "pointer",
    fontWeight: "nomral !important",
    marginLeft: "10px",
    fontFamily: "sans-serif !important",
  },
  otp_button: {
    backgroundColor: "#2eb377 !important",
    textTransform: "capitalize !important",
    fontWeight: "500 !important",
    fontSize: "13px !important",
  },
}));
export default function Login() {
  const router = useRouter();
  const classes = useStyles();
  const [screenTime, setScreenTime] = useState(true);

  const handleContinue = () => {
    setScreenTime(!screenTime);
  };
  const studentLogin = () => {
    router.push("./dashboard");
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
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
              {screenTime && (
                <Typography
                  className={classes.title_helper}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  // textAlign={"left"}
                >
                  Login to continue
                </Typography>
              )}
              {!screenTime && (
                <Typography
                  className={classes.title_helper_number}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  sx={{ mt: 2 }}
                  // textAlign={"left"}
                >
                  +91 80473343743{" "}
                  <span
                    className={classes.title_helper_number_link}
                    onClick={() => setScreenTime(!screenTime)}
                  >
                    Change Login
                  </span>
                </Typography>
              )}

              <Grid className={classes.input_section}>
                {screenTime && (
                  <>
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
                  </>
                )}
                {!screenTime && (
                  <>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      className={classes.label}
                    >
                      Password
                    </InputLabel>
                    <TextField
                      name="email"
                      size="small"
                      fullWidth
                      className={classes.textField}
                    />
                  </>
                )}
              </Grid>

              <Grid>
                {screenTime && (
                  <>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.button}
                      onClick={handleContinue}
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
                      <span className={classes.linkTxt}>Condition of Use</span>{" "}
                      and
                      <span className={classes.linkTxt}> Privacy Notice</span>.
                    </Typography>
                  </>
                )}
                {!screenTime && (
                  <>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.button}
                      onClick={studentLogin}
                    >
                      Login
                    </Button>
                    <Typography
                      className={classes.forget_password_helper}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      textAlign={"left"}
                      sx={{ mt: 1 }}
                      // textAlign={"left"}
                    >
                      <span>Forget Password</span>
                    </Typography>
                  </>
                )}

                {!screenTime && (
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ mt: 1, mb: 2 }}
                  >
                    <Grid item lg={5} md={5}>
                      <hr />
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <Typography
                        className={classes.title_helper}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"center"}
                        sx={{ mt: 1 }}
                        // textAlign={"left"}
                      >
                        Or
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={5}>
                      <hr />
                    </Grid>
                  </Grid>
                )}

                {/* OTP section */}
                {!screenTime && (
                  <>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.otp_button}
                      onClick={studentLogin}
                    >
                      Get an OTP on your phone
                    </Button>
                    <Typography
                      className={classes.title_helper}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      textAlign={"center"}
                      sx={{ mt: 1 }}
                      // textAlign={"left"}
                    >
                      Manage and Data rates may apply.
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
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
                the world"
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
