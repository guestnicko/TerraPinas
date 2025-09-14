import axios from "axios";
import { getCookie } from "./cookiesMethod";

export function isAuthenticated() {
  // const url = "http://localhost:8080/api/auth/isAuthenticated";
  const isLoggedIn = getCookie("isLoggedIn");
  console.log(isLoggedIn);

  return isLoggedIn;
}
