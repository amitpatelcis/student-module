import Navbar from "../../../components/navbar";
import Sidebar from "../../student/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';
import Calendar from "./calendar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4">
          <Calendar />
        </div>
      </div>
    </>
  )
}