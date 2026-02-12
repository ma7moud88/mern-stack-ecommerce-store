"use client";

import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deals1 from "@/public/Deals-img1.png";
import Deals2 from "@/public/Deals-img2.png";

import products from "@/app/JsonData/BestDeals.json";

import toast from "react-hot-toast";
import Link from "next/link";

type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealsData: DealItem[] = [
  {
    image: Deals1,
    title: "Fresh Vegetables",
    description:
      "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
  },
  {
    image: Deals2,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap2",
  },
  {
    image: Deals1,
    title: "Fresh Vegetables",
    description:
      "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
  },
];

export default function Deals() {
  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

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

      window.dispatchEvent(new Event("storageUpdata"));
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <>
      <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-10">
        {/* Title */}
        <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl Unbounded">
            Today's Best Deals.
          </h1>
        </div>

        {/* Swiper Section */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          speed={1200}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
        >
          {dealsData.map((deal, index) => (
            <SwiperSlide key={index}>
              <div
                className={`deals-wrap px-4 sm:px-6 py-6 rounded-2xl flex flex-col lg:flex-row gap-6 justify-between items-center ${
                  deal.className || ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    className="object-contain max-w-[250px] sm:max-w-[300px]"
                  />
                </div>

                {/* Info */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="Merienda font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug whitespace-pre-line">
                    {deal.title}
                  </h2>

                  <p className="my-3 text-gray-800 text-sm sm:text-base font-normal">
                    {deal.description}
                  </p>

                  <button className="px-4 sm:px-5 py-2 sm:py-3 rounded-full text-white font-bold mt-4 bg-[var(--prim-color)] hover:bg-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer text-sm sm:text-base">
                    Shop Now <i className="bi bi-arrow-right ps-2"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Best Deals Products */}
        <div className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <div
                key={product.Id}
                className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
              >
                {/* Product Image */}
                <div className="relative flex justify-center items-center w-full h-[180px] sm:h-[200px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute top-2 right-2 px-3 py-1 text-sm font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-full hover:bg-[var(--prim-color)] hover:text-white transition"
                  >
                    Add <i className="bi bi-cart"></i>
                  </button>
                </div>

                {/* Product Info */}
                <Link
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: product.Id },
                  }}
                >
                  <div className="space-y-2 mt-5 product-info">
                    {/* Price */}
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <span className="text-gray-500 text-sm line-through">
                        {product.lessprice}
                      </span>
                      <span className="text-lg sm:text-xl font-semibold">
                        {product.price}
                      </span>
                    </div>

                    {/* Review */}
                    <span className="flex items-center justify-center lg:justify-start text-yellow-500 text-sm sm:text-md">
                      <i className="bi bi-star-fill me-1"></i>
                      {product.review}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition text-center lg:text-left">
                      {product.title}
                    </h2>

                    {/* Shop */}
                    <h6 className="text-sm sm:text-lg text-gray-500 flex items-center justify-center lg:justify-start gap-1">
                      <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                      Lucky Supermarket
                    </h6>

                    {/* Sold */}
                    <h3 className="mt-2 Unbounded text-sm sm:text-md text-gray-600 text-center lg:text-left">
                      Sold: {product.sold}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
