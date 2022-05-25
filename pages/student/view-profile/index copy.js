import Navbar from "../../../components/navbar";
import Sidebar from "../sidebar";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  form: {
    background: "#fff",
    // padding: "30px",
    marginTop: "30px",
    borderRadius: "10px",
  },
  userImg: {
    borderRadius: "10px",
  },
  title: {
    fontSize: "0.990rem!important",
    fontWeight: "500 !important",
    color: "#6792bf !important",
    lineHeight: "2.5rem !important",
    borderLeft: "3px solid #77aaec",
    paddingLeft: " 10px",
  },
  text: {
    fontSize: "0.990rem!important",
    color: "#7c7c7c !important",
    fontWeight: "500 !important",
    lineHeight: "2.5rem !important",
  },
  name_content: {
    marginTop: "30px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "500",
    color: " #484444",
    fontFamily: "sans-serif",
    marginBottom: "0 !important",
  },
  email: {
    fontSize: "14px",
    color: " #696464",
    fontFamily: "sans-serif",
  },
  content: {
    marginTop: "20px !important",
    padding: "0 30px !important",
  },
  content_second: {
    marginTop: "5px !important",
    padding: "0 30px !important",
  },
  sub_title: {
    fontSize: "12px !important",
    fontFamily: "sans-serif !important",
    fontWeight: "500 !important",
    color: "#a3a2a2 !important",
    letterSpacing: "1px !important",
    textAlign: "left",
  },
  sub_value: {
    fontSize: "18px !important",
    fontFamily: "sans-serif !important",
    color: "#4a4646 !important",
    textAlign: "left",
  },
}));

const ViewProfile = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? <Sidebar /> : ""}
      <div
        className="px-4 pt-20 h-screen text-slate-800"
        style={sidebarOpen ? { paddingLeft: "18rem" } : { paddingLeft: "1rem" }}
      >
        <div className=" rounded-t-lg p-4">
          <Box
            className={classes.form}
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "25ch" },
              boxShadow: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container>
              <Grid item lg={6} md={6}>
                <div>
                  <img
                    className={classes.userImg}
                    src="/images/user.jpg"
                    alt="user"
                  />
                </div>
              </Grid>
              <Grid item lg={6} md={6}>
                <div className={classes.name_content}>
                  <Typography
                    className={classes.name}
                    variant="h5"
                    gutterBottom
                    component="div"
                    textAlign={"center"}
                  >
                    Dima Blover
                  </Typography>
                  <Typography
                    className={classes.email}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"center"}
                  >
                    @dimablover
                  </Typography>
                </div>
                <Grid container className={classes.content} spacing={4}>
                  <Grid item lg={4} md={12} sm={12}>
                    <div>
                      <Typography
                        className={classes.sub_title}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Mobile
                      </Typography>
                      <Typography
                        className={classes.sub_value}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        9127438447
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={12} sm={12}>
                    <div>
                      <Typography
                        className={classes.sub_title}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Parent's Name
                      </Typography>
                      <Typography
                        className={classes.sub_value}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Jack Blover
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={12} sm={12}>
                    <div>
                      <Typography
                        className={classes.sub_title}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Date Of Birth
                      </Typography>
                      <Typography
                        className={classes.sub_value}
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        23 April 2003
                      </Typography>
                    </div>
                  </Grid>
                </Grid>

                <Grid container className={classes.content_second} spacing={4}>
                  <Grid item lg={4} md={12} sm={12}>
                    <Typography
                      className={classes.sub_title}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Parent's Number
                    </Typography>
                    <Typography
                      className={classes.sub_value}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      9127438447
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={12} sm={12}>
                    <Typography
                      className={classes.sub_title}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Grade
                    </Typography>
                    <Typography
                      className={classes.sub_value}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      A, A++
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
