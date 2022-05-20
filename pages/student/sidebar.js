import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGauge,faMessage,faChalkboard,faChalkboardUser,faPenToSquare,faCalendarCheck,faGraduationCap, faPeopleArrowsLeftRight} from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='w-72 pt-20 h-screen fixed left-0 bg-white z-10'>
        <div className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto" id={styles.noScrollBar}>


          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Menus</div>
            <Link href="/student/schedule">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faChalkboardUser}/></div>
              <div className='flex items-center'>Schedule Demo</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faMessage}/></div>
              <div className='flex items-center'>Start Class</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faChalkboard}/></div>
              <div className='flex items-center'>Submit Assignments</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Participate in challenges</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Track Progress</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Contact Trainer</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Contact Customer Care</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Review Kapable Session</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Invite Friends</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Cancel Class</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Request Changes</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Upgrade Sessions</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Homework - upload</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Progress bar</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Public showcase page</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Maintains profiles</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Receive assessment and progress report</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>View class snippets</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>views projects</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Gets reward and recongnition(Completing Class, Referring Friends, Performancs)</div>
            </div>
            </Link>
            <Link href="#">
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faCalendarCheck}/></div>
              <div className='flex items-center'>Redeems Rewards</div>
            </div>
            </Link>
          </div>


        </div>
    </div>
  )
}
