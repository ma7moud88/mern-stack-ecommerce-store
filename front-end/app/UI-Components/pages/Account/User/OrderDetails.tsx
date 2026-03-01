"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id;

  return (
    <>
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex">
          <Link href="/dashboard/orders" className="text-2xl Unbounded">
            My Orders &nbsp; :
          </Link>
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
            &nbsp;Order #{orderId}
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="border border-gray-300 rounded-lg p-6 mb-8">
          <h2 className="Unbounded text-xl mb-6">Order Information</h2>

          <p>
            <span className="font-semibold">Order ID:</span> #{orderId}
          </p>
          <p>
            <span className="font-semibold">Date:</span> 2026-02-20
          </p>
          <p>
            <span className="font-semibold">Status:</span>
            <span className="text-yellow-600 ml-2 font-semibold">Pending</span>
          </p>
          <p>
            <span className="font-semibold">Total:</span> $120
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="Unbounded text-xl mb-6">Products</h2>

          <div className="flex justify-between border-b pb-4 mb-4">
            <span>Product Name</span>
            <span>$60 × 2</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$120</span>
          </div>
        </div>
      </div>
    </>
  );
}
