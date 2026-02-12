"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import products from "@/app/JsonData/ShortProducts.json";
import toast from "react-hot-toast";
import Link from "next/link";

export const Products = () => {
  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} is already in the  cart`, {
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
  const handleAddToWishlist = (product: any) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: any) => item.Id === product.Id
    );

    if (existingProduct) {
      toast(`${product.title} is already in the  wishlist`, {
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

      window.dispatchEvent(new Event("storageUpdata"));
      toast.success(`${product.title} added to wishlist!`);
    }
  };
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
          {/* Featured */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[var(--prim-color)] transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-[var(--prim-light)] py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">
                Featured Products
              </h2>
            </div>
            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.Featured.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
                <SwiperSlide>
                  {products.Featured.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* Top Selling */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[var(--prim-color)] transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-[var(--prim-light)] py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">
                Top Selling Products
              </h2>
            </div>
            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.TopSelling.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
                <SwiperSlide>
                  {products.TopSelling.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* On-sale */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[var(--prim-color)] transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-[var(--prim-light)] py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">
                On-Sale Products
              </h2>
            </div>
            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.OnSale.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
                <SwiperSlide>
                  {products.OnSale.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* Top Rated */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[var(--prim-color)] transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-[var(--prim-light)] py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">
                Top Rated Products
              </h2>
            </div>
            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.TopRated.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
                <SwiperSlide>
                  {products.TopRated.map((item) => (
                    <Link
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id },
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border border-gray-300 rounded-2xl"
                          />
                        </div>
                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8
                            <i className="bi-star-fill text-yellow-500"></i>
                            {item.review}
                          </h5>
                          <h2 className="Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                            {item.title}
                          </h2>
                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">
                              {item.lessprice}
                            </del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
