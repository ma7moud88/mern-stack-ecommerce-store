"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      country: "Egypt",
      city: "Qina",
      street: "23 Nile Street",
      phone: "01000000000",
    },
  ]);

  const [form, setForm] = useState({
    country: "",
    city: "",
    street: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId ? { ...addr, ...form } : addr,
        ),
      );
      setEditingId(null);
    } else {
      setAddresses([...addresses, { id: Date.now(), ...form }]);
    }

    setForm({
      country: "",
      city: "",
      street: "",
      phone: "",
    });
  };

  const handleEdit = (address: any) => {
    setForm(address);
    setEditingId(address.id);
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
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
            &nbsp;Addresses
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        {/* 📍 Address List */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="border border-gray-300 rounded-lg p-6 hover:border-[var(--prim-color)] transition"
            >
              <h3 className="font-semibold mb-2">{addr.country}</h3>
              <p>{addr.city}</p>
              <p>{addr.street}</p>
              <p>{addr.phone}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEdit(addr)}
                  className="px-4 py-2 border border-[var(--prim-color)] text-[var(--prim-color)] rounded-md hover:bg-[var(--prim-light)] transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(addr.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ➕ Add / Edit Form */}
        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="Unbounded text-xl mb-6">
            {editingId ? "Edit Address" : "Add New Address"}
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />

            <input
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />

            <input
              placeholder="Street Address"
              value={form.street}
              onChange={(e) => setForm({ ...form, street: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />

            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:border-[var(--prim-color)] outline-none"
              required
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--prim-color)] text-white rounded-md hover:bg-black transition"
              >
                {editingId ? "Update Address" : "Add Address"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
