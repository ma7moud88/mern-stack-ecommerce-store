"use client";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

export default function page() {
  const [type] = useState<String>("Login");
  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              {" "}
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp;Account
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-center">
          {type === "Login" && <Login />}
          {type === "Register" && <Register />}
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-truck text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">Free Shipping</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-heart-pulse text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">100% Satisfaction</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-credit-card-2-front text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">Secure Payments</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-chat-square-text text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">24/7 Support </h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
