import Sidebar from "@/app/sidebar/page"

function Layout({children}){
    return (
        <>
        <div className="flex">
          <div className="w-1/4 ">
            <Sidebar></Sidebar>
          </div>
          <div className="w-3/4 p-4">{children}</div>
        </div>
      </>
    )
}

export default Layout