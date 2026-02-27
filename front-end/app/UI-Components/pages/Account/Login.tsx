import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  type LoginBody = {
    email: string;
    password: string;
  };
  const handleLogin = async () => {
    try {
      console.log("Sending login data:", { email, password });
      const ress = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await ress.json();
      console.log("res===>", data);
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };
  return (
    <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[var(--prim-color)] cursor-pointer mx-auto lg:mx-0">
      <h2 className="Unbounded text-xl mb-10 text-center lg:text-left">
        Login
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="flex flex-col"
      >
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Username or email address *</label>
          <input
            placeholder="Full Name..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] w-full"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Password!</label>
          <input
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 mb-8">
          <button
            type="submit"
            className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] hover:bg-black w-full lg:w-auto"
          >
            Login
          </button>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <label className="text-xl cursor-pointer">Remember me</label>
          </div>
        </div>
      </form>
    </div>
  );
}
