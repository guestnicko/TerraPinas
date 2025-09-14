import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function PropertyCard({ listing_id }) {
  const redirect = () => {
    window.location = `/listings/${listing_id}`;
  };
  const images = "https://placehold.co/180x100";
  return (
    <div
      onClick={redirect}
      className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
    >
      {/* Image */}
      <img src={images} alt="Condo" className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Modern 2-Bedroom Condo in Makati
        </h3>

        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Quezon City, Metro Manila</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium">
            Residential House
          </span>
        </div>

        <p className="text-xl font-bold text-gray-900 mt-2">₱12,500,000</p>

        <p className="text-sm text-gray-600 mt-2">
          A spacious two-story home featuring 3 bedrooms, 2 bathrooms, a modern
          kitchen, and a private garage. Located in a secure subdivision near
          schools and shopping centers.
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <span className="ml-2 text-gray-700 text-sm font-medium">(4.5)</span>
        </div>
      </div>
    </div>
  );
}
