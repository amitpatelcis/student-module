import Navbar from "../../../components/navbar";
import Sidebar from "../sidebar";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  top_section: {
    background: "#f3e8f39c",
    padding: "20px 30px",
  },
  name: {
    color: "#7f437f",
    fontWeight: "600 !important",
  },
  helper_title: {
    fontSize: "12px !important",
    marginBottom: "0 !important",
  },
  helper_icons: {
    background: "white",
    padding: "8px",
    borderRadius: "5px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  bottom_section: {
    padding: "20px 30px",
  },
  helper_value: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
  },
  sub_box_hepler: {
    display: "flex !important",
    marginTop: "15px !important",
    paddingBottom: "20px !important",
    borderBottom: "1px solid #dfdfdf !important",
  },

  // Right Section
  right_helper_title: {
    color: "#45c1ec !important",
    fontSize: "12px !important",
    marginBottom: "0 !important",
  },
  right_box_hepler: {
    display: "flex !important",
    padding: "5px 0",
    marginLeft: "5px",
  },
  pdf_helper_value: {
    fontSize: "11px !important",
    fontWeight: "600 !important",
  },
  pdf_size_text: {
    fontSize: "11px !important",
    fontWeight: "normal !important",
    color: "#979292 !important",
    marginTop: "0 !important",
  },
  pdf_view_text: {
    fontSize: "11px !important",
    fontWeight: "normal !important",
    color: "#1cdc3f !important",
    marginTop: "0 !important",
    cursor: "pointer",
    marginLeft: "5px",
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
        <Grid container>
          {/* Left Section */}
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Grid className={classes.top_section}>
              <Typography
                className={classes.name}
                variant="h5"
                gutterBottom
                component="div"
                textAlign={"left"}
              >
                Navita Bhatt
              </Typography>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title}
                  >
                    <span className={classes.helper_icons}>
                      <PhoneForwardedIcon fontSize="small" />
                    </span>{" "}
                    <span style={{ marginLeft: "10px" }}>+91 99280-04941</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title}
                  >
                    <span className={classes.helper_icons}>
                      <EmailIcon fontSize="small" />
                    </span>{" "}
                    <span style={{ marginLeft: "10px" }}>
                      neha.jain@abc.com
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Box className={classes.bottom_section}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box className={classes.sub_box_hepler}>
                    <Box>
                      <FaceRetouchingNaturalIcon />
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_title}
                      >
                        Age Group Assigned
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_value}
                      >
                        7-5 Yrs, 8-9 Yrs, 9-10 Yrs
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box className={classes.sub_box_hepler}>
                    <Box>
                      <TrackChangesIcon />
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_title}
                      >
                        Purpose
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_value}
                      >
                        21st Century
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className={classes.sub_box_hepler}>
                    <Box>
                      <AcUnitIcon />
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_title}
                      >
                        Admin Remark
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_value}
                      >
                        Lorem imposum simple dummy text
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className={classes.sub_box_hepler}>
                    <Box>
                      <HandshakeIcon />
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_title}
                      >
                        Accociation
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_value}
                      >
                        Fulltime
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className={classes.sub_box_hepler}>
                    <Box>
                      <AcUnitIcon />
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_title}
                      >
                        Accociation Remark
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        textAlign={"left"}
                        className={classes.helper_value}
                      >
                        Lorem imposum simple dummy text
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{
              boxShadow: 2,
              p: 2,
            }}
            className={classes.right_section}
          >
            <Grid container justifyContent={"center"} align="center">
              <Grid item lg={12} sm={12} md={12}>
                <Avatar
                  alt="Remy Sharp"
                  src="/images/user.jpg"
                  sx={{ width: 120, height: 120, boxShadow: 2 }}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                boxShadow: 1,
                p: 2,
                mt: 1,
                borderRadius: 2,
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Box className={classes.right_box_hepler}>
                <Box>
                  <EditIcon fontSize="small" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.right_helper_title}
                  >
                    Edit Profile
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.right_box_hepler}>
                <Box>
                  <DeleteOutlineIcon fontSize="small" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.right_helper_title}
                  >
                    Delete Profile
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.right_box_hepler}>
                <Box>
                  <RotateLeftIcon fontSize="small" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.right_helper_title}
                  >
                    Reset Password
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                boxShadow: 1,
                p: 1,
                mt: 1,
                borderRadius: 2,
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Box className={classes.right_box_hepler}>
                <Box>
                  <CalendarMonthIcon fontSize="small" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.helper_title}
                  >
                    Joining date
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.helper_value}
                  >
                    July 12, 2020
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: 1,
                p: 1,
                mt: 1,
                borderRadius: 2,
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Box className={classes.right_box_hepler}>
                <Box>
                  <EventIcon fontSize="small" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.helper_title}
                  >
                    Tracker ID
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.helper_value}
                  >
                    123-456-789
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: 1,
                p: 1,
                mt: 1,
                borderRadius: 2,
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Box className={classes.right_box_hepler} alignItems="center">
                <Box>
                  <PictureAsPdfIcon
                    fontSize="large"
                    style={{ color: "#e74a4a" }}
                  />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                    className={classes.pdf_helper_value}
                  >
                    Adhar.jpg
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    textAlign={"left"}
                  >
                    <span className={classes.pdf_size_text}>2.29 mb</span>{" "}
                    <span className={classes.pdf_view_text}>
                      <RemoveRedEyeIcon style={{ fontSize: "13px" }} /> view
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ViewProfile;
