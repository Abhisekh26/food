"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar/navbar";
 import Footer from "./Footer/Footer";
  import { Provider } from "react-redux";
 import mainStore from "./reduxStore/mainStore";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
       <Provider store= {mainStore}> 
      <Navbar></Navbar>
        {children}
       <Footer></Footer> 
        </Provider> 
        </body>
       
    </html>
  );
}
