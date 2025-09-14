import React from "react";

function ListingCard(props) {
  return (
    <>
      <div class="bg-white rounded shadow hover:shadow-lg transition">
        <img src={props.img} alt="Land" class="rounded-t max-h-[300px]" />
        <div class="p-4">
          <h3 class="text-xl font-semibold">
            {props.area} in {props.city}
          </h3>
          <p class="text-gray-600 mb-2">
            ₱2.5M • Agricultural {props.price} {props.category}
          </p>
          <p class="text-sm text-gray-500">{props.body}</p>
        </div>
      </div>
    </>
  );
}

export default ListingCard;
