import React from "react";
import NavBar from "../components/navbar";

function SellPage() {
  const bgColor = "#A2AF9B";
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "#afdb97",
            background:
              "linear-gradient(180deg,rgba(175, 219, 151, 1) 21%, rgba(255, 255, 255, 0) 100%)",
          }}
          className="py-20 px-6 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <button className="px-4 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-4">
              List Your Property Today
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Turn Your Property Into Opportunities
            </h1>
            <p className="text-gray-600 mb-6">
              Whether you own a home, land, or commercial space, our platform
              makes it easy to showcase your property to thousands of buyers and
              tenants. Get offers quickly and manage them in one place.
            </p>

            <div className="flex justify-center gap-4">
              <button
                style={{ backgroundColor: "#4CAF50" }}
                className="px-6 py-3 rounded-lg shadow text-white hover:bg-green-700 transition"
              >
                Start Listing
              </button>
              <button className="px-6 py-3 bg-white border rounded-lg shadow hover:bg-gray-200 transition">
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm text-gray-500">Properties Listed</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-2xl font-bold">5K+</p>
              <p className="text-sm text-gray-500">Active Sellers</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm text-gray-500">Cities Covered</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm text-gray-500">Seller Satisfaction</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-green-700 text-sm font-semibold uppercase mb-2">
              How It Works
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              List. Connect. Close Deals.
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-800">
                  1. Create an Account –
                </span>
                Sign up as a seller and set up your profile.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  2. Add Your Property –
                </span>
                Upload photos, set a price, and add details.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  3. Receive Offers –
                </span>
                Buyers and renters can send you direct offers or inquiries.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  4. Manage Everything –
                </span>
                Track offers, negotiate, and close deals—all in one dashboard.
              </li>
            </ul>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-green-100 h-64 rounded-xl flex items-center justify-center text-green-700 font-bold text-xl bg-cover bg-center"
          ></div>
        </section>
      </div>
    </>
  );
}

export default SellPage;
