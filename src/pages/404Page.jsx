import React from "react";

function Page404() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen text-gray-800">
        <div class="text-center p-8">
          <h1 class="text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 class="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p class="text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            class="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
export default Page404;
