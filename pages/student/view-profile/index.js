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
    padding: "30px",
    borderRadius: "10px",
  },
  userImg: {
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    marginBottom: "5px",
  },
  title: {
    fontSize: "22px !important",
    fontFamily: "fantasy !important",
    color: "#6792bf !important",
  },
  text: {
    fontSize: "22px !important",
    fontFamily: "fantasy !important",
    color: "#7c7c7c !important",
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
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4">
          <Box
            className={classes.form}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              boxShadow: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container justifyContent={"center"} alignItems="center">
              <Grid item>
                <div>
                  <img
                    className={classes.userImg}
                    src="/images/user.jpg"
                    alt="user"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container justifyContent={"center"} spacing={3}>
              <Grid item>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Email ID:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Mobile Number:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Parent Name:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Parents Whatsapp Mobile Number:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Students Name:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Student Date Of Birth:
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  Student's Grade in school:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  rayn@mgail.com
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  32323242323
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Rayn ronald
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  61728347384
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Jack ronald
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  23 April 1999
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  A+
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
