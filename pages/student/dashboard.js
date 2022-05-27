import Navbar from "../../components/navbar";
import Sidebar from "./sidebar";
import { useState } from "react";
import useWindowDimensions from "../../components/useWindowDimensions";
import { Button, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventIcon from "@mui/icons-material/Event";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoopIcon from "@mui/icons-material/Loop";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PanToolIcon from "@mui/icons-material/PanTool";
import Avatar from "@mui/material/Avatar";
import { Line } from "rc-progress";
import Card from "@mui/material/Card";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  top_section: {
    background: "#f3e8f39c",
    padding: "20px 30px",
  },
  explorer: {
    background: "black !important",
    color: "white !important",
    padding: "5px 13px !important",
    fontSize: "14px !important",
    fontWeight: " 500 !important",
    borderRadius: "7px !important",
    position: "relative !important",
    bottom: "22px !important",
  },
  name: {
    color: "#7f437f",
    fontSize: "26px !important",
    fontWeight: "600 !important",
    marginBottom: "0 !important",
  },
  helper_title: {
    fontSize: "16px !important",
    marginBottom: "0 !important",
    color: "black",
  },
  helper_heading: {
    fontSize: "18px !important",
    fontWeight: "600 !important",
  },
  text_description: {
    fontSize: "14px !important",
  },
  heading_sub_div: {
    marginTop: "80px",
  },
  sub_box_hepler: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    alignItems: "center !important",
  },
  start_class_btn: {
    background: "#1bba68 !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    padding: "8px 25px !important",
    borderRadius: "10px !important",
  },
  right_level_box: {
    marginTop: "80px",
  },
  hex3: {
    height: "100px",
    width: "100px",
    background: "silver",
    webkitClipPath:
      "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
    clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
  },
  sub_title: {
    fontSize: "16px !important",
    fontWeight: "700 !important",
  },
  sub_box_hepler_second: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    alignItems: "center !important",
    flexDirection: "column !important",
  },
  sub_title_Text: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
    marginTop: "5px !important",
  },
  redIcon: {
    color: "#d35454 !important",
  },
  redIcon: {
    color: "#d35454 !important",
  },
  blueIcon: {
    color: "#283668 !important",
  },
  greenIcon: {
    color: "#69c269 !important",
  },
  infoIcon: {
    color: "#75bada !important",
  },
  helper_title_number: {
    fontWeight: "600 !important",
    color: "grey !important",
    fontSize: "19px !important",
  },
  helper_title_outof_number: {
    fontWeight: "600 !important",
    fontSize: "14px !important",
  },
  helper_title_outof_text: {
    fontWeight: "nomral !important",
    fontSize: "13px !important",
    color: "silver !important",
    textShadow: "0 0 black !important",
  },
  calendar: {
    border: "none !important",
  },
  upcomming_cls: {
    fontSize: "32px !important",
    fontWeight: "700 !important",
    marginBottom: "0 !important",
  },
  date_time_text: {
    fontWeight: "nomral !important",
    fontSize: "14px !important",
    color: "#a09c9c !important",
  },
  classes_sub_text: {
    fontWeight: "nomral !important",
    fontSize: "16px !important",
    color: "#a09c9c !important",
  },
  total_classes_sub_text: {
    fontWeight: "nomral !important",
    fontSize: "16px !important",
    color: "black !important",
    fontWeight: "600 !important",
  },
  topic_name: {
    fontWeight: "nomral !important",
    fontSize: "12px !important",
    color: "grey !important",
    fontWeight: "700 !important",
  },
  uncomming_class_section: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    background: "#fff3e4",
  },
  start_class_btn_class: {
    background: "#1bba68 !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    padding: "8px 25px !important",
    borderRadius: "10px !important",
    position: "relative",
    top: "160px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px !important",
      top: "0 !important",
    },
  },
  calendar_section: {
    paddingLeft: "24px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  sub_title_2: {
    fontSize: "16px !important",
    fontWeight: "700 !important",
  },
  buy_more_btn_div: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    alignItems: "center !important",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px !important",
    },
  },
  bottom_classes_button_div: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
  },
  top_box_classes: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
  },
  buy_now_btn: {
    background: "#4651d0 !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    padding: "8px 25px !important",
    borderRadius: "10px !important",
  },
  start_class_bottom_btn: {
    background: "#48c5c5 !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    padding: "8px 25px !important",
    borderRadius: "10px !important",
  },
  chat_heading: {
    color: "#7f437f",
    fontSize: "24px !important",
    fontWeight: "600 !important",
  },
  card_content: {
    padding: "15px 20px",
    margin: "8px",
    background: "#f1f1f2 !important",
    borderRadius: "15px",
  },
  sub_box_hepler_date: {
    display: "flex !important",
    marginTop: "15px !important",
    paddingBottom: "20px !important",
  },
  class_name_box: {
    background: "#7f437f !important",
    padding: "15px !important",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  class_name: {
    color: "#fff",
    fontSize: "14px !important",
    fontWeight: "600 !important",
    marginBottom: "0px !important",
  },
  class_bottom_section: {
    paddingLeft: "24px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  cancel_class: {
    color: "#d35454 !important",
    fontSize: "14px !important",
    fontWeight: "600 !important",
    cursor: "pointer",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [value, onChange] = useState(new Date());

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? <Sidebar /> : ""}
      <div
        className="px-4 pt-20 h-screen text-slate-800"
        style={
          width >= "768" && sidebarOpen
            ? { paddingLeft: "18rem" }
            : { paddingLeft: "1rem" }
        }
      >
        <Grid container className={classes.top_section}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  className={classes.name}
                  variant="h5"
                  gutterBottom
                  component="div"
                  textAlign={"left"}
                >
                  Hello, Ranveer
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.helper_title}
                >
                  Welcome Back!
                </Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <PanToolIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid className={classes.heading_sub_div}>
              <Typography
                className={classes.helper_heading}
                variant="h5"
                gutterBottom
                component="div"
                textAlign={"left"}
              >
                A Nice heading will displayed here
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className={classes.text_description}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid>
              <Box className={classes.sub_box_hepler}>
                <Box>
                  <Button
                    className={classes.start_class_btn}
                    variant="contained"
                    color="primary"
                  >
                    <VideocamIcon sx={{ mr: 1 }} /> Start A Class
                  </Button>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <NotificationsIcon />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <SearchIcon />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/user.jpg"
                    sx={{ width: 23, height: 23 }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid container className={classes.right_level_box}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className={classes.hex3}></Box>
                <span className={classes.explorer}>EXPLORER</span>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className={classes.hex3}></Box>
                <span className={classes.explorer}>EXPLORER</span>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className={classes.hex3}></Box>
                <span className={classes.explorer}>EXPLORER</span>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className={classes.hex3}></Box>
                <span className={classes.explorer}>EXPLORER</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid
              sx={{
                boxShadow: 2,
                p: 2,
                m: 3,
                borderRadius: 3,
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.sub_title}
                  sx={{ mb: 2 }}
                >
                  Quick Links
                </Typography>
              </Box>
              <Grid container justifyContent={"center"} spacing={5}>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Grid className={classes.sub_box_hepler_second}>
                    <Box>
                      <EventIcon fontSize="large" className={classes.redIcon} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        className={classes.sub_title_Text}
                      >
                        Calendar
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Grid className={classes.sub_box_hepler_second}>
                    <Box>
                      <MenuBookIcon
                        fontSize="large"
                        className={classes.blueIcon}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        className={classes.sub_title_Text}
                      >
                        Classes
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Grid className={classes.sub_box_hepler_second}>
                    <Box>
                      <AssignmentIcon
                        fontSize="large"
                        className={classes.greenIcon}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        className={classes.sub_title_Text}
                      >
                        Assingnments
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Grid className={classes.sub_box_hepler_second}>
                    <Box>
                      <LoopIcon fontSize="large" className={classes.redIcon} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        className={classes.sub_title_Text}
                      >
                        Progress
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                  <Grid className={classes.sub_box_hepler_second}>
                    <Box>
                      <MilitaryTechIcon
                        fontSize="large"
                        className={classes.infoIcon}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        className={classes.sub_title_Text}
                      >
                        Rewards
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container className={classes.calendar_section}>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                sx={{
                  boxShadow: 2,
                  p: 2,
                  mr: 4,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  className={classes.sub_title}
                >
                  My Calendar
                </Typography>
                <Box>
                  <Calendar
                    className={classes.calendar}
                    onChange={onChange}
                    value={value}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ boxShadow: 1, p: 3, borderRadius: 3 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.sub_title}
                  >
                    Project and Assingnments
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title_number}
                  >
                    16/20
                  </Typography>
                  <Box>
                    <Line
                      trailWidth={10}
                      strokeWidth={6}
                      percent={100}
                      strokeColor="#1bba68"
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title_outof_number}
                  >
                    16{" "}
                    <span className={classes.helper_title_outof_text}>
                      out of
                    </span>{" "}
                    20{" "}
                    <span className={classes.helper_title_outof_text}>
                      completed
                    </span>
                  </Typography>
                </Box>
                <Box sx={{ boxShadow: 1, p: 3, borderRadius: 3, mt: 5 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.sub_title}
                  >
                    Classes
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title_number}
                  >
                    16/20
                  </Typography>
                  <Box>
                    <Line
                      trailWidth={10}
                      strokeWidth={6}
                      percent={100}
                      strokeColor="#4651d0"
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.helper_title_outof_number}
                  >
                    16{" "}
                    <span className={classes.helper_title_outof_text}>
                      out of
                    </span>{" "}
                    20{" "}
                    <span className={classes.helper_title_outof_text}>
                      completed
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              boxShadow: 2,
              borderRadius: 4,
              mt: 3,
            }}
          >
            <Box sx={{ p: 2 }} className={classes.uncomming_class_section}>
              <Typography
                className={classes.sub_title}
                variant="h5"
                gutterBottom
                component="div"
                textAlign={"left"}
              >
                Upcomming class
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className={classes.upcomming_cls}
              >
                C-40
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className={classes.date_time_text}
              >
                Friday, December 25, 40:00pm - 5:00pm
              </Typography>
            </Box>

            <Box sx={{ mt: 4, p: 2 }}>
              <Typography
                className={classes.topic_name}
                variant="h5"
                gutterBottom
                component="div"
                textAlign={"left"}
              >
                TOPIC
              </Typography>

              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className={classes.sub_title}
              >
                Chatboot & Daily Life
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className={classes.text_description}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </Typography>
              <Box>
                <Button
                  className={classes.start_class_btn_class}
                  variant="contained"
                  color="primary"
                >
                  <VideocamIcon fontSize="small" sx={{ mr: 1 }} /> Start A Class
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid className={classes.calendar_section}>
          <Grid sx={{ background: "#fff5f0" }}>
            <Grid
              container
              sx={{ boxShadow: 1, pl: 5, pr: 5, pt: 3, pb: 3, borderRadius: 3 }}
            >
              <Grid item md={6} lg={6} sm={6}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.sub_title_2}
                  >
                    Your course will be expire soon{" "}
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        borderRadius: 5,
                        fontSize: "10px",
                        textTransform: "capitalize",
                        ml: 2,
                        background: "red",
                        boxShadow: "0",
                      }}
                    >
                      Only 6 classes left
                    </Button>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className={classes.text_description}
                  >
                    Renew{" "}
                    <span
                      style={{
                        color: "#7f437f",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      your plan now
                    </span>{" "}
                    or Request a call back from us
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                lg={6}
                sm={6}
                className={classes.buy_more_btn_div}
              >
                <Box>
                  <Button
                    size="small"
                    variant="contained"
                    className={classes.buy_now_btn}
                  >
                    <PhoneInTalkIcon sx={{ mr: 1 }} fontSize="small" /> Buy More
                    Classes
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 5, pb: 5 }}>
            <Typography
              className={classes.sub_title}
              sx={{ mb: 2 }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Classes
            </Typography>
            <Grid
              container
              sx={{ boxShadow: 2, pl: 5, pr: 5, pt: 2, pb: 2, borderRadius: 3 }}
            >
              <Grid item md={4} sm={12} lg={4} xs={12}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  component="div"
                >
                  Classes Summary
                </Typography>
                <Typography
                  className={classes.classes_sub_text}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  A quick overview of your classes
                </Typography>
              </Grid>
              <Grid item md={8} sm={12} lg={8} xs={12}>
                <Grid container>
                  <Grid item md={3} lg={3} sm={6} xs={6}>
                    <Typography
                      className={classes.upcomming_cls}
                      variant="h5"
                      gutterBottom
                      component="div"
                    >
                      300
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.total_classes_sub_text}
                    >
                      Total Classes
                    </Typography>
                  </Grid>
                  <Grid item md={3} lg={3} sm={6} xs={6}>
                    <Typography
                      className={classes.upcomming_cls}
                      variant="h5"
                      gutterBottom
                      component="div"
                    >
                      <CheckCircleOutlineIcon fontSize="medium" /> 29
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.classes_sub_text}
                    >
                      Completed
                    </Typography>
                  </Grid>
                  <Grid item md={3} lg={3} sm={6} xs={6}>
                    <Typography
                      className={classes.upcomming_cls}
                      variant="h5"
                      gutterBottom
                      component="div"
                    >
                      <AccessTimeIcon fontSize="medium" /> 12
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.classes_sub_text}
                    >
                      Scheduled
                    </Typography>
                  </Grid>
                  <Grid item md={3} lg={3} sm={6} xs={6}>
                    <Typography
                      className={classes.upcomming_cls}
                      variant="h5"
                      gutterBottom
                      component="div"
                    >
                      <AvTimerIcon fontSize="medium" /> 259
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.classes_sub_text}
                    >
                      Reaming
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.class_bottom_section} sx={{ pb: 5 }}>
          <Grid>
            <Carousel responsive={responsive}>
              <Card
                sx={{
                  maxWidth: 300,
                  boxShadow: 3,
                  borderRadius: 5,
                  mt: 2,
                  ml: 1,
                }}
              >
                <Box className={classes.top_box_classes}>
                  <Box sx={{ ml: 2, mr: 2 }}>
                    <Box className={classes.sub_box_hepler_date}>
                      <Box>
                        <CalendarMonthIcon sx={{ mt: 1 }} fontSize="medium" />
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          className={classes.upcomming_cls}
                          variant="h5"
                          gutterBottom
                          component="div"
                        >
                          25{" "}
                          <span className={classes.helper_title_outof_text}>
                            DEC
                          </span>
                        </Typography>
                        <Typography
                          className={classes.helper_title_outof_text}
                          variant="subititle1"
                          gutterBottom
                          component="div"
                        >
                          4:00-5:00 pm
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.class_name_box}>
                    <Typography
                      className={classes.class_name}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Class 41
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.card_content}>
                    <Typography
                      className={classes.chat_heading}
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ mb: 3 }}
                    >
                      How to Interect with chatbot
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.text_description}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </Typography>

                    <Box
                      className={classes.bottom_classes_button_div}
                      sx={{ mt: 5 }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user.jpg"
                          sx={{ width: 38, height: 38 }}
                        />
                      </Box>
                      <Box>
                        <Button
                          className={classes.start_class_bottom_btn}
                          variant="contained"
                          color="primary"
                        >
                          <VideocamIcon fontSize="small" sx={{ mr: 1 }} /> Start
                          A Class
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 5, mt: 2 }}
              >
                <Box className={classes.top_box_classes}>
                  <Box sx={{ ml: 2, mr: 2 }}>
                    <Box className={classes.sub_box_hepler_date}>
                      <Box>
                        <EventIcon sx={{ mt: 1 }} fontSize="medium" />
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          className={classes.upcomming_cls}
                          variant="h5"
                          gutterBottom
                          component="div"
                        >
                          25{" "}
                          <span className={classes.helper_title_outof_text}>
                            DEC
                          </span>
                        </Typography>
                        <Typography
                          className={classes.helper_title_outof_text}
                          variant="subititle1"
                          gutterBottom
                          component="div"
                        >
                          4:00-5:00 pm
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.class_name_box}>
                    <Typography
                      className={classes.class_name}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Class 41
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.card_content}>
                    <Typography
                      className={classes.chat_heading}
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ mb: 3 }}
                    >
                      How to Interect with chatbot
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.text_description}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </Typography>

                    <Box
                      className={classes.bottom_classes_button_div}
                      sx={{ mt: 5 }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user.jpg"
                          sx={{ width: 38, height: 38 }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          className={classes.cancel_class}
                        >
                          Cancel Class
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 5, mt: 2 }}
              >
                <Box className={classes.top_box_classes}>
                  <Box sx={{ ml: 2, mr: 2 }}>
                    <Box className={classes.sub_box_hepler_date}>
                      <Box>
                        <EventIcon sx={{ mt: 1 }} fontSize="medium" />
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          className={classes.upcomming_cls}
                          variant="h5"
                          gutterBottom
                          component="div"
                        >
                          25{" "}
                          <span className={classes.helper_title_outof_text}>
                            DEC
                          </span>
                        </Typography>
                        <Typography
                          className={classes.helper_title_outof_text}
                          variant="subititle1"
                          gutterBottom
                          component="div"
                        >
                          4:00-5:00 pm
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.class_name_box}>
                    <Typography
                      className={classes.class_name}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Class 41
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.card_content}>
                    <Typography
                      className={classes.chat_heading}
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ mb: 3 }}
                    >
                      How to Interect with chatbot
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.text_description}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </Typography>

                    <Box
                      className={classes.bottom_classes_button_div}
                      sx={{ mt: 5 }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user.jpg"
                          sx={{ width: 38, height: 38 }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          className={classes.cancel_class}
                        >
                          Cancel Class
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 5, mt: 2 }}
              >
                <Box className={classes.top_box_classes}>
                  <Box sx={{ ml: 2, mr: 2 }}>
                    <Box className={classes.sub_box_hepler_date}>
                      <Box>
                        <EventIcon sx={{ mt: 1 }} fontSize="medium" />
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          className={classes.upcomming_cls}
                          variant="h5"
                          gutterBottom
                          component="div"
                        >
                          25{" "}
                          <span className={classes.helper_title_outof_text}>
                            DEC
                          </span>
                        </Typography>
                        <Typography
                          className={classes.helper_title_outof_text}
                          variant="subititle1"
                          gutterBottom
                          component="div"
                        >
                          4:00-5:00 pm
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.class_name_box}>
                    <Typography
                      className={classes.class_name}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Class 41
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.card_content}>
                    <Typography
                      className={classes.chat_heading}
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ mb: 3 }}
                    >
                      How to Interect with chatbot
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.text_description}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </Typography>

                    <Box
                      className={classes.bottom_classes_button_div}
                      sx={{ mt: 5 }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user.jpg"
                          sx={{ width: 38, height: 38 }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          className={classes.cancel_class}
                        >
                          Cancel Class
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 5 }}>
                <Box className={classes.top_box_classes}>
                  <Box sx={{ ml: 2, mr: 2 }}>
                    <Box className={classes.sub_box_hepler_date}>
                      <Box>
                        <EventIcon sx={{ mt: 1 }} fontSize="medium" />
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          className={classes.upcomming_cls}
                          variant="h5"
                          gutterBottom
                          component="div"
                        >
                          25{" "}
                          <span className={classes.helper_title_outof_text}>
                            DEC
                          </span>
                        </Typography>
                        <Typography
                          className={classes.helper_title_outof_text}
                          variant="subititle1"
                          gutterBottom
                          component="div"
                        >
                          4:00-5:00 pm
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.class_name_box}>
                    <Typography
                      className={classes.class_name}
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Class 41
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.card_content}>
                    <Typography
                      className={classes.chat_heading}
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ mb: 3 }}
                    >
                      How to Interect with chatbot
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className={classes.text_description}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </Typography>

                    <Box
                      className={classes.bottom_classes_button_div}
                      sx={{ mt: 5 }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user.jpg"
                          sx={{ width: 38, height: 38 }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          className={classes.cancel_class}
                        >
                          Cancel Class
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
