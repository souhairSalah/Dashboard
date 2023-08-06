import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex mt-[107px] ">
          <SideBar />
          <div className="ml-60 m-3">{children}</div>
        </div>
      </div>
    </>
  );
}
