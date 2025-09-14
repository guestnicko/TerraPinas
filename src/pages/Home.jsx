import MessageBubble from "../components/message_icon";
import NavBar from "../components/navbar";

function Home() {
  const title = "Discover Endless Real Estate Opportunities";
  const subtitle =
    "Find your dream home, investment property, or rental with our trusted marketplace.";
  const cards = null;
  const defaultCards = [
    {
      id: 1,
      title: "Comprehensive Property Support",
      subtitle:
        "Assistance from search to closing — buy, sell, or rent with confidence.",
      img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern house exterior",
    },
    {
      id: 2,
      title: "Expert Real Estate Guidance",
      subtitle:
        "Get insights from agents and market reports to make informed decisions.",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1d8f6a8b5d6a54a1a6c2b0b7eb2f9dcb",
      alt: "Real estate agent showing a model home",
    },
    {
      id: 3,
      title: "Diverse Property Listings",
      subtitle:
        "Browse apartments, suburban homes, and luxury estates across locations.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b8b2c4c1d4f5c5c6d7e8f9a0b1c2d3e",
      alt: "City skyline and residential buildings",
    },
  ];

  const propertyCards = [
    {
      id: 1,
      title: "Suburbs",
      subtitle:
        "Assistance from search to closing — buy, sell, or rent with confidence.",
      img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern house exterior",
      type: "residential",
    },
    {
      id: 2,
      title: "Apartments",
      subtitle:
        "Assistance from search to closing — buy, sell, or rent with confidence.",
      img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern house exterior",
      type: "commercial",
    },
    {
      id: 3,
      title: "Farmlands",
      subtitle:
        "Assistance from search to closing — buy, sell, or rent with confidence.",
      img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern house exterior",
      type: "agriculture",
    },
    {
      id: 4,
      title: "Office Buildings",

      img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Interior of Office Building",
      type: "commercial",
    },
  ];

  const items =
    cards && Array.isArray(cards) && cards.length >= 3 ? cards : defaultCards;
  return (
    <>
      <NavBar />
      <MessageBubble />
      <header
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      >
        {/* Overlay */}
        <div
          style={{
            backgroundColor: "#000000",
            background: "rgba(0,0,0,0.45)",
          }}
          className="absolute inset-0 "
        ></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Perfect Home
          </h1>
          <p className="mt-2 text-lg md:text-2xl">Anytime, Anywhere</p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location = "/listings")}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-200 transition"
            >
              Browse Listings
            </button>
            <button
              onClick={() => (window.location = "/register")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </div>
        </div>
      </header>

      <main class="container mx-auto px-4 py-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
              {title}
            </h1>
            <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            {/* Large left card */}
            <article
              className="relative rounded-2xl overflow-hidden shadow-lg md:col-span-2 md:row-span-2 h-72 sm:h-96"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <img
                src={items[0].img}
                alt={items[0].alt}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                aria-hidden
              ></div>

              <div className="absolute left-6 bottom-6 text-white pr-6">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {items[0].title}
                </h3>
                <p className="mt-1 text-sm sm:text-base max-w-md">
                  {items[0].subtitle}
                </p>
              </div>
            </article>

            {/* Top right card */}
            <article className="relative rounded-2xl overflow-hidden shadow-lg h-36 sm:h-44">
              <img
                src={items[1].img}
                alt={items[1].alt}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                aria-hidden
              ></div>
              <div className="absolute left-4 bottom-4 text-white pr-4">
                <h4 className="text-sm sm:text-base font-semibold">
                  {items[1].title}
                </h4>
                <p className="text-xs sm:text-sm mt-1">{items[1].subtitle}</p>
              </div>
            </article>

            {/* Bottom right card */}
            <article className="relative rounded-2xl overflow-hidden shadow-lg h-36 sm:h-44">
              <img
                src={items[2].img}
                alt={items[2].alt}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                aria-hidden
              ></div>
              <div className="absolute left-4 bottom-4 text-white pr-4">
                <h4 className="text-sm sm:text-base font-semibold">
                  {items[2].title}
                </h4>
                <p className="text-xs sm:text-sm mt-1">{items[2].subtitle}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Discover Homes You’ll Love
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Browse our curated selection of featured listings—handpicked
              properties offering the best locations, modern designs, and
              competitive prices.
            </p>
          </div>

          {/* Card Container */}
          <div className="flex gap-4 justify-center max-w-6xl mx-auto group">
            {propertyCards.map((card) => (
              <div
                key={card.id}
                className="relative flex-1 h-80 rounded-xl overflow-hidden transition-all duration-500 ease-in-out group-hover:flex-[0.8] hover:flex-[2]"
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent "
                  aria-hidden
                ></div>
                <div className="absolute left-6 bottom-6 text-white pr-6">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-12 mt-12">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ready to Find Your Next Property?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Join thousands of buyers, sellers, and investors already using{" "}
              <span className="font-semibold text-indigo-600">TerraPinas</span>{" "}
              to discover opportunities and close deals faster.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => (window.location.href = "/sell")}
                className="w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
              >
                List Your Property
              </button>
              <button
                onClick={() => (window.location.href = "/register")}
                className="w-full py-3 px-6 rounded-xl bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition"
              >
                Create Account
              </button>
              <button
                onClick={() => (window.location.href = "/listings")}
                className="w-full py-3 px-6 rounded-xl bg-indigo-50 text-indigo-700 font-semibold shadow hover:bg-indigo-100 transition"
              >
                Browse Listings
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
