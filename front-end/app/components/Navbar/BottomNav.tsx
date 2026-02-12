"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navlink: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Cart", href: "/UI-Components/pages/cart" },
      { label: "WishList", href: "/UI-Components/pages/wishlist" },
      { label: "CheckOut", href: "/UI-Components/pages/Checkout" },
      { label: "Account", href: "/UI-Components/pages/Account" },
    ],
  },
  {
    label: "Blog",
    href: "/UI-Components/Blogs",
  },
  { label: "Contact Us", href: "/UI-Components/pages/Contact" },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Wishlist & Cart count
  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      setCartCount(new Set(cart.map((item: any) => item.Id)).size);
      setWishListCount(new Set(wishlist.map((item: any) => item.Id)).size);
    };

    loadCounts();
    window.addEventListener("storageUpdate", loadCounts);

    return () => window.removeEventListener("storageUpdate", loadCounts);
  }, []);

  return (
    <>
      <div
        className={`w-full bg-white shadow-sm transition-all duration-500 ${
          isFixed ? "fixed top-0 left-0 z-50" : ""
        }`}
      >
        <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
          {/* Logo */}
          <Link
            href="/"
            className={`text-3xl font-bold Merienda text-black hidden ${
              isFixed ? "lg:flex" : "hidden"
            }`}
          >
            Snack <span className="text-[var(--prim-color)]">Basket</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 menu-link">
            {navlink.map((link) => (
              <div key={link.label} className="relative group">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label}
                  {link.dropdown && <i className="ri-arrow-down-s-line"></i>}
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px] z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Phone Button */}
          <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 hidden lg:flex">
            <i className="bi bi-telephone pe-2 text-xl"></i> +201004426705
          </button>

          {/* Mobile Menu Button + Icons */}
          <div className="lg:hidden flex items-center justify-between gap-4 w-full">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl"
            >
              <i className="ri-menu-line"></i>
            </button>

            <div className="flex items-center space-x-6">
              {/* Wishlist */}
              <Link href="/UI-Components/Pages/wishlist" className="relative">
                <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)]"></i>
                {wishListCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {wishListCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/UI-Components/Pages/cart" className="relative">
                <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)]"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3">
              <i className="bi bi-telephone pe-2 text-xl"></i> +2010123456789
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            <nav className="flex flex-col px-[4%] py-4 space-y-2">
              {navlink.map((link) => (
                <div key={link.label} className="flex flex-col">
                  {/* Main Link */}
                  <div className="flex items-center justify-between py-2">
                    <Link href={link.href} className="font-medium">
                      {link.label}
                    </Link>

                    {/* Dropdown Toggle Arrow */}
                    {link.dropdown && (
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label,
                          )
                        }
                        className="text-xl"
                      >
                        <i
                          className={`ri-arrow-down-s-line transition-transform duration-300 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                    )}
                  </div>

                  {/* Dropdown Items */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className="pl-4 space-y-2 pb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-gray-600 hover:text-[var(--prim-color)] transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
