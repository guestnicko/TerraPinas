import React from "react";
import NavBar from "../components/navbar";

function AboutUs() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-green-600">TerraPinas</span>
            </h1>
            <p className="text-lg text-gray-600">
              Connecting people with properties, making real estate transactions
              simple, transparent, and accessible to everyone.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              HomeConnect was built with a vision: to revolutionize how buyers,
              sellers, and renters connect in the real estate market. We saw the
              challenges—limited trust, scattered listings, and complicated
              processes—and decided to create a platform that solves them all in
              one place.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Today, thousands of users trust us to find homes, land, and
              commercial spaces while sellers enjoy direct offers and seamless
              management of their properties.
            </p>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-cover bg-center bg-green-100 h-64 rounded-xl flex items-center justify-center text-green-700 font-bold text-xl"
          >
            \{" "}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-green-700 text-lg font-bold uppercase mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and businesses by providing a secure,
                user-friendly platform where real estate opportunities can be
                discovered, listed, and closed with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-green-700 text-lg font-bold uppercase mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and widely used real estate
                marketplace, bridging gaps between people and properties,
                locally and globally.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg border-gray-200 border-1 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-green-700">
                Transparency
              </h4>
              <p className="text-gray-600">
                We ensure verified listings and honest communication between
                buyers and sellers.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg border-gray-200 border-1 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-green-700">
                Trust
              </h4>
              <p className="text-gray-600">
                A safe marketplace built on credibility and reliability for
                every user.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg border-gray-200 border-1 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-green-700">
                Innovation
              </h4>
              <p className="text-gray-600">
                Constantly improving our platform to make real estate
                transactions faster and easier.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="mb-6 text-lg">
            Join thousands of buyers and sellers who trust HomeConnect every
            day.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg border-gray-200 border-1  hover:bg-gray-100 transition ">
              Browse Properties
            </button>
            <button className="px-6 py-3 bg-emerald-300 rounded-lg shadow-lg hover:bg-green-400 transition border-1 border-emerald-100">
              List Your Property
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
