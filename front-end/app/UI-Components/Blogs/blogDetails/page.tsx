"use client";

import Link from "next/link";

interface Blog {
  id: number;
  image: string;
  tag: string;
  title: string;
  pere: string;
  pere2?: string;
  pere3?: string;
  date: string;
  comment?: string;
}

interface BlogDetailsProps {
  blog: Blog;
  goBack?: () => void;
}

export default function BlogDetails({ blog, goBack }: BlogDetailsProps) {
  if (!blog) return <div>No Blog Found</div>;

  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl">
            Blog Details:
            <span className="text-xl font-normal hidden lg:block ps-2">
              {blog.title}
            </span>
          </h2>
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp;Blog Details
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="w-full lg:w-1/1 flex lg:sticky top-22 left-0 h-[100%]">
            <div className="blog-details">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-md w-full mb-5"
              />
              <span className="bg-[#e6f9ef] p-3 rounded-md text-2xl Unbounded">
                {blog.tag}
              </span>
              <h1 className="text-4xl Unbounded my-4">{blog.title}</h1>
              <p className="text-gray-500 mb-5">
                <i className="bi bi-calender2-week text-[var(--prim-color)] pr-1"></i>{" "}
                {blog.date}
              </p>
              <p className="text-lg mb-3">{blog.pere}</p>
              <p className="text-lg mb-3">{blog.pere2}</p>
              <p className="text-lg mb-3">{blog.pere3}</p>
              {goBack && (
                <button
                  onClick={goBack}
                  className="mt-5 bg-[var(--prim-color)] text-white px-4 py-2 rounded"
                >
                  Go Back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
