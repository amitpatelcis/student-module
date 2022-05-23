import Navbar from "../../../components/navbar";
import Sidebar from "../../student/sidebar";
import { useState } from "react";

const ViewProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? <Sidebar /> : ""}
      <div
        className="px-4 pt-20 h-screen text-slate-800"
        style={sidebarOpen ? { paddingLeft: "18rem" } : { paddingLeft: "1rem" }}
      >
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4"></div>
      </div>
    </>
  );
};

export default ViewProfile;
