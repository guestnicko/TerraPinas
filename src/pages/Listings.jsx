import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import axios from "axios";
import ListingCards from "../components/cards/listingCards";
import PropertyCard from "../components/cards/PropertyCard";

function Listings() {
  const [listings, setListing] = useState([
    { listing_id: 1 },
    { listing_id: 2 },
    { listing_id: 3 },
    { listing_id: 4 },
  ]);
  const url = "http://localhost:8080/api/listings/all";

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(url, {
          withCredentials: true,
        });

        if (response && response.data) {
          setListing(response.data);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);
  return (
    <>
      <NavBar />
      <header
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        class="relative w-full h-screen bg-cover bg-center flex items-center justify-center "
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(140,150,135,0.30), white 80%)",
            position: "absolute",
          }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-white"
        ></div>
        <div class="relative z-10 text-center px-4">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find the Property That Fits Your Lifestyle
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Browse thousands of verified homes, lands, and commercial spaces
            tailored to your needs.
          </p>

          <div class="bg-white p-2 rounded-md shadow-lg flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <div class="relative w-full lg:w-auto flex-grow">
              <input
                type="text"
                placeholder="What are you looking for?"
                class="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="relative w-full lg:w-auto">
              <select class="block appearance-none w-full bg-white text-gray-800 py-3 px-4 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div class="relative w-full lg:w-auto">
              <select class="block appearance-none w-full bg-white text-gray-800 py-3 px-4 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div class="relative w-full lg:w-auto">
              <select class="block appearance-none w-full bg-white text-gray-800 py-3 px-4 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Price Range</option>
                <option>$0 - $250,000</option>
                <option>$250,001 - $500,000</option>
                <option>$500,001+</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md w-full lg:w-auto">
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className=" my-2 text-gray-800">
        <div class="flex flex-col md:flex-row max-w-7xl mx-auto mt-6 px-4 md:px-8 gap-6">
          <aside class="md:w-1/4  border-1 border-gray-300 rounded shadow-xl p-4 max-h-[500px]">
            <h2 class="text-lg font-semibold mb-4">Filters</h2>

            <div class="mb-4">
              <label class="block text-sm font-medium">Location</label>
              <input
                type="text"
                placeholder="e.g., Cebu, Davao"
                class="mt-1 w-full p-2 border rounded"
              />
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium">Land Type</label>
              <select class="mt-1 w-full p-2 border rounded">
                <option value="">Any</option>
                <option>Residential</option>
                <option>Agricultural</option>
                <option>Commercial</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium">Price Range</label>
              <select class="mt-1 w-full p-2 border rounded">
                <option value="">Any</option>
                <option>₱100k - ₱500k</option>
                <option>₱500k - ₱1M</option>
                <option>₱1M - ₱5M</option>
                <option>₱5M+</option>
              </select>
            </div>

            <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Apply Filters
            </button>
          </aside>

          <main class="flex-1">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[520px]">
              {listings.map((listing) => (
                <PropertyCard listing_id={listing.listing_id} />
              ))}
            </div>

            <div class="flex justify-center mt-10 space-x-2">
              <button class="px-4 py-2 bg-white border rounded hover:bg-green-600 hover:text-white transition ease-in">
                Prev
              </button>
              <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600 hover:text-white transition ease-in">
                1
              </button>
              <button class="px-4 py-2 bg-white border rounded hover:bg-green-600 hover:text-white transition ease-in">
                2
              </button>
              <button class="px-4 py-2 bg-white border rounded hover:bg-green-600 hover:text-white transition ease-in">
                3
              </button>
              <button class="px-4 py-2 bg-white border rounded hover:bg-green-600 hover:text-white transition ease-in">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Listings;
