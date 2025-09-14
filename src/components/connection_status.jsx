import axios from "axios";
import React, { useEffect, useState } from "react";
import { setCookie } from "../config/cookiesMethod";

export default function ConnectionStatus() {
  const [status, setStatus] = useState("checking"); // 'online', 'offline', 'checking'
  const url = "http://localhost:8080/api/auth/isAuthenticated";

  useEffect(() => {
    const checkServerConnection = async () => {
      try {
        const response = await axios.get(url, {
          withCredentials: true,
        }); // Or your API health check
        if (response.status == 200 || response.status == 202) {
          setStatus("online");
        } else {
          setStatus("offline");
          setCookie("isLoggedIn", "false");
        }
      } catch (error) {
        console.log(error);
        setStatus("offline");
        setCookie("isLoggedIn", "false");
      }
    };
    // Initial check
    checkServerConnection();
  }, []);

  return (
    <>
      {status === "checking" && "Checking connection..."}
      {status === "online" && "Connected to server"}
      {status === "offline" && "Disconnected from server"}
    </>
  );
}
