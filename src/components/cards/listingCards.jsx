import React, { useState } from "react";

export default function ListingCards({
  title,
  images,
  description,
  lot_size,
  price,
  province,
  city,
  landtype,
  listing_id,
  isAgent,
}) {
  const [image, setImage] = useState("https://placehold.co/380x120");
  if (images) {
    setImage(images);
  }
  const redirect = () => {
    window.location = `/listings/${listing_id}`;
  };
  const editListing = () => {
    window.location = `/profile/edit_listing/${listing_id}`;
  };

  return (
    <>
      <div class="bg-white rounded shadow hover:shadow-lg transition max-h-[300px]">
        <img
          src={image}
          alt="Land"
          class="rounded-t max-h-[120px] h-100 w-full object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold">
            {title ? title : "No Title Found"}
          </h3>
          <p class="text-gray-600">
            P{price ? price : "-"} • {landtype ? landtype : "None"} •
            {lot_size ? lot_size : "None"}M
          </p>
          <p class="text-sm text-gray-500 mt-1">
            {city ? city : "-"}, {province ? province : ""}
          </p>
          <p class="text-sm text-gray-500 mt-1">
            {description ? description : "-"}
          </p>
        </div>
        <button
          onClick={redirect}
          className="bg-green-400 text-white px-3 font-semibold py-1 float-end transition ease-in hover:ring-2 hover:ring-green-700"
        >
          View Listing
        </button>
        {isAgent ? (
          <>
            <button
              onClick={editListing}
              className="bg-green-400 text-white px-3 font-semibold py-1 float-end transition ease-in hover:ring-2 hover:ring-green-700"
            >
              Edit Listing
            </button>
            <button
              onClick={editListing}
              className="bg-green-400 text-white px-3 font-semibold py-1 float-end transition ease-in hover:ring-2 hover:ring-green-700"
            >
              Delete Listing
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
