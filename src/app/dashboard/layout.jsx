
import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <SideBar />
        {children}
      </div>
    </>
  );
}
