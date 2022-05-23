import React, { useState } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
];

const Calendar = () => {
  const [openCase, setOpenCase] = useState(false);
  const [openCase2, setOpenCase2] = useState(false);
  const [openCase3, setOpenCase3] = useState(false);
  const [value, setValue] = React.useState(null);

  const [selectedData, setSelectedData] = useState({
    title: "",
    start: "",
    url: "",
    allocatedBy: "",
  });

  // Case 1
  const onCloseModalCase = () => {
    setOpenCase(false);
  };

  // Case 2
  const RequestToTeacher = () => {
    setOpenCase(false);
    setOpenCase2(true);
  };
  const onCloseModalCase2 = () => {
    setOpenCase2(false);
  };

  // Case 3
  const RequesttoReschedule = () => {
    setOpenCase2(false);
    setOpenCase3(true);
  };
  const onCloseModalCase3 = () => {
    setOpenCase3(false);
  };

  const RescheduleSubmit = () => {
    console.log("ids", value);
    setOpenCase3(false);
  };
  return (
    <>
      <BigCalendar
        selectable
        events={events}
        localizer={localizer}
        onSelectEvent={(data) => {
          setSelectedData({
            title: data.title,
            start:
              moment(data.start).format("DD MMM YYYY") +
              " To " +
              moment(data.end).format("DD MMM YYYY"),
            url: data.url,
            allocatedBy: data.allocatedBy,
          });
          setOpenCase(true);
        }}
        defaultDate={new Date(2015, 3, 12)}
      />

      {/* CASE - 1  */}
      <Modal open={openCase} onClose={onCloseModalCase}>
        <Typography align="center" variant="h6" gutterBottom component="div">
          Event Detail
        </Typography>
        <div style={{ padding: "20px", width: "500px" }}>
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Event Name:
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Event Date:
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Zoom URL:
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Allocated By:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom component="div">
                {selectedData.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {selectedData.start}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {selectedData.url}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {selectedData.allocatedBy}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sx={{ mt: 2 }} spacing={2}>
            <Grid item>
              <Button variant="contained" color="secondary" size="large">
                Join Class
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                onClick={RequestToTeacher}
              >
                Request to teacher
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>

      {/* CASE - 2  */}
      <Modal open={openCase2} onClose={onCloseModalCase2}>
        <Typography align="center" variant="h6" gutterBottom component="div">
          Update Event
        </Typography>
        <div style={{ padding: "20px", width: "600px" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 4, ml: 1 }}
          >
            <Grid item sm={12} md={6} lg={6}>
              <Button variant="contained" size="large">
                Request To Cancel
              </Button>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={RequesttoReschedule}
              >
                Request to Reschedule
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>

      {/* CASE - 3  */}
      <Modal open={openCase3} onClose={onCloseModalCase3}>
        <Typography align="center" variant="h6" gutterBottom component="div">
          Reschedule Event
        </Typography>
        <div style={{ padding: "20px", width: "500px" }}>
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
                sx={{ mb: 4 }}
              >
                Event Name:
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Time:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                sx={{ mb: 4 }}
              >
                {selectedData.title}
              </Typography>
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="time"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Grid item sm={12} md={12} lg={12}>
              <Button
                variant="contained"
                size="large"
                onClick={RescheduleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
};

export default Calendar;
