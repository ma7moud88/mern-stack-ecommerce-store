/** @format */

"use client";

import Link from "next/link";

// All josn data
import BestDeals from "@/app/JsonData/BestDeals.json";
import Arrivals from "@/app/JsonData/Arrivals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";

import { useEffect, useMemo, useState } from "react";

interface ProductType {
  Id: string;
  title?: string;
  Name?: string;
  ProductImage?: string;
  image?: string;
  price?: string;
  Price?: string;
}

export default function MiddleNav() {
  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);

  // search stats
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);

  const allProducts: ProductType[] = useMemo(
    () => [
      ...Arrivals,
      ...BestDeals,
      ...BestSales,
      ...HotDeals,
      ...OrganicFood,
      ...Recommend,
      ...(ShortProducts?.Featured?.map((p) => ({
        ...p,
        Id: `Featured-${p.Id}`,
      })) || []),
      ...(ShortProducts?.TopSelling?.map((p) => ({
        ...p,
        Id: `Featured-${p.Id}`,
      })) || []),
      ...(ShortProducts?.TopRated?.map((p) => ({
        ...p,
        Id: `Featured-${p.Id}`,
      })) || []),
      ...(ShortProducts?.OnSale?.map((p) => ({
        ...p,
        Id: `Featured-${p.Id}`,
      })) || []),
    ],
    [],
  );

  // filter product by Search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((p) =>
      (p.Name || p.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setResults(filtered);
  }, [searchTerm, allProducts]);

  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      const uniqueCart = new Set(cart.map((item: any) => item.Id));
      const uniqueWishlist = new Set(wishlist.map((item: any) => item.Id));

      setCartCount(uniqueCart.size);
      setWishListCount(uniqueWishlist.size);
    };
    loadCounts();
    window.addEventListener("storageUpdata", loadCounts);
    return () => window.removeEventListener("storageUpdata", loadCounts);
  }, []);

  return (
    <>
      <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between py-3 px-[8%] lg:px-[12%]">
          {/* logo */}
          <Link
            href="/"
            className="text-3xl font-bold Merienda text-black text-center lg:text-left"
          >
            Snack <span className="text-[var(--prim-color)]">Basket</span>
          </Link>

          {/* search */}
          <div className="flex flex-1 w-full lg:ms-6 lg:mx-0 max-w-xl relative">
            <input
              type="text"
              placeholder="search for a Product or Brand"
              className="flex-1 w-full border px-3 py-2 rounded-s-lg border-gray-400 outline-none "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-[var(--prim-color)] text-white px-3 rounded-r cursor-pointer  ">
              <i className="bi bi-search"></i>
            </button>
            {/* search Result */}
            {results.length > 0 && (
              <div className="search-result absolute top-12 left-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-2 grid grid-cols-1 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto ">
                {results.map((item, index) => (
                  <Link
                    key={`${item.Id}-${index}`}
                    href={{
                      pathname: "/UI-Components/Shop",
                      query: { id: item.Id },
                    }}
                    onClick={() => setSearchTerm("")}
                  >
                    <div className="flex flex-col items-center p-2 border border-gray-300 rounded hover:shadow-lg transition-all">
                      <img
                        src={item.ProductImage || item.image}
                        alt={item.Name || item.title}
                        className="w-full object-cover rounded"
                      />
                      <div className="font-semibold text-sm text-center mt-2">
                        {item.Name || item.title}
                      </div>
                      <p className="text-gray-500 text-xs mt-1">
                        ${item.Price || item.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* location dropdown  */}
            <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
              <div className="bi bi-geo-alt text-lg text-[var(--prim-color)]">
                <select
                  name="location"
                  className="px-3 rounded-lg text-[var(--prim-color)] font-semibold focus:border-[var(--prim-color)] appearance-none cursor-pointer outline-none"
                  defaultValue="Cairo"
                >
                  <option>Qena</option>
                  <option>Alexandria</option>
                  <option>Assiut</option>
                  <option>Sohag</option>
                  <option>Aswan</option>
                  <option>Luxor</option>
                </select>
              </div>
            </div>
          </div>
          {/* wishlist&cart */}
          <div className="hidden lg:flex items-center space-x-6 ">
            {/* wishlist */}
            <Link href="/UI-Components/pages/wishlist" className="relative">
              <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
              {wishListCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishListCount}
                </span>
              )}
            </Link>
            {/* Cart */}
            <Link href="/UI-Components/pages/cart" className="relative">
              <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
