import Navbar from "../../../components/navbar";
import Sidebar from "../sidebar";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    marginLeft: "4px",
    marginBottom: "5px",
  },
}));

const EditProfile = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dob, setDob] = useState(new Date());

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? <Sidebar /> : ""}
      <div
        className="px-4 pt-20 h-screen text-slate-800"
        style={sidebarOpen ? { paddingLeft: "18rem" } : { paddingLeft: "1rem" }}
      >
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4">
          <Grid container justifyContent={"center"} alignItems={"center"}>
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
              <div>
                <Grid container justifyContent={"center"} alignItems="center">
                  <Grid item>
                    <div>
                      <img
                        className={classes.userImg}
                        src="/images/user.jpg"
                        alt="user"
                      />
                    </div>
                    <Button
                      variant="contained"
                      color="secondary"
                      component="label"
                      size="small"
                    >
                      Upload File
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Email ID"
                  defaultValue=""
                />
                <TextField
                  id="outlined-error"
                  label="Mobile Number"
                  defaultValue=""
                  type="number"
                />
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Parent Name"
                  defaultValue=""
                />
                <TextField
                  id="outlined-error"
                  label="Parents Whatsapp Mobile Number"
                  defaultValue=""
                />
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Students Name"
                  defaultValue=""
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="Student DOB"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={dob}
                    onChange={(newValue) => {
                      setDob(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Student's Grade in school"
                  defaultValue=""
                />
                <TextField id="Student DOB" label="Address" defaultValue="" />
              </div>
              <div>
                <Grid container justifyContent={"right"} alignItems={"center"}>
                  <Button sx={{ mr: 1 }} variant="contained" component="label">
                    Submit
                  </Button>
                </Grid>
              </div>
            </Box>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
