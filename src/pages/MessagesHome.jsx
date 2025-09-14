import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import ChatProfile from "../components/messages/chat_profiles";
import ChatBubbles from "../components/messages/chat_bubbles";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MessagesHome() {
  const [chats, setChats] = useState([
    { is_sender: false, text: "Hi" },
    { is_sender: false, text: "Hi" },
    { is_sender: true, text: "Hi" },
    { is_sender: true, text: "Hi" },
    { is_sender: true, text: "Hi" },
  ]);
  const user_id = useParams().user_id;
  const [text, setText] = useState("");
  const [name, setName] = useState("User not found");

  const [users, setUsers] = useState([{}, {}]);

  const sendText = async (e) => {
    e.preventDefault;
    const url = "http://localhost:8080/api/messages/send";
    try {
      console.log(text);

      const response = await axios.post(
        url,
        {
          receiver_id: user_id,
          message: text,
          text: text,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response && response.data && response.status == 201) {
        response.data.is_sender = 1;
        setChats([...chats, response.data]);
        console.log(chats);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchChatLogs = async () => {
    const url = `http://localhost:8080/api/messages/${user_id}`;
    try {
      const response = await axios.get(url, {
        withCredentials: "true",
      });
      if (response && response.data && response.status == 200) {
        setChats(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUser = async () => {
    const url = `http://localhost:8080/api/users/${user_id}`;

    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      if (response && response.data && response.status == 200) {
        setName(response.data.full_name);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
    fetchChatLogs();

    // const interval = setInterval(() => {
    //   fetchChatLogs();
    // }, 1000);

    // // Cleanup when component unmounts
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div class="flex h-screen font-sans">
        <ChatProfile />
        <main class="flex-1 flex flex-col">
          <div class="flex items-center justify-between px-6 py-4 shadow-lg border-1 border-gray-100">
            <div>
              <h2 class="text-lg font-semibold">{name}</h2>
              <p class="text-sm text-green-400">Active Now</p>
            </div>
            <div class="flex gap-4 text-gray-400">
              <button title="Call">
                <i class="fas fa-phone"></i>
              </button>
              <button title="Video">
                <i class="fas fa-video"></i>
              </button>
              <button title="Settings">
                <i class="fas fa-cog"></i>
              </button>
            </div>
          </div>

          <div class="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-100">
            {chats.map((chat) => (
              <ChatBubbles message_type={chat.is_sender} message={chat.text} />
            ))}
          </div>

          <div className="m-1">
            <form
              action={sendText}
              class="flex items-center bg-gray-200 rounded-lg px-3 py-2 h-[50px]"
            >
              <input
                type="text"
                placeholder="Search chat or contact..."
                className="bg-transparent outline-none flex-1 text-md font-medium focus:outline-none"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button type="submit">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-500 mr-2"
                />
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
export default MessagesHome;
