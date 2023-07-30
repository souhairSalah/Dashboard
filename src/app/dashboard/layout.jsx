import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </div>
    </>
  );
}
