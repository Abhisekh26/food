"use client";
import { useSelector } from "react-redux";

function Profile() {
  const userName = useSelector((state) => state.users.name);
  const login = useSelector((state) => state.users.isLoggedIn);
  console.log(userName)
  console.log(login)
  return (
    <div>
      <h1> {userName}</h1>
      <h1>{login}</h1>
    </div>
  );
}
export default Profile;

