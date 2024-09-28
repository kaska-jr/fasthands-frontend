import React, { useEffect } from "react";
import { ClientHeader } from "../../../components";
import Chat from "./components/Chat";
import ChatHeader from "./components/ChatHeader";
import { IoSendSharp } from "react-icons/io5";
import { LuPaperclip } from "react-icons/lu";
import { useParams } from "react-router-dom";

const Messaging = () => {
  const { id: ArtisanId } = useParams();

  const [message, setMessage] = React.useState("");

  //Get ClientId from local storage

  //Get All clients Chats rooms from API

  //Dynamic hook to fetch a chat room details when a chat is selected, i.e when ArtisanId changes

  useEffect(() => {
    if (ArtisanId) {
      console.log(ArtisanId);
      // Get opposite end
      setMessage("");
    }
  }, [ArtisanId]);

  return (
    <>
      <ClientHeader text="Chats" />
      <main className="flex px-10">
        <div className="w-60 flex flex-col h-[calc(100vh-91px)] border border-t-0 px-1">
          <div className="h-full overflow-y-auto">
            <input
              type="search"
              className="w-full border-b-2 border-sky-600 bg-slate-50 focus:outline-none p-2"
              placeholder="Search or start a new chat"
            />

            <div className="py-2 gap-1 flex flex-col ">
              {[1, 2, 3, 4, 5].map((id, index) => (
                <Chat id={id} key={index} ArtisanId={ArtisanId} />
              ))}
            </div>
          </div>
        </div>

        {/* outline */}
        <div className="flex-1 flex flex-col h-[calc(100vh-91px)] relative border-r">
          <div className="w-full h-[70px] bg-slate-50 absolute top-0 left-0">
            <ChatHeader ArtisanId={ArtisanId} />
          </div>

          <div className=" my-[70px] h-full overflow-y-auto px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            blanditiis, incidunt modi asperiores deserunt corrupti quo commodi
            ad velit natus. Dignissimos, saepe, commodi culpa maxime qui veniam
            nisi dolor minima odit quibusdam, modi magnam laborum autem alias
            porro aperiam quam ipsam! Ducimus accusamus cupiditate quasi
            adipisci repellendus natus sit cumque, dolores qui facere? Nobis
            repellat error illum delectus alias dolorem temporibus ex vero nihil
            modi inventore, consectetur nam ipsam doloremque fugiat labore
            obcaecati beatae natus ad. Nam provident accusamus laboriosam
            praesentium amet sequi suscipit reiciendis illo assumenda. Omnis
            rati
          </div>

          <div className="w-full h-[70px] bg-slate-50 absolute bottom-0 left-0 px-6">
            <div className="flex items-center h-full">
              <LuPaperclip className="text-sky-500 text-2xl" />
              <input
                name="message"
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-none outline-none focus:outline-none bg-slate-50 h-7 mx-3"
                placeholder="Type a message"
              ></input>
              <div className="shrink-0 h-12 w-12 rounded-full hover:bg-[#0ea5e9]/10 flex items-center justify-center">
                <IoSendSharp className="text-sky-500 text-2xl ml-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Messaging;
