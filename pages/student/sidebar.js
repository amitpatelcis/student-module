import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faMessage,
  faChalkboard,
  faChalkboardUser,
  faPenToSquare,
  faCalendarCheck,
  faGraduationCap,
  faPeopleArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  return (
    <div className="w-72 pt-20 h-screen fixed left-0 bg-white z-10">
      <div
        className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto"
        id={styles.noScrollBar}
      >
        <div className="border-b p-2">
          <div className="text-slate-900 mb-3 font-semibold">Menus</div>
          <Link href="/student/dashboard">
            <div className="flex gap-2 ml-1 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 cursor-pointer mb-1">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <div className="flex items-center">Dashboard</div>
            </div>
          </Link>
          <Link href="/student/schedule">
            <div className="flex gap-2  ml-1 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 cursor-pointer mb-1">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faChalkboardUser} />
              </div>
              <div className="flex items-center">Join Class</div>
            </div>
          </Link>

          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faChalkboardUser} />
                </div>
                <div className="flex items-center">Class</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/student/submit-assignment">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div className="flex items-center">Submit Assignments</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <div className="flex items-center">Review Session</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <div className="flex items-center">View Class Snippets</div>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <div className="flex items-center">Progress</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div className="flex items-center">Track Progress</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <div className="flex items-center">Progress Bar</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div className="flex items-center">
                    Receive Assignment and Progress Report
                  </div>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faChalkboard} />
                </div>
                <div className="flex items-center">My Wall</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div className="flex items-center">Public Showcase Page</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <div className="flex items-center">
                    Get Rewards and Recongnition
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div className="flex items-center">
                    Receive Assignment and Progress Report
                  </div>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <div className="flex items-center">Get Rewards</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div className="flex items-center">Invite Friends</div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <div className="flex items-center">
                    Get Rewards and Recongnition
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1  cursor-pointer mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div className="flex items-center">
                    Receive Assignment and Progress Report
                  </div>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg cursor-pointer">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPeopleArrowsLeftRight} />
                </div>
                <div className="flex items-center">Contact Trainer</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-1 cursor-pointer mb-1">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPeopleArrowsLeftRight} />
                  </div>
                  <div className="flex items-center">Contact Trainer</div>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
