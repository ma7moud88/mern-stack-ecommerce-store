"use client";

import Image from "next/image";
import satisfaction from "@/public/satisfaction-icon.png";
import Deals from "../../index/Deals/Deals";
import toast from "react-hot-toast";

interface ProductType {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
}

interface Props {
  id?: string;
  products: ProductType[];
}

export const ProductDetails = ({ id, products }: Props) => {
  if (!id) {
    return (
      <div className="px-5 sm:px-8 lg:px-12 py-10">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.Id} className="border p-4 rounded-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="font-bold mt-2">{product.title}</h2>
              <p className="text-green-600">{product.price}</p>
              {product.lessprice && (
                <p className="line-through text-gray-500">
                  {product.lessprice}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const product = products.find((item) => String(item.Id) === String(id));
  if (!product) return <p>Product Not Found!</p>;

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
      window.dispatchEvent(new Event("storageUpdata"));
      toast.success(`${product.title} added to wishlist!`);
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="px-5 sm:px-8 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-5">
              <div className="border border-gray-300 rounded-2xl w-full lg:w-1/2 flex justify-center items-center p-5 lg:p-20">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="Unbounded text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {product.title}
                </h2>

                <span className="flex items-center border-b border-gray-300 pb-3 text-yellow-500 text-sm sm:text-md mt-2">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  &nbsp;
                  <span className="text-black font-medium text-sm sm:text-md">
                    4.5 star Rating {product.review}
                  </span>
                </span>

                <p className="text-gray-600 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus culpa, est illo id sapiente veniam autem distinctio
                  sunt mollitia possimus!
                </p>

                <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                  <h3 className="Unbounded text-xl sm:text-2xl font-bold">
                    {product.price}
                  </h3>
                  <del className="text-gray-500">{product.lessprice}</del>
                </div>

                <span className="my-3 bg-[#97ffc971] px-2 py-2 sm:py-3 rounded-md text-sm sm:text-base">
                  Special Offer: <strong>5 Days</strong> Remains until the end
                  of the offer
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <div className="border border-gray-300 rounded-md overflow-hidden">
                {/* Shop Info */}
                <div className="p-3">
                  <div className="flex justify-between items-center gap-2 px-2 bg-[var(--prim-color)] p-3 rounded-full">
                    <span className="text-white flex items-center gap-2">
                      <i className="bi bi-shop bg-white text-black px-3 py-2 rounded-full"></i>
                      By <span className="font-semibold">SnackBasket</span>
                    </span>
                    <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                      View More
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-[#97ffc871] flex flex-col gap-3">
                  {[
                    {
                      icon: "bi-truck",
                      title: "Fast Delivery",
                      desc: "Lightning-fast shipping, guaranteed.",
                    },
                    {
                      icon: "bi-arrow-return-left",
                      title: "Free 30-day returns",
                      desc: "Shop risk-free with easy returns.",
                    },
                    {
                      icon: "bi-bag-check",
                      title: "Pickup available at Shop location",
                      desc: "Usually ready in 24 hours.",
                    },
                    {
                      icon: "bi-bag-check",
                      title: "Payment",
                      desc: "Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.",
                    },
                    {
                      icon: "bi-clipboard-heart",
                      title: "Warranty",
                      desc: "The Consumer Protection Act does not provide for the return of this product of proper quality.",
                    },
                    {
                      icon: "bi-box2-heart",
                      title: "Packaging",
                      desc: "Research & development value proposition graphical user interface investor.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center px-5 py-3 border-b border-gray-300 gap-3"
                    >
                      <i
                        className={`bi ${item.icon} mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white`}
                      ></i>
                      <div className="flex flex-col">
                        <h3 className="Unbounded font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="border border-gray-300 mt-10 rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center border-b p-3 gap-3">
              <span className="bg-[var(--prim-color)] px-4 py-2 text-white font-semibold text-xl rounded-full">
                Description
              </span>
              <span className="bg-[#97ffc871] px-4 py-2 text-[var(--prim-color)] font-semibold text-xl rounded-full flex items-center gap-2">
                <Image
                  src={satisfaction}
                  alt="satisfaction"
                  className="w-6 h-6"
                />
                100% satisfaction Guaranteed
              </span>
            </div>

            <div className="p-5 mt-5">
              <h2 className="Unbounded text-2xl mb-3">Product Description</h2>
              <p className="text-gray-500 mb-1">
                Wherever celebrations and good times happen, the LAY'S brand
                will be there just as it has been for more than 75 years. With
                flavors almost as rich as our history, we have a chip or crisp
                flavor guaranteed to bring a smile on your face.
              </p>
              <p className="text-gray-500 mb-1">
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                auctor, eleifend nunc a, lobortis neque. viverra. Maecenas lacus
                odio, feugiat eu nunc sit amet, maximus sagittis dolor.
              </p>
              <p className="text-gray-500 mb-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                perferendis perspiciatis temporibus voluptate, nemo quod
                dignissimos nam molestias nulla a officia eos, voluptatem beatae
                provident, dolorum suscipit aspernatur doloribus. Ut.
              </p>

              <div className="mt-5 ps-5 space-y-1">
                <p className="text-gray-500">
                  • 8.0 oz. bag of LAY'S Classic Potato Chips
                </p>
                <p className="text-gray-500">
                  Tasty LAY's potato chips are a great snack
                </p>
                <p className="text-gray-500">
                  Includes three ingredients: potatoes, oil, and salt
                </p>
                <p className="text-gray-500">Gluten free product</p>
              </div>

              <div className="mt-3 space-y-1">
                <p className="text-gray-500">Made in USA</p>
                <p className="text-gray-500">Ready To Eat</p>
              </div>

              <h2 className="Unbounded text-2xl mb-3 mt-8">
                Product Specifications
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Product Type", value: "Chips & Dips" },
                  { label: "Product Name", value: product.title },
                  { label: "Brand", value: "Lay's" },
                  { label: "FSA Eligible", value: "No" },
                  { label: "Size/Count", value: "8.0oz" },
                  { label: "Item Code", value: "425652" },
                  {
                    label: "Ingredients",
                    value: "Potatoes, Vegetable Oil, and Salt.",
                  },
                ].map((item, idx) => (
                  <p key={idx} className="text-gray-500">
                    <i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>
                    <span className="font-semibold">{item.label}: </span>
                    {item.value}
                  </p>
                ))}
              </div>

              <h2 className="Unbounded text-2xl mb-3 mt-8">Nutrition Facts</h2>
              <div className="space-y-2">
                {[
                  "Total Fat 10g 13%",
                  "Saturated Fat 1.5g 7%",
                  "Cholesterol 0mg 0%",
                  "Sodium 170mg 7%",
                  "Potassium 350mg 6%",
                ].map((item, idx) => (
                  <p key={idx} className="text-gray-500">
                    <i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>
                    <span className="font-semibold">{item}</span>
                  </p>
                ))}
              </div>

              <h2 className="Unbounded text-2xl mb-3 mt-8">More Details</h2>
              <div className="space-y-2">
                {[
                  "Lunarlon midsole delivers ultra-plush responsiveness",
                  "Encapsulated Air-Sole heel unit for lightweight cushioning",
                  "Colour Shown: Ale Brown/Black/Goldtone/Ale Brown",
                  "Style: 805899-202",
                ].map((item, idx) => (
                  <p key={idx} className="text-gray-500">
                    <i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Deals />
    </>
  );
};
