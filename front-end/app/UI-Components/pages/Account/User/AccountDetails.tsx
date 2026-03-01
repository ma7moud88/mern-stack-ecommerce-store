"use client";

import Link from "next/link";
import { useState } from "react";

export default function AccountDetailsPage() {
  const [user, setUser] = useState({
    name: "Mahmoud Abusulaiman",
    email: "mahmoud@example.com",
  });

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUpdateInfo = (e: any) => {
    e.preventDefault();
    setUser({ ...user, name: form.name, email: form.email });
    alert("Account info updated successfully!");
  };

  const handleChangePassword = (e: any) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setForm({
      ...form,
      password: form.newPassword,
      newPassword: "",
      confirmPassword: "",
    });
    alert("Password updated successfully!");
  };

  return (
    <>
      {/* 🔹 Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex">
          <Link href="/dashboard" className="text-2xl Unbounded">
            Home &nbsp; :
          </Link>
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
            &nbsp;Account Details
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10 grid md:grid-cols-2 gap-10">
        {/* ✏️ Edit Info */}
        <div className="border border-gray-300 rounded-lg p-6 hover:border-[var(--prim-color)] transition">
          <h2 className="Unbounded text-xl mb-6">Edit Information</h2>
          <form onSubmit={handleUpdateInfo} className="flex flex-col gap-5">
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--prim-color)] text-white rounded-md hover:bg-black transition"
            >
              Update Info
            </button>
          </form>
        </div>

        {/* 🔐 Change Password */}
        <div className="border border-gray-300 rounded-lg p-6 hover:border-[var(--prim-color)] transition">
          <h2 className="Unbounded text-xl mb-6">Change Password</h2>
          <form onSubmit={handleChangePassword} className="flex flex-col gap-5">
            <input
              placeholder="Current Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />
            <input
              placeholder="New Password"
              type="password"
              value={form.newPassword}
              onChange={(e) =>
                setForm({ ...form, newPassword: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />
            <input
              placeholder="Confirm New Password"
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--prim-color)] text-white rounded-md hover:bg-black transition"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
