import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl">Contact</h2>
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              {" "}
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp;Contact
            </h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Login */}
          <div className="w-full lg:w-1/1 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[var(--prim-color)] cursor-pointer">
            <h2 className="Unbounded text-xl mb-10">Make Custom Request</h2>
            <form>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                <div className="flex flex-col mb-5 w-full">
                  <label className="Unbounded mb-2">Full Name *</label>
                  <input
                    placeholder="Full Name..."
                    type="text"
                    className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                  />
                </div>
                <div className="flex flex-col mb-5 w-full">
                  <label className="Unbounded mb-2">Email Address</label>
                  <input
                    placeholder="email..."
                    type="email"
                    className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] "
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                <div className="flex flex-col mb-5 w-full">
                  <label className="Unbounded mb-2">Phone Number</label>
                  <input
                    placeholder="010123456789"
                    type="number"
                    className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] "
                  />
                </div>
                <div className="flex flex-col mb-5 w-full">
                  <label className="Unbounded mb-2">Subject</label>
                  <input
                    placeholder="Subject..."
                    type="text"
                    className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] "
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5 w-full">
                <label className="Unbounded mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Type your Message..."
                  className="w-full rounded-md  border border-gray-300 p-3"
                ></textarea>
              </div>
              <div className="flex items-center gap-5 mb-8">
                <button className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] hover:bg-black">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 gap-3 sticky top-25 left-0 h-[100%] hover:border-[var(--prim-color)] cursor-pointer">
            <div className="border border-gray-300 px-5 rounded-lg py-6">
              <h2 className="Unbounded text-xl mb-10">Get In Touch</h2>
              <div className="flex flex-col gap-8 mt-5">
                <p className="text-[var(--prim-color)] Unbounded">
                  <i className="bi bi-telephone-fill mr-2 text-xl border border-[var(--prim-color)] text-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                  +20 1004426705
                </p>
                <p className="text-[var(--prim-color)] Unbounded">
                  <i className="bi bi-envelope-fill mr-2 text-xl border border-[var(--prim-color)] text-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                  snackbasket@gmail.com
                </p>
                <p className="text-[var(--prim-color)] Unbounded">
                  <i className="bi bi-geo-alt-fill mr-2 text-xl border border-[var(--prim-color)] text-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                   +0 Qena ,Qena , Egypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-truck text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">Free Shipping</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-heart-pulse text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">100% Satisfaction</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-credit-card-2-front text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">Secure Payments</h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]">
            <i className="bi bi-chat-square-text text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white"></i>
            <div className="flex flex-col">
              <h2 className="font-semibold Unbounded">24/7 Support </h2>
              <p className="text-gray-700">Free shipping all over the US</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
