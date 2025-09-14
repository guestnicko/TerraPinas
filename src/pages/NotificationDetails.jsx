import React from "react";

function NotificationDetails() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <section class="bg-green-600 text-white py-12 text-center">
          <h1 class="text-3xl font-bold">Notification Details</h1>
          <p class="mt-2 text-lg">
            Here's more information about your recent alert
          </p>
        </section>

        <main class="max-w-3xl mx-auto px-6 py-10 bg-white rounded shadow mt-8">
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-1">
              New Message from Maria Lopez
            </h2>
            <p class="text-sm text-gray-500">
              Received on July 11, 2025 at 3:45 PM
            </p>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You received a new message regarding your listing:
              <span class="font-semibold text-green-700">
                “Residential Lot in Tagaytay Highlands”
              </span>
              .
            </p>
            <p>
              <strong>Maria Lopez wrote:</strong>
              <br />
              “Hi, I’m very interested in your land listing. Is it still
              available? I would love to schedule a site visit this weekend.”
            </p>
            <p>
              Please reply through the Messages page to continue the
              conversation.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="messages.html"
              class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Go to Messages
            </a>
            <a
              href="notifications.html"
              class="text-green-600 border border-green-600 px-6 py-2 rounded hover:bg-green-50 transition"
            >
              Back to Notifications
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
export default NotificationDetails;
