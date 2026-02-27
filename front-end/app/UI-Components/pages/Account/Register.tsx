import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  type registerBody = {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordconfirm: string;
  };
  const RegisterHandle = async () => {
    try {
      console.log(name);
      console.log(typeof password);
      console.log(password);
      console.log(typeof passwordconfirm);

      if (password !== passwordconfirm) {
        alert("Passwords do not match!");
        return;
      }
      const ress = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          passwordconfirm,
        }),
      });
      const data = await ress.json();
      console.log("responsive ====>", data);

      if (!ress.ok) {
        if (data.errors) {
          data.errors.forEach((err: any) => alert(err.message));
        } else {
          alert(data.message || "Registration failed");
        }
        return;
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };
  return (
    <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[var(--prim-color)] cursor-pointer">
      <h2 className="Unbounded text-xl mb-10">Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          RegisterHandle();
        }}
      >
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Name*</label>
          <input
            placeholder="Full Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Email address *</label>
          <input
            placeholder="email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Phone*</label>
          <input
            placeholder="phone..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">Password*</label>
          <input
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] "
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="Unbounded mb-2">PasswordConfirm*</label>
          <input
            placeholder="**********"
            value={passwordconfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)] "
          />
        </div>
        <div className="flex">
          <p className="text-gray-600 text-md mb-5">
            Your personal data will be used to process your order,support your
            experience throughout this website,and for other purposes described
            in our{" "}
            <span className="text-[var(--prim-color)] hover:underline">
              privacy policy.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-5 mb-8">
          <button
            type="submit"
            className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] hover:bg-black"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
