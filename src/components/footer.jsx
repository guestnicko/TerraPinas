import React from "react";

function Footer() {
  return (
    <>
      <footer class="bg-gray-800 text-white py-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2025 LandNest. All rights reserved.</p>
          <div class="space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:underline">
              Privacy
            </a>
            <a href="#" class="hover:underline">
              Terms
            </a>
            <a href="#" class="hover:underline">
              Support
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
