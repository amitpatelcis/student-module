import Navbar from "../../../components/navbar";
import Sidebar from "./sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4">
          Teacher Dashboard
        </div>
      </div>
    </>
  )
}

