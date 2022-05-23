import { useState } from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faGear,
  faBell,
  faSearch,
  faChalkboard,
  faChalkboardUser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  userImg: {
    width: "35px",
    height: "35px",
    borderRadius: "100%",
  },
  userName: {
    color: "#4141bb",
    fontWeight: "600",
  },
  option: {
    margin: "15px 0 !important",
    color: "#7d7a7a !important",
    fontSize: "14px !important",
    fontWeight: "600 !important",
    cursor: "pointer !important",
  },
  icon: {
    marginRight: "5px",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { sidebarOpen, setSidebarOpen } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const sidebar = () => {
    if (sidebarOpen == true) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="bg-white h-20 flex justify-between fixed top w-full items-center p-4 text-slate-800 z-20">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex md:justify-between items-center md:w-64">
          <div className="gap-2 items-center font-bold text-lg hidden md:flex">
            <div className="flex justify-center items-center">
              <Image src={Logo} width="25" height="25" />
            </div>
            <div className="flex justify-center items-center">KAPABLE</div>
          </div>
          <div className="flex items-center">
            <button
              className="py-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white"
              onClick={sidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div className="relative hidden md:flex items-center">
          <input
            type="text"
            className="w-96 bg-[#fafafa] h-12 border border-slate-300 outline-[#1e88e5] rounded-lg text-sm px-2 text-slate-600 font-semibold pl-10"
            placeholder="Search.."
          />
          <div className="absolute left-3 text-slate-400">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="md:hidden py-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div
          aria-describedby={id}
          onClick={handleClick}
          className="bg-[#e3f2fd] hover:bg-[#DBDFFD] text-[#1e88e5] rounded-3xl flex items-center gap-3 p-2 px-3 cursor-pointer"
        >
          <div className="text-4xl flex items-center">
            <img
              src="/images/user.jpg"
              className={classes.userImg}
              alt="user"
            />
          </div>
          <div className={classes.userName}>Amit Patel</div>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box sx={{ ml: 2, mt: 3, mr: 3, mb: 3 }}>
            <Link href={"/student/edit-profile"}>
              <Typography className={classes.option}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faChalkboardUser}
                />{" "}
                View Profile
              </Typography>
            </Link>
            <Link href={"/student/view-profile"}>
              <Typography className={classes.option}>
                <FontAwesomeIcon className={classes.icon} icon={faChalkboard} />{" "}
                Update Profile
              </Typography>
            </Link>
            <Link href={"/view"}>
              <Typography className={classes.option}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faPenToSquare}
                />{" "}
                Log out
              </Typography>
            </Link>
          </Box>

          {/* <Typography sx={{ p: 2 }}>View Profile</Typography>
          <Typography sx={{ p: 2 }}>Update Profile</Typography>
          <Typography sx={{ p: 2 }}>Log out</Typography> */}
        </Popover>
      </div>
    </div>
  );
}
