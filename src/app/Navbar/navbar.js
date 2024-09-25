
import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "@/app/reduxStore/userInfoSlice";
import { SearchModal } from "./searchmodal";
import CartModal from "./cartmodal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiHome, FiBarChart2, FiPieChart } from "react-icons/fi"; 
import { searchActions } from "../reduxStore/searchSlice";
import Image from 'next/image';
export const Navbar = () => {
  const [selected, setSelected] = useState(1);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.find.result);
  const input = useSelector((state) => state.find.userInput);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(searchActions.searchParameter(searchQuery));
      dispatch(searchActions.finalResult());
    }
  }, [searchQuery]);

  const handleSearch = () => {
    setShowSearchModal(true);
  };

  const fetchData = async () => {
    try {
      const [almonds, raisins] = await Promise.all([
        fetch(
          "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
        ),
        fetch(
          "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/productRaisins.json"
        ),
      ]);

      if (!almonds.ok || !raisins.ok) {
        throw new Error("Failed to fetch data");
      }

      const almondData = await almonds.json();
      const raisinsData = await raisins.json();
      dispatch(searchActions.searchResult([...almondData, ...raisinsData]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  



  const handleSearchModalClose = () => {
    setShowSearchModal(false);
  };

  const handleCartOpen = () => {
    setShowCartModal(true);
  };

  const handleCartModalClose = () => {
    setShowCartModal(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(userDetailsActions.getname(""));
    dispatch(userDetailsActions.logIn(false));
    router.push("/login");
  };
// console.log(selector)
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-gray-300 text-gray-950 shadow-md bg-opacity-80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center mr-16">
            <Image
              src="/nutrinuts.png"
              alt="Logo"
              width={40} 
              height={40}
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1">
            {TAB_DATA.map((t) => (
              <div key={t.id} className="relative group">
                <Link href={t.path} passHref>
                  <span
                    className={`text-xs font-medium transition-all md:text-base ${
                      selected === t.id
                        ? "text-indigo-600"
                        : "text-gray-950 hover:text-indigo-600"
                    }`}
                    onClick={() => setSelected(t.id)}
                  >
                    {t.title}
                  </span>
                </Link>
                {t.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
                      {t.dropdown.map((item) => (
                        <Link key={item.id} href={item.path} passHref>
                          <div
                            className="flex w-full items-center justify-center py-2 text-neutral-700 transition-colors hover:text-indigo-600"
                            onClick={() => setSelected(t.id)}
                          >
                            <span className="text-xs">{item.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative flex-1 mx-4 md:block">
            <input
              type="text"
              className="w-full rounded-lg bg-white py-2 px-4 text-zinc-900 transition-transform duration-300 ease-in-out focus:scale-105 focus:shadow-lg focus:outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              <FaSearch />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <FaShoppingCart
              className="cursor-pointer hover:text-indigo-600"
              onClick={handleCartOpen}
            />
            <div className="relative">
              <FaUser
                className="cursor-pointer hover:text-indigo-600"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-zinc-900 transition-all duration-300 ease-in-out transform origin-top-right">
                  <Link href="/profile" passHref>
                    <div className="block px-4 py-2 hover:bg-zinc-200 flex items-center space-x-2">
                      <FaUserCircle />
                      <span>Profile</span>
                    </div>
                  </Link>
                  <Link href="/login" passHref>
                    <div className="block px-4 py-2 hover:bg-zinc-200 flex items-center space-x-2">
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </div>
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-200 flex items-center space-x-2"
                    onClick={handleSignOut}
                  >
                    <FaSignOutAlt />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center py-2 space-x-4">
          {TAB_DATA.map((t) => (
            <Link key={t.id} href={t.path} passHref>
              <span
                className={`text-xs font-medium transition-all ${
                  selected === t.id
                    ? "text-indigo-600"
                    : "text-gray-950 hover:text-indigo-600"
                }`}
                onClick={() => setSelected(t.id)}
              >
                {t.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {showSearchModal && (
        <SearchModal
          searchQuery={searchQuery}
          searchResults={selector}
          onClose={handleSearchModalClose}
        />
      )}

      {showCartModal && <CartModal onClose={handleCartModalClose} />}
    </>
  );
};

const TAB_DATA = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    dropdown: [
      { id: 1, title: "Cashew", path: "/products/cashew" },
      { id: 2, title: "Raisins", path: "/products/raisins" },
      { id: 3, title: "Almond", path: "/products/almonds" },
    ],
  },
  {
    id: 3,
    title: "About us",
    path: "/about",
  },
  {
    id: 4,
    title: "Customer Support",
    path: "/support",
  },
];

export default Navbar;
