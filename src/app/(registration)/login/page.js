"use client";
 import { userDetailsActions } from "@/app/reduxStore/userInfoSlice";
import { events } from "@react-three/fiber";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();

  const emailref = useRef();
  const passwordref = useRef();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.users.name);
  const logindetails=useSelector((state)=> state.users.isLoggedIn)
  async function signinn(event) {
    event.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;
    try {
      const data = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD59bwm9yQQAF7qLDdEaKDUwedoQPZT5g",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.ok) {
        const result = await data.json();
        console.log(typeof result.displayName);
        localStorage.setItem("token", result.idToken);
        dispatch(userDetailsActions.getname(result.displayName));
        dispatch(userDetailsActions.logIn())
        router.push("/profile");
      }
      else {
         alert ("Enter valid credentials")
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error)
    }
  }

  return (
    <div className="flex justify-center mt-14 mb-16">
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
      >
        <h2
          style={{ animation: "appear 2s ease-out" }}
          className="text-center text-4xl font-extrabold text-white"
        >
          Welcome
        </h2>
        <p
          style={{ animation: "appear 3s ease-out" }}
          className="text-center text-gray-200"
        >
          Sign in to your account
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="email"
              name="email"
              type="email"
              ref={emailref}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="email"
            >
              Email address
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="password"
              name="password"
              type="password"
              ref={passwordref}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a className="text-sm text-purple-200 hover:underline" href="#">
              Forgot your password
            </a>
          </div>
          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
            onClick={signinn}
          >
            Log In
          </button>
        </form>
        <div className="text-center text-gray-300">
          Dont have an account
          <Link className="text-purple-300 hover:underline" href="/signup">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
