import React from "react";
import { FaFontAwesome } from "react-icons/fa";

function MessageBubble() {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>

      <button
        class="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
        aria-label="Chat"
      >
        <FaFontAwesome />
      </button>
    </>
  );
}

export default MessageBubble;
