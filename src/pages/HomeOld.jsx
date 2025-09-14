import React from "react";
import NavBar from "../components/navbar";
import MayonVolcano from "../assets/mayon_volcano.jpg";
import ThousandIslands from "../assets/thousand_islands.jpg";
import BukidnonFarm from "../assets/bukidnon_farm.jpg";
import ListingCard from "../components/cards/listing_card";
import MessageBubble from "../components/message_icon";
function Home() {
  return (
    <>
      <NavBar />
      <MessageBubble />
      <div className="bg-gray-50 text-gray-800">
        <section
          style={{
            backgroundImage: `url(${ThousandIslands})`,
          }}
          className="bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        >
          <div className="bg-black bg-opacity-50 p-8 rounded">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Land
            </h2>
            <p className="mb-6 text-lg">
              Buy and sell lands across the Philippines with ease
            </p>
            <a
              href="listings"
              className="bg-green-600 px-6 py-3 text-white rounded hover:bg-green-700"
            >
              Browse Listings
            </a>
          </div>
        </section>

        <section className="bg-white shadow-xl p-6 -mt-12 rounded-lg relative z-10 max-w-5xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="border p-2 rounded w-full"
            />
            <select class="border p-2 rounded w-full">
              <option>Price Range</option>
              <option>₱100k - ₱500k</option>
              <option>₱500k - ₱1M</option>
              <option>₱1M - ₱5M</option>
            </select>
            <select class="border p-2 rounded w-full">
              <option>Land Type</option>
              <option>Residential</option>
              <option>Agricultural</option>
              <option>Commercial</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Search
            </button>
          </form>
        </section>

        <section id="listings" class="py-16 max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-10 text-center">
            Featured Listings
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <ListingCard />
            <div class="bg-white rounded shadow hover:shadow-lg transition">
              <img
                src={BukidnonFarm}
                alt="Land"
                class="rounded-t max-h-[300px] max-w-[300px]"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold">Residential Lot in Cavite</h3>
                <p class="text-gray-600 mb-2">₱850k • Residential</p>
                <p class="text-sm text-gray-500">
                  Safe neighborhood, near city center
                </p>
              </div>
            </div>

            <div class="bg-white rounded shadow hover:shadow-lg transition">
              <img
                src="https://source.unsplash.com/400x250/?real-estate,land"
                alt="Land"
                class="rounded-t"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold">Commercial Land in Davao</h3>
                <p class="text-gray-600 mb-2">₱5M • Commercial</p>
                <p class="text-sm text-gray-500">
                  Prime location for business development
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-green-600 text-white py-16">
          <div class="max-w-5xl mx-auto text-center px-4">
            <h2 class="text-3xl font-bold mb-4">
              Advertise or Sell Your Property Today
            </h2>
            <p class="mb-6">
              Join thousands of users buying and selling lands all over the
              Philippines
            </p>
            <a
              href="#"
              class="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Post a Listing
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
