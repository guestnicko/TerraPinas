import React from "react";

export default function ImageCard() {
  return (
    <>
      <div class="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHwy"
          alt="House 1"
          class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </>
  );
}
