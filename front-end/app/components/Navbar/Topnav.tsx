import Link from "next/link";

export default function Topnav() {
  return (
    <>
      <div className="w-full bg-[var(--prim-color)] text-white text-sm">
        <div className="flex items-center justify-between py-3 px-[8%] lg:px-[12%]">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="pr-3 border-r-2 border-gray-300 hover:underline"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="pr-3 border-r-2 border-gray-300 hover:underline"
            >
              Free Delivery
            </Link>
            <Link
              href="#"
              className=" pr-3 border-r-2 border-gray-300 hover:underline"
            >
              Returns Policy
            </Link>
          </div>
          <div className="ml-5">
            <Link
              href="/UI-Components/pages/Account"
              className=" hover:underline"
            >
              My Accont
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
