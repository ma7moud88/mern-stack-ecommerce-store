"use client";

import { useRouter } from "next/navigation";

export default function LogoutPage({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="px-[8%] lg:px-[12%] py-20 flex flex-col items-center justify-center gap-8">
      <h2 className="Unbounded text-3xl text-[var(--prim-color)] font-semibold">
        Are you sure you want to logout?
      </h2>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          onLogout();
        }}
        className="px-10 py-4 bg-red-500 text-white rounded-md text-xl hover:bg-black transition"
      >
        Logout
      </button>
    </div>
  );
}
