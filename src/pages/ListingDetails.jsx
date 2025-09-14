import NavBar from "../components/navbar";

export default function ListingDetails() {
  // https://ph.pinterest.com/pin/65513369575485289
  const images = "https://placehold.co/180x100";

  return (
    <>
      <NavBar />
      <main>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-1">
                Taylor Plan, Beau Coast Beau Shoals Cottage Collection
              </h1>
              <p class="text-gray-600 flex items-center">
                <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                Beaufort, NC 28516
              </p>
            </div>
            <div class="mt-4 md:mt-0">
              <span class="text-3xl font-bold text-blue-700">$301,990</span>
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
                  src={images}
                  alt="Property Main View"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-gray-800 bg-opacity-75 p-2 rounded-full text-white">
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
                <img
                  src={images}
                  alt="Thumbnail 1"
                  class="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-blue-500"
                />
                <img
                  src={images}
                  alt="Thumbnail 2"
                  class="w-full h-20 object-cover rounded-md cursor-pointer  border-2 border-blue-500"
                />
                <img
                  src={images}
                  alt="Thumbnail 3"
                  class="w-full h-20 object-cover rounded-md cursor-pointer  border-2 border-blue-500"
                />
                <img
                  src={images}
                  alt="Thumbnail 4"
                  class="w-full h-20 object-cover rounded-md cursor-pointer  border-2 border-blue-500"
                />
                <img
                  src={images}
                  alt="Thumbnail 5"
                  class="w-full h-20 object-cover rounded-md cursor-pointer  border-2 border-blue-500"
                />
                <img
                  src={images}
                  alt="Thumbnail 6"
                  class="w-full h-20 object-cover rounded-md cursor-pointer  border-2 border-blue-500"
                />
              </div>
            </div>

            <div class="lg:col-span-1 bg-gray-800 text-white rounded-lg p-6 shadow-lg">
              <div class="flex items-center mb-4">
                <img
                  src="https://generated.vceps.com/c/52674e1d-38ce-4148-af5e-3c22b406e6e2.png"
                  alt="Camille Richardson"
                  class="w-16 h-16 rounded-full mr-4 border-2 border-gray-600"
                />
                <div>
                  <p class="font-semibold text-lg">Camille Richardson</p>
                  <p class="text-sm text-gray-400">LLOYD PROPERTIES</p>
                </div>
              </div>

              <div class="flex items-center justify-between bg-gray-700 rounded-md p-3 mb-4">
                <div class="flex items-center">
                  <i class="fas fa-phone-alt text-gray-300 mr-3"></i>
                  <span class="text-lg">+48 533 607 112</span>
                </div>
                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  COPY
                </button>
              </div>

              <div class="mb-4">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-400 mb-2"
                >
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Write here..."
                  class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="mb-4">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-400 mb-2"
                >
                  YOUR PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Write here..."
                  class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="mb-6">
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-400 mb-2"
                >
                  DESCRIPTION
                </label>
                <textarea
                  id="description"
                  rows="3"
                  placeholder="Write here..."
                  class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
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

              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300">
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
                <span class="text-blue-600 font-bold text-lg">$237.800</span>
                <span class="text-gray-400 text-sm">$1.023/mo</span>
              </div>

              <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Area:</span>
                <span class="text-blue-600 font-bold text-lg">53,10mo</span>
              </div>

              <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Rooms:</span>
                <span class="text-blue-600 font-bold text-lg">2</span>
              </div>

              <div class="flex flex-col">
                <span class="text-gray-500 font-medium">Floor:</span>
                <span class="text-blue-600 font-bold text-lg">1</span>
                <span class="text-gray-400 text-sm">
                  (5 floors in building)
                </span>
              </div>
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
                  <span class="text-gray-800 font-semibold">Single Family</span>
                </div>

                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium">Heating:</span>
                  <span class="text-gray-800 font-semibold">Heat Pump</span>
                </div>

                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium">Cooling:</span>
                  <span class="text-gray-800 font-semibold">Refrigeration</span>
                </div>

                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium">Year Built:</span>
                  <span class="text-gray-800 font-semibold">27 Sep 1996</span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-12">
                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium mb-2">
                    Appliances:
                  </span>
                  <ul class="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Appliances included:</li>
                    <li>Dishwasher, Microwave, Refrigerator</li>
                  </ul>
                </div>

                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium mb-2">
                    Spaces and amenities:
                  </span>
                  <ul class="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Barbecue Area</li>
                    <li>Hot Tub / SPA</li>
                  </ul>
                </div>

                <div class="flex flex-col">
                  <span class="text-gray-500 font-medium mb-2">
                    Other Interior Features:
                  </span>
                  <ul class="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Fireplace and Ceiling Fan</li>
                  </ul>
                </div>

                <div class="flex flex-col mt-6 md:mt-0">
                  <span class="text-gray-500 font-medium mb-2">Utilities:</span>
                  <ul class="list-disc pl-5 space-y-1 text-gray-700">
                    <li>
                      <span class="text-green-600">Green Energy:</span> Great
                      solar potential - Sun Number 89
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row py-4">
            <h2 class="text-xl font-semibold text-gray-700 w-full md:w-1/6 mb-4 md:mb-0">
              Description:
            </h2>
            <div class="flex-1 bg-gray-300 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu convallis urna. Curabitur ac nunc porttitor, auctor sapien
                et, iaculis risus. Proin eget consequat purus. Ut consequat
                semper sem, at varius tellus pretium ut. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Sed at lacinia turpis, ac lacinia est. Pellentesque in
                elementum orci, eu commodo mi. Morbi rhoncus ligula iaculis dui
                fringilla, ut fermentum mauris tempus. Suspendisse eget erat
                auctor, placerat velit id, finibus risus. Nunc suscipit
                elementum nibh, quis lobortis turpis. Phasellus vitae nibh
                massa. Suspendisse potenti. Nulla ornare odio eget augue
                finibus, sit amet sodales metus venenatis. Aliquam finibus
                luctus lectus, sit amet viverra ante hendrerit non. In sed odio
                nibh. Suspendisse et tincidunt lectus, ac rutrum dui. Etiam eu
                molestie leo. Aliquam in pellentesque dui, ut scelerisque
                sapien. Mauris mollis nunc a orci cursus, a pellentesque risus
                maximus. Praesent sed sem dui. Donec sit amet tellus ligula.
                Vestibulum dapibus facilisis magna at aliquam. Praesent feugiat
                diam id ante ultricies interdum. Curabitur quis ante at sem
                molestie aliquam eget sit amet tellus. Phasellus eget arcu sed
                diam vehicula consectetur eget egestas odio. Vestibulum
                vestibulum fermentum laoreet. Nulla facilisi. Suspendisse tempus
                euismod diam, sed suscipit dui finibus vitae. Curabitur ac metus
                arcu. Mauris quis urna pharetra, mollis libero vitae, tincidunt
                elit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
