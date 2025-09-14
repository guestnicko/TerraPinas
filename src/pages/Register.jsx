import React, { useState } from "react";
import NavBar from "../components/navbar";
import { register } from "../config/register";
function Register() {
  const [email, setEmail] = useState("");
  const [full_name, setFull_Name] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmation] = useState("");
  let data = {
    email: email,
    full_name: full_name,
    password: password,
    password_confirmation: password_confirmation,
  };
  const handleForm = (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    register(data);
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6 text-center text-green-600">
            Create an Account
          </h2>

          <form onSubmit={handleForm} method="POST" class="space-y-5">
            <div>
              <label class="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                class="w-full mt-1 p-2 border rounded"
                onChange={(e) => setFull_Name(e.target.value)}
                value={full_name}
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                class="w-full mt-1 p-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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

            <div>
              <label class="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                class="w-full mt-1 p-2 border rounded"
                onChange={(e) => setConfirmation(e.target.value)}
                value={password_confirmation}
              />
            </div>

            <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Register
            </button>
          </form>

          <p class="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="login" class="text-green-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Register;
