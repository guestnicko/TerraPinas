import axios from "axios";

export async function register(data) {
  const url = "http://localhost:8080/api/auth/registration";

  try {
    const response = await axios.post(
      url,
      {
        email: data.email,
        full_name: data.full_name,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
      {
        withCredentials: "true",
      }
    );

    if (response && response.status == 201) {
      window.location = "/login";
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
