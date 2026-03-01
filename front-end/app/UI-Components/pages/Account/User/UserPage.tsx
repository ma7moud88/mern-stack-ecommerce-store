"use client";
import React, { useState } from "react";
import Link from "next/link";
import Login from "../Login";
import Register from "../Register";
import DashboardPage from "./Dashboard";
import AccountDetailsPage from "./AccountDetails";
import AddressesPage from "./Addresses";
import OrdersPage from "./MyOrders";
import Wishlist from "./Wishlist";
import LogoutPage from "./Logout";

type UserPageProps = {
  user: any;
  onLogout: () => void;
};


export default function AdminPage({ user , onLogout}: UserPageProps) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <>
        <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5 mb-10">
          <div className="">
            <div className="flex">
              <Link href="/" className="text-2xl Unbounded">
                {" "}
                Home &nbsp;:
              </Link>
              <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
                &nbsp;My Account
              </h2>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            "Dashboard",
            "Account Details",
            "Addresses",
            "Orders",
            "Wishlist",
            "Logout",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md font-semibold
        ${
          activeTab === tab
            ? "bg-[var(--prim-color)] text-white"
            : "bg-gray-200 text-gray-700"
        }
        ${
          tab === "Logout"
            ? "hover:bg-red-500 hover:text-white transition "
            : "hover:bg-[var(--prim-color)] hover:text-white transition"
        }
      `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {activeTab === "Dashboard" && <DashboardPage />}
          {activeTab === "Account Details" && <AccountDetailsPage />}
          {activeTab === "Addresses" && <AddressesPage />}
          {activeTab === "Orders" && <OrdersPage />}
          {activeTab === "Wishlist" && <Wishlist />}
          {activeTab === "Logout" && <LogoutPage onLogout={onLogout} />}
        </div>
      </>
    </div>
  );
}
