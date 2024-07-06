import Sidebar from "@/app/sidebar/page"

function Layout({children}){
    return (
        <>
      
        {children}
        <Sidebar>   </Sidebar>
      
        </>
    )
}

export default Layout