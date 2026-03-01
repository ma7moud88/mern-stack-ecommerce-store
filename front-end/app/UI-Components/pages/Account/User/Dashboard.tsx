"use client";

import Link from "next/link";

export default function DashboardPage() {
  // 🔥 بيانات تجريبية لحد ما تربطها بالباك
  const user = {
    name: "Abdullah",
    email: "abdullah@email.com",
    phone: "01000000000",
  };

  const ordersSummary = {
    total: 12,
    pending: 2,
    completed: 9,
  };

  const latestOrder = {
    id: "#1234",
    date: "2026-02-20",
    status: "Pending",
    total: "$120",
  };

  return (
    <>
      {/* 🔹 Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex">
          <Link href="/" className="text-2xl Unbounded">
            Home &nbsp; :
          </Link>
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
            &nbsp;Dashboard
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">

        {/* 👋 Welcome */}
        <h2 className="Unbounded text-2xl mb-8">
          Hello, {user.name} 👋
        </h2>

        {/* 📊 Orders Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <StatCard title="Total Orders" value={ordersSummary.total} />
          <StatCard title="Pending Orders" value={ordersSummary.pending} />
          <StatCard title="Completed Orders" value={ordersSummary.completed} />
        </div>

        {/* 📦 Latest Order */}
        <div className="border border-gray-300 rounded-lg p-6 mb-10 hover:border-[var(--prim-color)] transition">
          <h2 className="Unbounded text-xl mb-6">Latest Order</h2>

          <div className="flex flex-col gap-3">
            <p>
              <span className="font-semibold">Order ID:</span>{" "}
              {latestOrder.id}
            </p>
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {latestOrder.date}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`ml-2 font-semibold ${
                  latestOrder.status === "Pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {latestOrder.status}
              </span>
            </p>
            <p>
              <span className="font-semibold">Total:</span>{" "}
              {latestOrder.total}
            </p>
          </div>

          <button className="mt-6 px-6 py-2 bg-[var(--prim-color)] text-white rounded-md hover:bg-black transition">
            View Details
          </button>
        </div>

        {/* 👤 Account Info */}
        <div className="border border-gray-300 rounded-lg p-6 hover:border-[var(--prim-color)] transition">
          <h2 className="Unbounded text-xl mb-6">
            Account Information
          </h2>

          <div className="flex flex-col gap-3">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
          </div>

          <button className="mt-6 px-6 py-2 border border-[var(--prim-color)] text-[var(--prim-color)] rounded-md hover:bg-[var(--prim-light)] transition">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

/* 🔹 Reusable Stat Card */
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[var(--prim-light)] p-6 rounded-lg hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}   