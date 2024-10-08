"use client";
import Sidebar from "@/app/sidebar/page";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const path = usePathname();
  const pathname = path == "/products/raisins";
  return (
    <>
      <div className="flex">
        {pathname && (
          <div className="w-1/4">
            <Sidebar />
          </div>
        )}
        <div className=" ">{children}</div>
      </div>
    </>
  );
}

export default Layout;
