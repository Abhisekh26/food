"use client";

import Sidebar from "@/app/sidebar/page";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const path = usePathname();
 
  const showpath = path == "/products/almonds";
  return (
    <span>
      <div className="flex">
        {showpath && (
          <div className="w-1/4">
            <Sidebar />
          </div>
        )}
        <div className=" ">{children}</div>
      </div>

    
    </span>
  );
}

export default Layout;
