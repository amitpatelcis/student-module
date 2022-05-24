import Navbar from "../../../components/navbar";
import Sidebar from "../sidebar";
import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const EditProfile = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openError, setOpenError] = useState({
    open: false,
    msg: "",
    severity: "error",
  });
  const [formData, setFormdata] = useState({
    profile: "",
    email: "",
    mobile: "",
    parent_name: "",
    parents_whatsapp_mobile: "",
    student_name: "",
    dob: new Date(),
    student_grade: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const {
      profile,
      email,
      mobile,
      parent_name,
      parents_whatsapp_mobile,
      student_name,
      dob,
      student_grade,
      address,
    } = formData;

    if (!profile) {
      setOpenError({
        open: true,
        msg: "Please upload profile picture",
        severity: "error",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setOpenError({
        open: true,
        msg: "Please enter valid email address",
        severity: "error",
      });
    } else if (!/^\d{10}$/.test(mobile)) {
      setOpenError({
        open: true,
        msg: "Please enter 10 digit valid mobile number",
        severity: "error",
      });
    } else if (!parent_name) {
      setOpenError({
        open: true,
        msg: "Please enter parent name",
        severity: "error",
      });
    } else if (!/^\d{10}$/.test(parents_whatsapp_mobile)) {
      setOpenError({
        open: true,
        msg: "Please enter 10 digit valid parents whatspp mobile number",
        severity: "error",
      });
    } else if (!student_name) {
      setOpenError({
        open: true,
        msg: "Please enter student name",
        severity: "error",
      });
    } else if (!dob) {
      setOpenError({
        open: true,
        msg: "Please enter dob",
        severity: "error",
      });
    } else if (!student_grade) {
      setOpenError({
        open: true,
        msg: "Please enter student grade",
        severity: "error",
      });
    } else if (!address) {
      setOpenError({
        open: true,
        msg: "Please enter address",
        severity: "error",
      });
    } else {
      console.log("ids", formData);
      setOpenError({
        open: true,
        msg: "Successfully submitted",
        severity: "success",
      });
    }
  };
  const handleClose = () => {
    setOpenError({ open: false, msg: "" });
  };
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
                      <input
                        type="file"
                        name="profile"
                        onChange={handleChange}
                        hidden
                      />
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Email ID"
                  defaultValue=""
                  name="email"
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-error"
                  label="Mobile Number"
                  defaultValue=""
                  type="number"
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Parent Name"
                  defaultValue=""
                  name="parent_name"
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-error"
                  label="Parents Whatsapp Mobile Number"
                  defaultValue=""
                  type="number"
                  name="parents_whatsapp_mobile"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="Students Name"
                  defaultValue=""
                  name="student_name"
                  onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="Student DOB"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={formData.dob}
                    onChange={(newValue) => {
                      setFormdata({ dob: newValue });
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
                  name="student_grade"
                  onChange={handleChange}
                />
                <TextField
                  id="Address"
                  label="Address"
                  defaultValue=""
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Grid container justifyContent={"right"} alignItems={"center"}>
                  <Button
                    sx={{ mr: 1 }}
                    variant="contained"
                    component="label"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </div>
            </Box>
          </Grid>
        </div>
      </div>

      {/* Alert */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openError.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={openError.severity}
            sx={{ width: "100%" }}
          >
            {openError.msg}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default EditProfile;
