"use client";

import Sidebar from "@/app/sidebar/page";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const path = usePathname();
  console.log(path);
  const showpath = path == "/products/almonds";
  return (
    <>
      <div className="flex">
        {showpath && (
          <div className="w-1/4">
            <Sidebar />
          </div>
        )}
        <div className="w-3/4 pt-4 pr-10 ">{children}</div>
      </div>
    </>
  );
}

export default Layout;
