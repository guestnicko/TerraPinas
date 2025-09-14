import { FaBell } from "react-icons/fa";

export default function NotificationsPopover() {
  const notifications = {
    today: [
      {
        id: 1,
        user: "John Smith",
        avatar: "https://via.placeholder.com/40",
        action: "Liked your property listing",
        property: "3BR Condo in Makati",
        time: "2h ago",
      },
      {
        id: 2,
        user: "Anna Lopez",
        avatar: "https://via.placeholder.com/40",
        action: "Sent you an offer",
        property: "Modern Townhouse",
        time: "5h ago",
      },
    ],
    thisWeek: [
      {
        id: 3,
        user: "Michael Chen",
        avatar: "https://via.placeholder.com/40",
        action: "Commented on your listing",
        property: "Luxury Villa in Tagaytay",
        time: "2d ago",
      },
      {
        id: 4,
        user: "Sarah Lee",
        avatar: "https://via.placeholder.com/40",
        action: "Started following you",
        property: "",
        time: "3d ago",
      },
    ],
  };

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
        <FaBell className="text-gray-500" />
      </div>

      {/* Content */}
      <div className="max-h-96 overflow-y-auto">
        {/* Today */}
        <div className="px-4 py-2">
          <p className="text-sm font-semibold text-gray-600 mb-2">Today</p>
          {notifications.today.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-3 py-2 border-b last:border-none"
            >
              <img
                src={n.avatar}
                alt={n.user}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p>
                  <span className="font-medium text-gray-900">{n.user}</span>{" "}
                  {n.action}
                </p>
                {n.property && (
                  <p className="text-gray-600 text-xs">{n.property}</p>
                )}
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* This Week */}
        <div className="px-4 py-2">
          <p className="text-sm font-semibold text-gray-600 mb-2">This Week</p>
          {notifications.thisWeek.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-3 py-2 border-b last:border-none"
            >
              <img
                src={n.avatar}
                alt={n.user}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p>
                  <span className="font-medium text-gray-900">{n.user}</span>{" "}
                  {n.action}
                </p>
                {n.property && (
                  <p className="text-gray-600 text-xs">{n.property}</p>
                )}
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t text-center">
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All Notifications
        </button>
      </div>
    </div>
  );
}
