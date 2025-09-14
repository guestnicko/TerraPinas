import ChatProfile from "../components/messages/chat_profiles";
import NavBar from "../components/navbar";

export default function ChatLayout() {
  return (
    <>
      <NavBar />
      <div class="flex h-screen  font-sans">
        <ChatProfile />
        <main class="flex-1 flex flex-col">
          <div class="flex items-center justify-between px-6 py-4 "></div>
        </main>
      </div>
    </>
  );
}
