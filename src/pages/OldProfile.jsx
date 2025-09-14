import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Logout from "../components/logout";
import { getCookie } from "../config/cookiesMethod";
import axios from "axios";
import ListingCards from "../components/cards/listingCards";
import PropertyCard from "../components/cards/PropertyCard";

function Profile() {
  const [profile, setProfile] = useState({
    full_name: "John Doe",
    email: "none@example.com",
    phone_number: "0912345678+",
    user_role: "user",
    created_at: "",
    user_id: "",
  });
  const [listings, setListing] = useState([1]);

  const fetchListings = async () => {
    const url = `http://localhost:8080/api/listings/agent`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      if (response != null && response.status == 200 && response.data != null) {
        console.log(response.data);
        if (response && response.data) {
          setListing(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProfile = async () => {
    const url = `http://localhost:8080/api/users/fetchUser`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      if (response != null && response.status == 200 && response.data != null) {
        setProfile(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkStatus = () => {
      const isLoggedIn = getCookie("isLoggedIn");
      if (isLoggedIn == false || isLoggedIn == "false") {
        return false;
      }
      return true;
    };

    if (!checkStatus()) {
      // window.location = "/login";
    }

    fetchProfile();
    fetchListings();
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 text-gray-800">
        <section class="bg-white shadow py-8 px-6">
          <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="Profile"
              class="w-24 h-24 rounded-full border-4 border-green-500"
            />
            <div>
              <h1 class="text-2xl font-bold">{profile.full_name}</h1>
              <p class="text-gray-600">Member since January 2024</p>
              <p class="text-sm text-green-600 font-medium mt-1">
                Verified {profile.user_role}
              </p>
            </div>
            <div class="ml-auto mt-4 md:mt-0 flex flex-col gap-3">
              <a
                href="#"
                class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Edit Profile
              </a>
              <Logout />
            </div>
          </div>
        </section>

        <section class="max-w-4xl mx-auto mt-6 px-6">
          <div class="bg-white rounded shadow p-6">
            <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium">{profile.email}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="font-medium">{profile.phone_number}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Location</p>
                <p class="font-medium">Davao City, Philippines</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Role</p>
                <p class="font-medium">{profile.user_role}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="max-w-6xl mx-auto mt-10 px-6 min-h-[550px]">
          <h2 class="text-2xl font-bold mb-6">My Listings</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {listings.map(() => (
              <PropertyCard />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export default Profile;
