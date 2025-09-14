import axios from "axios";
import React from "react";
import { setCookie } from "../config/cookiesMethod";

export default function Logout() {
  const url = "http://localhost:8080/api/auth/logout";

  const logoutUser = async () => {
    const response = await axios.post(
      url,
      {
        email: "sample@gmail.com",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-CSRF-TOKEN": "",
          "Content-Type": "application/json",
        },
      }
    );
    document.cookie = setCookie("isLoggedIn", false, 5);
    location.href = "/login";
  };

  return (
    <>
      <button
        href="logout"
        onClick={logoutUser}
        class="bg-red-600 text-white px-4 py-2 text-center rounded hover:bg-red-700"
      >
        Logout
      </button>
    </>
  );
}
