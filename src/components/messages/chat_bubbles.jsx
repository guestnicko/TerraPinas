import { useState } from "react";

export default function ChatBubbles({ message_type, message }) {
  const [image, setImage] = useState(
    "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  if (message_type) {
    return (
      <>
        <div className="flex justify-end px-2">
          <div className="bg-blue-500 text-white rounded-l-2xl rounded-b-2xl px-4 py-2 max-w-xs shadow-md">
            <p className="font-semibold text-sm">Aris Christofi</p>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-start px-2 gap-2 ">
          <img src={image} class="rounded-full w-8 h-8 " />

          <div className="bg-purple-500 text-white rounded-r-2xl rounded-b-2xl px-4 py-2 max-w-xs shadow-md">
            <p className="font-semibold text-sm">Aris Christofi</p>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </>
    );
  }
}
