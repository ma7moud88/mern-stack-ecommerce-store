"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import toast from "react-hot-toast";

import bestSalesBanner from "@/public/BestSales/special-snacks-img.png";
import products from "@/app/JsonData/BestSales.json";

export const BestSales = () => {
  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} is already in the cart`, {
        icon: "⚠",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      cart.push({ ...product, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));

      window.dispatchEvent(new Event("storageUpdate")); // صححنا اسم الحدث
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Today's Best Sales.</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.Id}
                className="product-wrap border border-gray-300 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer"
              >
                <div className="relative flex justify-center items-center w-full h-60">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                  <span
                    className={`absolute off-product top-2 left-2 px-3 py-1 Merienda text-lg font-bold text-white rounded ${
                      product.sale === "New"
                        ? "bg-yellow-400"
                        : product.sale.includes("%")
                        ? "bg-red-500"
                        : "opacity-0"
                    }`}
                  >
                    {product.sale}
                  </span>
                </div>

                <Link
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: product.Id },
                  }}
                >
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm line-through">{product.lessprice}</span>
                      <span className="text-xl font-semibold">{product.price}</span>
                    </div>

                    <h2 className="text-xl font-normal Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                      {product.title}
                    </h2>
                  </div>
                </Link>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-4 py-2 mt-4 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition"
                >
                  Add To Cart <i className="bi bi-cart"></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        
        <div className="w-full lg:w-1/3 p-8 rounded-2xl best-sale-banner flex flex-col justify-center items-center bg-white shadow-md gap-4">
          <Image src={bestSalesBanner} alt="Best Sales Banner" className="rounded-lg mb-4" />
          <h1 className="text-4xl Merienda text-center">Fresh Vegetables</h1>
          <p className="text-center font-semibold">
            Get the freshest vegetables delivered to your doorstep. Healthy, organic, and full of flavor!
          </p>
          <button className="w-full px-4 py-2 mt-3 text-lg font-semibold text-[var(--prim-color)] bg-white rounded-md hover:bg-black hover:text-white transition">
            Shop New <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
