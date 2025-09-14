import axios from "axios";

export async function login(email, password) {
  const url = "http://localhost:8080/api/auth/login";

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: "include",
      }
    );
    if (response) {
      console.log("true");
    }
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
