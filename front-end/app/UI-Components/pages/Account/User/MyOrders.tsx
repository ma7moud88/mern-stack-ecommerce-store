"use client";

import Link from "next/link";

export default function OrdersPage() {
  // 🔥 بيانات تجريبية
  const orders = [
    {
      id: "#1234",
      date: "2026-02-20",
      status: "Pending",
      total: "$120",
    },
    {
      id: "#1235",
      date: "2026-02-18",
      status: "Completed",
      total: "$250",
    },
    {
      id: "#1236",
      date: "2026-02-15",
      status: "Cancelled",
      total: "$80",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "";
    }
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
            &nbsp;My Orders
          </h2>
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="px-[8%] lg:px-[12%] py-10">

        <div className="border border-gray-300 rounded-lg p-6 overflow-x-auto">
          <h2 className="Unbounded text-xl mb-6">
            All Orders
          </h2>

          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="py-3">Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 font-semibold">{order.id}</td>
                  <td>{order.date}</td>
                  <td className={`font-semibold ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </td>
                  <td>{order.total}</td>
                  <td>
                    <Link
                      href={`/dashboard/orders/${order.id.replace("#", "")}`}
                      className="px-4 py-2 text-sm bg-[var(--prim-color)] text-white rounded-md hover:bg-black transition"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </>
  );
}