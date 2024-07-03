"use client"
import { useSelector } from "react-redux";
import { userinfoActions } from "@/app/reduxStore/tokenslice";

function Profile(){
    const userName=useSelector((state)=>state.users.name)
//    const token=useSelector((state)=>state.tokens.Token)
    return(
        <div>
            
           <h1> {userName}</h1> 
           {/* <h1>{token}</h1> */}
        </div>
 
    )
}
export default Profile