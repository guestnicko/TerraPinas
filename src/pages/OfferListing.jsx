import React, { useState } from "react";
import NavBar from "../components/navbar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

function OfferListingsForm() {
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
  const [images, setImages] = useState({
    featured_image: "https://placehold.co/180x100",
    images: ["https://placehold.co/180x100", "https://placehold.co/180x100"],
  });
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

  if (price < 0) {
    setPrice(0);
  }
  return (
    <>
      <NavBar />
      <form onSubmit={handleForm} className="bg-gray-50 text-gray-800 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="w-full max-w-[700px]">
              {/* Listing Title */}
              <div class="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  for="Listing Title"
                  class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Listing Title
                </label>
              </div>
              {/* Listing Address */}
              <div className="flex items-center mt-4 max-w-[600px]">
                <div class="flex w-full">
                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i class="fas fa-map-marker-alt text-gray-400 "></i>
                  </span>
                  <select
                    id="provinces"
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                    class="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected value="">
                      Select a province
                    </option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  <select
                    id="cities"
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedProvince}
                    class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Municaplity / City</option>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <select
                    disabled
                    id="countries"
                    class="bg-gray-50 border border-gray-300 rounded-r-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Barangay</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mt-4 md:mt-0 max-w-[400px]">
              {/* Listing Price */}
              <div class="relative">
                <input
                  type="number"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label
                  for="Listing Title"
                  class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Listing Price
                </label>
              </div>
            </div>
          </div>

          <div class="flex border-b border-gray-200 mb-8">
            <button class="py-3 px-6 text-blue-700 border-b-2 border-blue-700 font-medium">
              PHOTOS
            </button>
            <button class="py-3 px-6 text-gray-600 hover:text-gray-900 font-medium">
              MAP
            </button>
            <button class="py-3 px-6 text-gray-600 hover:text-gray-900 font-medium">
              STREET VIEW
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <div class="relative bg-gray-200 h-96 overflow-hidden rounded-lg mb-4">
                <img
                  src={images.featured_image}
                  alt="Property Main View"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-gray-800 bg-opacity-75 p-2 rounded-full text-white">
                  <i class="fas fa-star"></i>
                </div>
              </div>

              <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {images.images.map((images) => (
                  <>
                    <img
                      src={images}
                      alt="Thumbnail 1"
                      class="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-blue-500"
                    />
                  </>
                ))}
                {images.images.length < 6 && (
                  <>
                    <div class="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-gray-300 border-dashed bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-500">
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full  h-full"
                      >
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="text-4xl "
                          />
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#8C9687",
              }}
              class="lg:col-span-1 text-white rounded-lg p-6 shadow-lg"
            >
              <div class="flex items-center mb-4">
                <img
                  src="https://placehold.co/180x100"
                  alt="Camille Richardson"
                  class="w-16 h-16 rounded-full mr-4 border-2 border-gray-600 object-cover object-center"
                />
                <div>
                  <p class="font-semibold text-lg">Camille Richardson</p>
                  <p class="text-sm text-gray-200">LLOYD PROPERTIES</p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#808C7A",
                }}
                class="flex items-center justify-between rounded-md p-3 mb-4"
              >
                <div class="flex items-center">
                  <i class="fas fa-phone-alt text-gray-300 mr-3"></i>
                  <span class="text-lg">+48 533 607 112</span>
                </div>
                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  COPY
                </button>
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium  mb-2">
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  style={{
                    backgroundColor: "#808C7A",
                  }}
                  type="email"
                  id="email"
                  placeholder="Write here..."
                  disabled
                  class="w-full px-4 py-2 rounded-md focus:border text-white placeholder-white-500 focus:outline-none focus:border-gray-300"
                />
              </div>

              <div class="mb-4">
                <label for="phone" class="block text-sm font-medium  mb-2">
                  YOUR PHONE NUMBER
                </label>
                <input
                  style={{
                    backgroundColor: "#808C7A",
                  }}
                  type="tel"
                  id="phone"
                  placeholder="Write here..."
                  class="w-full px-4 py-2 rounded-md focus:border text-white placeholder-white-500 focus:outline-none focus:border-gray-300"
                  disabled
                />
              </div>

              <div class="mb-6">
                <label
                  for="description"
                  class="block text-sm font-medium  mb-2"
                >
                  DESCRIPTION
                </label>
                <textarea
                  style={{
                    backgroundColor: "#808C7A",
                  }}
                  id="description"
                  rows="3"
                  placeholder="Write here..."
                  class="w-full px-4 py-2 rounded-md focus:border text-white placeholder-white-500 focus:outline-none focus:border-gray-300 resize-none"
                  disabled
                ></textarea>
              </div>

              <div class="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="privacy"
                  class="h-4 w-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                />
                <label for="privacy" class="ml-2 block text-sm text-gray-300">
                  I hereby agree for processing my personal data...
                </label>
              </div>

              <button
                type="button"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-start md:items-center py-4 divider-md">
            <h2 class="text-xl font-semibold text-gray-700 w-full md:w-1/6 mb-4 md:mb-0">
              General:
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-x-12 w-full">
              <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Price:</span>
                <span class="text-blue-600 font-bold text-lg">${price}</span>
              </div>

              <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Area in meters:</span>
                <span class="text-blue-600 font-bold text-lg flex items-center gap-1">
                  <input
                    type="number"
                    id="small-input"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    class="block w-full p-2 text-blue-600 font-bold text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:ring-gray-100 outline-0"
                  />
                </span>
              </div>
              {/* For Now Focus on deploying MVP  */}
              {/* <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Available Rooms:</span>
                <input
                  type="number"
                  id="small-input"
                  class="block w-full p-2 text-blue-600 font-bold text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:ring-gray-100 outline-0"
                />{" "}
              </div> */}
            </div>
          </div>

          <div class="flex flex-col md:flex-row py-4">
            <h2 class="text-xl font-semibold text-gray-700 w-full md:w-1/6 mb-4 md:mb-0">
              Additional:
            </h2>
            <div class="flex-1">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-x-12 mb-6 divider pb-4">
                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium">Type:</span>
                  <span class="text-gray-800 font-semibold">
                    <select
                      value={types}
                      onChange={(e) => setType(e.target.value)}
                      id="countries"
                      class="px-3 bg-gray-50 border border-gray-300 rounded my-2
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected value="">
                        Choose Land Type
                      </option>
                      {types.map((type) => (
                        <option value={type}>{type}</option>
                      ))}
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row py-4">
            <h2 class="text-xl font-semibold text-gray-700 w-full md:w-1/6 mb-4 md:mb-0">
              Description:
            </h2>
            <div class="flex-1 bg-gray-300 p-2">
              <textarea
                id="message"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                class="block p-2.5 w-full text-sm text-gray-900 focus:outline-1 outline-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the description..."
              ></textarea>
            </div>
          </div>
          <div class="flex flex-col md:flex-row py-4 ">
            <button
              type="submit"
              className="bg-blue-400 px-3 py-2 rounded min-w-[300px] max-w-[500px] w-100 font-bold text-lg flex gap-2 items-center justify-center mx-auto"
            >
              Submit Form
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default OfferListingsForm;
