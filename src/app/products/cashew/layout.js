
import Sidebar from "@/app/sidebar/page";

function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pt-4 pr-10 ">{children}</div>
      </div>
    </>
  );
}

export default Layout;
