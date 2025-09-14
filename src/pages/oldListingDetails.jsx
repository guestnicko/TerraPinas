import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/navbar";
import ThousandIslands from "../assets/thousand_islands.jpg";
import axios from "axios";

function ListingDetails() {
  const listing_id = useParams().listing_id;
  const url = `http://localhost:8080/api/listings/${listing_id}`;

  const [user, setUser] = useState({});
  const [listing, setListing] = useState({
    listing_id: useParams(),
    listing_title: "No title found",
    price: 0,
  });
  const fetchUser = async (userId) => {
    const url = `http://localhost:8080/api/users/${userId}`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      console.log(response);

      if (response && response.data && response.status == 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchListing = async () => {
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      if (response != null && response.status == 200 && response.data != null) {
        setListing(response.data);
        fetchUser(response.data.user_id);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const redirectUser = () => {
    const user_id = listing.user_id;
    window.location = `/messages/${user_id}`;
  };
  useEffect(() => {
    fetchListing();
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 text-gray-800 mb-5">
        <section
          class="w-full h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ThousandIslands})`,
          }}
        >
          <div class="w-full h-full flex items-end p-6">
            <h1 class="text-3xl md:text-4xl font-bold text-white">
              {listing.title}
            </h1>
          </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 py-10">
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-2 text-green-700">
                ₱{listing.price}
              </h2>
              <p class="text-gray-700 mb-4">
                Location:{" "}
                <span class="font-medium">
                  {listing.city}, {listing.province}
                </span>
              </p>

              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white rounded shadow p-4 text-center">
                  <p class="text-sm text-gray-500">Lot Size</p>
                  <p class="text-lg font-semibold">{listing.lot_size} sqm</p>
                </div>
                <div class="bg-white rounded shadow p-4 text-center">
                  <p class="text-sm text-gray-500">Land Type</p>
                  <p class="text-lg font-semibold">{listing.land_type}</p>
                </div>
              </div>

              <h3 class="text-xl font-semibold mb-2">Description</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                {listing.description}
              </p>
            </div>

            <aside class="w-full lg:w-1/3">
              <div class="bg-white rounded shadow p-6">
                <h3 class="text-lg font-bold mb-4">Listed By</h3>
                <div class="flex items-center gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                    class="rounded-full w-16 h-16"
                    alt="Seller"
                  />
                  <div>
                    <p class="font-semibold">{user.full_name}</p>
                    <p class="text-sm text-gray-500">Verified Seller</p>
                  </div>
                </div>

                <div class="text-sm text-gray-700 space-y-2 mb-6">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone_number ?? "None"}
                  </p>
                </div>

                <button
                  onClick={redirectUser}
                  class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Contact Seller
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
              Property Image Gallery
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="House 1"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="Land 2"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="Estate 3"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="Property 4"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="Farm 5"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
                  alt="Lot 6"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ListingDetails;
