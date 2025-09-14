import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCheckDouble,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatProfile() {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Half-Life 3",
      message: "Gabe writes a message...",
      time: "14:56",
      unread: false,
      group: true,
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Half-Life_lambda_logo.svg",
      starred: true,
    },
    {
      id: 2,
      name: "Gabe Newell",
      message: "Do not write me anymore!!! 🏀",
      time: "14:49",
      unread: true,
      group: false,
      icon: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 3,
      name: "Mike Harrington",
      message: "He was angry with me. Can you...",
      time: "14:51",
      unread: false,
      group: false,
      icon: "https://i.pravatar.cc/40?img=6",
      status: "double-check",
    },
    {
      id: 4,
      name: "Dribbble",
      message: "How do you like my idea?",
      time: "13:29",
      group: true,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png",
    },
    {
      id: 5,
      name: "Behance",
      message: "How much are you willing to g...",
      time: "12:09",
      group: false,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111421.png",
    },
    {
      id: 6,
      name: "Dyson",
      message: "Maks? Who the f**k are you?!",
      time: "12:01",
      group: true,
      icon: "https://i.pravatar.cc/40?img=7",
    },
  ]);
  const fetchUsers = async () => {
    const url = `http://localhost:8080/api/messages/chatProfiles`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      console.log(response);
      if (response && response.status == 200) {
        setChats(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectUser = (user_id) => {
    window.location = `/messages/${user_id}`;
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <aside class="w-80  flex flex-col">
        <div className=" h-screen bg-white shadow-lg  overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
            <h1 className="font-bold text-xl">Messages</h1>
            <div>
              <button>
                <FontAwesomeIcon icon={faGear} className="text-xl mr-2" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-3 py-2">
            <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search chat or contact..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                onClick={(e) => redirectUser(chat.id)}
                key={chat.id}
                className="flex items-center px-3 py-3 hover:bg-gray-100 cursor-pointer hover:shadow-md transition ease-in"
              >
                <img
                  src={chat.icon}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="truncate w-40">{chat.message}</span>
                    {chat.starred && (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="ml-2 text-yellow-400"
                      />
                    )}
                    {chat.status === "double-check" && (
                      <FontAwesomeIcon
                        icon={faCheckDouble}
                        className="ml-2 text-green-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
