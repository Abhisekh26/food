"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Notifications from "@/app/notification/notification";

export default function Signup() {
  const [notification,seTnotification]=useState(null)
  const router=useRouter()
  const firstref = useRef();
  const lastref = useRef();
  const emailref = useRef();
  const passref = useRef();
  const removeNotif = () => {
    seTnotification(null);
  };
  async function siggnup(event) {
    event.preventDefault();
    console.log("hello");
    const firstname = firstref.current.value;
    const lastname = lastref.current.value;
    const email = emailref.current.value;
    const password = passref.current.value;
   
    if (!email.includes("@")) {
      seTnotification({id:Math.random(),text:"Please enter a valid Email"})
    }
    if (password.length < 8) {
      seTnotification({id:Math.random(),text:"Password is too short"})
    }

    if (
      !password.includes("!") &&
      !password.includes("@") &&
      !password.includes("#") &&
      !password.includes("$") &&
      !password.includes("&") &&
      !password.includes("*")
    ) {
      seTnotification({id:Math.random(),text:"Please enter a special chracter"})
    }

    if (password.search(/[a-z]/) < 0) {
      seTnotification({id:Math.random(),text:"Please enter a lowercase letter"})
    }
    if (password.search(/[A-Z]/) < 0) {
      seTnotification({id:Math.random(),text:"Please enter a uppercase letter"})
    }
    console.log(firstname, lastname, email, password);
    const data = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD59bwm9yQQAF7qLDdEaKDUwedoQPZT5g",{
      method:"POST",
      body:JSON.stringify({
          email:email,
          password:password,
          returnSecureToken:true
      }),
      headers: {
          "Content-Type": "application/json",
        },
    })
    if(data.ok){
      firstref.current.value=""
      lastref.current.value=""
      emailref.current.value=""
      passref.current.value=""
      router.push("/login")


    }
      
  }
  

  return (
    <div>
      <Notifications notification={notification}

        removeNotif={removeNotif} ></Notifications>



      <div class="flex flex-col items-center justify-center dark mt-6 mb-16">
        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
          <form class="flex flex-col">
            <div class="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                ref={firstref}
              />
              <input
                placeholder="Last Name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                ref={lastref}
              />
            </div>
            <input
              placeholder="Email"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              ref={emailref}
            />

            <input
              placeholder="Password"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              ref={passref}
            />
            <input
              placeholder="Confirm Password"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
            />
            <label
              class="text-sm mb-2 text-gray-200 cursor-pointer"
              for="gender"
            >
              Gender
            </label>
            <select
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="age">
              Age
            </label>
            <input
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
              id="age"
              type="date"
            />
            <p class="text-white mt-4">
              Already have an account?
              <Link
                class="text-sm text-blue-500 -200 hover:underline mt-4"
                href="/login"
              >
                Login
              </Link>
            </p>
            <button
              class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
              onClick={siggnup}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
