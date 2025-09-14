import React from "react";
import NavBar from "../components/navbar";
import { FaBell } from "react-icons/fa";

function NotificationHome() {
  const notifications = {
    today: [
      {
        id: 1,
        user: "John Smith",
        avatar: "https://placehold.co/40",
        action: "Liked your property listing",
        property: "3BR Condo in Makati",
        time: "2h ago",
      },
      {
        id: 2,
        user: "Anna Lopez",
        avatar: "https://placehold.co/40",
        action: "Sent you an offer",
        property: "Modern Townhouse",
        time: "5h ago",
      },
    ],
    thisWeek: [
      {
        id: 3,
        user: "Michael Chen",
        avatar: "https://placehold.co/40",
        action: "Commented on your listing",
        property: "Luxury Villa in Tagaytay",
        time: "2d ago",
      },
      {
        id: 4,
        user: "Sarah Lee",
        avatar: "https://placehold.co/40",
        action: "Started following you",
        property: "",
        time: "3d ago",
      },
    ],
  };
  return (
    <>
      <NavBar />
      <main className="bg-gray-100 text-gray-800 min-h-screen py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-100">
            <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaBell className="text-blue-600" /> Notifications
            </h1>
            <span className="text-sm text-gray-500">
              You have 5 new notifications
            </span>
          </div>

          {/* Content */}
          <div className="divide-y">
            {/* Today */}
            <div className="px-6 py-4">
              <p className="text-sm font-semibold text-gray-600 mb-3">Today</p>
              {notifications.today.map((n) => (
                <div key={n.id} className="flex items-start gap-3 py-3">
                  <img
                    src={n.avatar}
                    alt={n.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 text-sm">
                    <p>
                      <span className="font-medium text-gray-900">
                        {n.user}
                      </span>{" "}
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
            <div className="px-6 py-4">
              <p className="text-sm font-semibold text-gray-600 mb-3">
                This Week
              </p>
              {notifications.thisWeek.map((n) => (
                <div key={n.id} className="flex items-start gap-3 py-3">
                  <img
                    src={n.avatar}
                    alt={n.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 text-sm">
                    <p>
                      <span className="font-medium text-gray-900">
                        {n.user}
                      </span>{" "}
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
          <footer className="px-6 py-4 border-t bg-gray-50 text-center">
            <button className="text-blue-600 text-sm font-medium hover:underline">
              View Older Notifications
            </button>
          </footer>
        </div>
      </main>
    </>
  );
}
export default NotificationHome;
