"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import products from "@/app/JsonData/HotDeals.json";
import hotDealBanner from "@/public/hot-deals-img.png";
import toast from "react-hot-toast";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Product {
  Id: string;
  title: string;
  price: string;
  lessprice: string;
  image: string;
  sale: string;
  review: string;
  sold: string;
}

export default function HotDeals() {
  const [bannerHeight, setBannerHeight] = useState<number>(0);
  const productsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let maxHeight = 0;
    productsRef.current.forEach((el) => {
      if (el) {
        maxHeight = Math.max(maxHeight, el.offsetHeight);
      }
    });
    setBannerHeight(maxHeight);
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find(
      (item: Product) => item.Id === product.Id
    );

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
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} added to cart!`);
    }
  };

  const handleAddToWishlist = (product: Product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const existingProduct = wishlist.find(
      (item: Product) => item.Id === product.Id
    );

    if (existingProduct) {
      toast(`${product.title} is already in the wishlist`, {
        icon: "⚠",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      wishlist.push({ ...product, qty: 1 });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} added to wishlist!`);
    }
  };

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Today's Hot Deals.</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-5">
        {/* Banner */}
        <div
          className="w-full lg:w-1/3 p-10 rounded-2xl hot-deal-banner flex flex-col justify-center text-center overflow-hidden"
          style={{ height: bannerHeight ? `${bannerHeight}px` : "auto" }}
        >
          <div className="w-full flex justify-center items-center mb-4">
            <Image
              src={hotDealBanner}
              alt="Hot Deal Banner"
              className="rounded-lg object-contain"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-4xl text-white Merienda my-5">
            Fresh Vegetables
          </h1>
          <p className="text-white font-semibold mb-3">
            Get the freshest vegetables delivered to your doorstep. Healthy,
            organic, and full of flavor!
          </p>
          <button
            onClick={() => console.log("Shop Now clicked")}
            className="w-full px-4 py-2 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-black hover:text-white cursor-pointer transition"
          >
            Shop Now <i className="bi bi-cart"></i>
          </button>
        </div>

        {/* Products Slider */}
        <div className="w-full lg:w-2/3 flex-1">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2.5 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {products.map((product: Product, index) => (
              <SwiperSlide key={product.Id}>
                <div
                  className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer h-full flex flex-col justify-between overflow-hidden"
                  ref={(el) => { productsRef.current[index] = el! }}
                >
                  {/* Product Image */}
                  <div className="relative w-full h-[200px] flex justify-center items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                    <div
                      onClick={() => handleAddToWishlist(product)}
                      className="absolute top-2 left-2 w-[50px] h-[50px] rounded-full bg-[var(--prim-light)] text-[var(--prim-color)] flex justify-center items-center hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300"
                    >
                      <i className="bi bi-balloon-heart text-xl"></i>
                    </div>
                    <span
                      className={`absolute off-product top-2 right-2 px-4 py-2 Merienda text-xl font-bold text-white rounded ${
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

                  {/* Product Info */}
                  <Link
                    href={{
                      pathname: "/UI-Components/Shop",
                      query: { id: product.Id },
                    }}
                    className="flex-1"
                  >
                    <div className="space-y-1 mt-5 product-info">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm line-through">
                          {product.lessprice}
                        </span>
                        <span className="text-xl font-semibold">
                          {product.price}
                        </span>
                      </div>
                      <h6 className="text-lg text-gray-500 flex items-center gap-1">
                        <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                        By Lucky Supermarket
                      </h6>
                      <h2 className="text-xl font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-300 truncate">
                        {product.title}
                      </h2>
                      <span className="flex items-center text-yellow-500 text-md">
                        <i className="bi bi-star-fill me-1"></i>{" "}
                        {product.review}
                      </span>
                      <h3 className="mt-2 Unbounded text-md text-gray-600">
                        Sold: {product.sold}
                      </h3>
                    </div>
                  </Link>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-2 my-2 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white cursor-pointer transition"
                  >
                    Add To Cart <i className="bi bi-cart"></i>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
