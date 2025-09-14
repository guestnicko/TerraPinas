import React, { useState } from "react";
import NavBar from "../components/navbar";
import { login } from "../config/login.js";
import { setCookie } from "../config/cookiesMethod";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const response = await login(email, password);
      if (response == null) {
        return;
      }

      if (response.status == 200) {
        setCookie("isLoggedIn", true, 5);
        location.href = "/profile";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6 text-center text-green-600">
            Login to LandNest
          </h2>

          <form method="POST" class="space-y-5" onSubmit={handleForm}>
            <div>
              <label class="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                class="w-full mt-1 p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                class="w-full mt-1 p-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Login
            </button>
          </form>

          <p class="text-sm text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <a href="register" class="text-green-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
