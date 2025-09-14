import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import axios from "axios";

function SellListingsForm() {
  const url = "http://localhost:8080/api/listings/create";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [landType, setType] = useState("");
  const [description, setDescription] = useState("");
  const provinceCityMap = {
    "Ilocos Norte": ["Laoag", "Batac", "Pasuquin"],
    Cebu: ["Cebu City", "Lapu-Lapu", "Mandaue"],
    "Davao del Sur": ["Davao City", "Digos", "Sta. Cruz"],
    // Add more provinces and cities as needed
  };

  const types = ["Agriculture", "Commercial", "Residential"];

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity(""); // Reset city when province changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const provinces = Object.keys(provinceCityMap);
  const cities = selectedProvince ? provinceCityMap[selectedProvince] : [];

  let data = {
    title: title,
    price: price,
    province: selectedProvince,
    city: selectedCity,
    lot_size: size,
    land_type: landType,
    description: description,
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const response = await axios.post(url, data, {
      withCredentials: true,
    });

    if (response.status == 201) {
      window.location.href = "/profile";
    }
    console.log(response);
  };
  return (
    <>
      <NavBar />
      <form onSubmit={handleForm} className="bg-gray-50 text-gray-800 ">
        <section class="w-full h-72 bg-cover bg-center bg-gray-400">
          <div class="w-full h-full flex items-end p-6">
            <div class="relative z-0 w-full max-w-[700px] mb-5 group">
              <input
                type="text"
                name="listing_title"
                id="listing_title"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-xl text-white font-bold dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Estate Listing Title
              </label>
            </div>
          </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 py-10">
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-1">
              <div class="relative z-0 w-full max-w-[300px] mb-5 group">
                <input
                  type="number"
                  name="listing_price"
                  id="listing_price"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label
                  for="listing_price"
                  class="peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Listing Price
                </label>
              </div>
              <div class="text-gray-700 mb-4">
                <span className="font-semibold"> Location:</span>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <select
                      id="province"
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="">Select a province</option>
                      {provinces.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <select
                      id="city"
                      value={selectedCity}
                      onChange={handleCityChange}
                      disabled={!selectedProvince}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white rounded shadow p-4 text-center">
                  <label class="text-lg text-gray-500">
                    Lot Size By Meters
                  </label>
                  <input
                    type="number"
                    id="lot_size"
                    name="size"
                    class="shadow-xs bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    required
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
                <div class="bg-white rounded shadow p-4 text-center">
                  <label class="text-lg text-gray-500">Land Type</label>
                  <select
                    id="land_type"
                    name="land_type"
                    value={landType}
                    onChange={(e) => setType(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={""}>Select Land Type</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Description</h3>
              <textarea
                id="message"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
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
                    <p class="font-semibold">Juan Dela Cruz</p>
                    <p class="text-sm text-gray-500">Verified Seller</p>
                  </div>
                </div>

                <div class="text-sm text-gray-700 space-y-2 mb-6">
                  <p>
                    <strong>Email:</strong> juancruz@example.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +63 912 345 6789
                  </p>
                </div>

                <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
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

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 ">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </section>
        <button
          type="submit"
          className="w-full text-3xl font-bold bg-green-300 hover:bg-green-500 transition-all duration-75 ease-in p-2"
        >
          Submit Form
        </button>
      </form>
    </>
  );
}
export default SellListingsForm;
