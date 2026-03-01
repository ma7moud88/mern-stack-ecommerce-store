"use client";

import { useEffect, useState } from "react";
import Login from "./Login";
import AdminPage from "./Admin/AdminPage";
import UserPage from "./User/UserPage";
import Register from "./Register";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [authType, setAuthType] = useState<"Login" | "Register">("Login");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const handleLogin = (loggedInUser: any) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };
  const handleRegister = (registeredUser: any) => {
    localStorage.setItem("user", JSON.stringify(registeredUser));
    setUser(registeredUser);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return (
      <div className="flex flex-col items-center my-20 mx-2">
        {authType === "Login" ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Register onRegister={handleRegister} />
        )}
        <div className="mt-5">
          {authType === "Login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setAuthType("Register")}
                className="text-[var(--prim-color)] font-semibold underline"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setAuthType("Login")}
                className="text-[var(--prim-color)] font-semibold underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }
  return user.role?.toLowerCase() === "admin" ? (
    <AdminPage user={user} onLogout={handleLogout} />
  ) : (
    <UserPage user={user} onLogout={handleLogout} />
  );
}
