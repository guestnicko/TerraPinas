import { useEffect, useState } from "react";
import PropertyCard from "../components/cards/PropertyCard";
import NavBar from "../components/navbar";
import axios from "axios";
import { getCookie } from "../config/cookiesMethod";

export default function Profile() {
  const [isUser, setIsUser] = useState(false);
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
      <div class="max-w-6xl mx-auto my-5">
        <h1 class="text-3xl font-bold ">Profile</h1>
        <p class=" mt-1">View all your profile details here.</p>

        <div class="mt-8 flex flex-col lg:flex-row gap-8 ">
          <div class="flex-shrink-0 w-full lg:w-1/3  rounded-2xl shadow-xl border-1 border-gray-300 p-8 flex flex-col items-center text-center bg-gray-100">
            <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 mb-6">
              <img
                src="https://generated.vceps.com/c/3c5a7707-1b4e-4e41-af9c-0c151c8e6e5a.png"
                alt="Maria Fernanda's avatar"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-3xl font-bold  mb-1">Maria Fernanda</h2>
            <span class="bg-yellow-400 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Premium User
            </span>
            <div class="mt-6 flex gap-4">
              <button class="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Send Message
              </button>

              {isUser && (
                <>
                  {" "}
                  <button class="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                    Update Profile
                  </button>
                </>
              )}
            </div>
          </div>

          <div class="flex-grow rounded-2xl shadow-xl p-8 bg-gray-100 border-1 border-gray-300">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-semibold ">Bio & other details</h3>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12">
              <div>
                <p class="text-sm text-gray-500">My Role</p>
                <p class=" font-medium">Beatmaker</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">My Experience Level</p>
                <p class=" font-medium">Intermediate</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">My 3 Favorite Artists</p>
                <p class=" font-medium">Ninho, Travis Scott, Metro Boomin</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">My Favorite Music Genre</p>
                <p class=" font-medium">Trap</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">
                  The Software or Equipment I Use
                </p>
                <p class=" font-medium">Ableton</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">My Preferred Music Mood</p>
                <p class=" font-medium">Melancholic</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">My City or Region</p>
                <p class=" font-medium">California, USA</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">Availability</p>
                <div class="flex items-center text-green-400 mt-1">
                  <span class="bg-green-500 rounded-full w-2.5 h-2.5 block mr-2"></span>
                  <span>Available for Collaboration</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12  mt-8 pt-6 border-t border-gray-700">
              <div>
                <p class="text-sm text-gray-500 mb-2">Badges</p>
                <div class="inline-flex items-center bg-gray-300  rounded-full px-3 py-1 text-sm font-medium">
                  <i class="fas fa-trophy text-yellow-400 mr-2"></i>
                  Top Collaborator
                </div>
              </div>

              <div>
                <p class="text-sm text-gray-500 mb-2">Tags</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-gray-300  rounded-full px-3 py-1 text-sm font-medium">
                    #Drill
                  </span>
                  <span class="bg-gray-300  rounded-full px-3 py-1 text-sm font-medium">
                    #Melancholic
                  </span>
                  <span class="bg-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                    #Rap-US
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4  max-w-6xl mx-auto my-4  rounded-2xl ">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-semibold basis-1/2">My Listings</h3>
          <div class="border-2">
            <div></div>
          </div>
        </div>{" "}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {listings.map(() => (
            <PropertyCard />
          ))}
        </div>
      </div>
    </>
  );
}
