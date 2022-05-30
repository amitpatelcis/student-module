import Navbar from "../../../components/navbar";
import Sidebar from "../sidebar";
import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { DropzoneArea } from "react-mui-dropzone";
import {
  AttachFile,
  AudioTrack,
  Description,
  PictureAsPdf,
  Theaters,
} from "@mui/icons-material";

const handlePreviewIcon = (fileObject, classes) => {
  const { type } = fileObject.file;
  const iconProps = {
    className: classes.image,
  };

  if (type.startsWith("video/")) return <Theaters {...iconProps} />;
  if (type.startsWith("audio/")) return <AudioTrack {...iconProps} />;

  switch (type) {
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return <Description {...iconProps} />;
    case "application/pdf":
      return <PictureAsPdf {...iconProps} />;
    default:
      return <AttachFile {...iconProps} />;
  }
};

const useStyles = makeStyles((theme) => ({
  form: {
    background: "#fff",
    padding: "30px",
    marginTop: "30px",
    borderRadius: "10px",
  },
  formControl: {
    width: 490,
    margin: "10px !important",
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 130,
    },
  },
  field_holder: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    border: "1px solid silver",
    padding: "3px 10px",
    color: "grey",
  },
  heading: {
    color: "#7f437f",
    fontSize: "24px !important",
  },
  submit_button: {
    margin: "10px auto !important",
    background: "#1bba68 !important",
  },
  dropzone: {
    minHeight: "150px",
  },
  dropzone_wrapper: {
    "& .MuiDropzoneArea-root": {
      "& .MuiDropzonePreviewList-root": {},
    },
  },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SubmitAssignment = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openError, setOpenError] = useState({
    open: false,
    msg: "",
    severity: "error",
  });
  const [formData, setFormdata] = useState({
    class_name: "",
    assignment_name: "",
    description: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { class_name, assignment_name, description } = formData;

    if (!class_name) {
      setOpenError({
        open: true,
        msg: "Please enter Class name",
        severity: "error",
      });
    } else if (!assignment_name) {
      setOpenError({
        open: true,
        msg: "Please enter Assignment name",
        severity: "error",
      });
    } else if (!description) {
      setOpenError({
        open: true,
        msg: "Please enter Description",
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

  const handleChangeDropZOne = (files) => {
    //Saving files to state for further use and closing Modal.
    setFormdata({ ...formData, files: files });
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
          <Box
            className={classes.form}
            component="form"
            sx={{
              boxShadow: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Typography
                variant="h6"
                component="div"
                className={classes.heading}
              >
                Submit Assignment
              </Typography>
              <Grid item>
                <Box>
                  <FormControl className={classes.formControl} size="small">
                    <FormLabel id="class_name">Class Name</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="class_name"
                      value={formData.class_name}
                      label="Class Name"
                      name="class_name"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl className={classes.formControl} size="small">
                    <FormLabel id="assignment_name"> Assignment Name</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="assignment_name"
                      value={formData.assignment_name}
                      label="Assignment Name"
                      name="assignment_name"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl className={classes.formControl} size="small">
                    <FormLabel id="description"> Description </FormLabel>
                    <TextareaAutosize
                      minRows={4}
                      aria-label="maximum height"
                      placeholder="Write description..."
                      defaultValue=""
                      name="description"
                      onChange={handleChange}
                      className={classes.field_holder}
                    />
                  </FormControl>
                </Box>
                <Box className={classes.dropzone_wrapper}>
                  <FormControl className={classes.formControl} size="small">
                    <FormLabel id="additional"> Aditional Tile </FormLabel>
                    <DropzoneArea
                      showPreviews={true}
                      maxFileSize={50000000}
                      onChange={handleChangeDropZOne}
                      showPreviewsInDropzone={false}
                      filesLimit={20}
                      showFileNamesInPreview={true}
                      getPreviewIcon={handlePreviewIcon}
                      dropzoneClass={classes.dropzone}
                    />
                    <FormHelperText>
                      Max. upload size upto 50 MB.
                    </FormHelperText>
                  </FormControl>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    component="label"
                    onClick={handleSubmit}
                    className={classes.submit_button}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
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

export default SubmitAssignment;
