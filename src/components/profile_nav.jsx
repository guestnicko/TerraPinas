import {
  faBell,
  faCircleUser,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NotificationsPopover from "./notifications";

export default function ProfileNav() {
  const [notifOpen, setNotification] = useState(false);

  return (
    <>
      <li>
        <button
          onClick={setNotification(!notifOpen)}
          class="block py-2 px-3 text-3xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <FontAwesomeIcon icon={faBell} />
          {notifOpen && <NotificationsPopover />}
        </button>
      </li>
      <li>
        <a
          href="/messages"
          class="block py-2 px-3 text-3xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <FontAwesomeIcon icon={faComment} />
        </a>
      </li>
      <li>
        <a
          href="/profile"
          class="block py-2 px-3 text-3xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <FontAwesomeIcon icon={faCircleUser} />{" "}
        </a>
      </li>
    </>
  );
}
