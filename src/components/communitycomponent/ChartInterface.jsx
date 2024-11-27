import searchimg from "../../assets/community/search.png";
import replyimg from "../../assets/community/reply.png";
import paperclip from "../../assets/community/paperclip.png";
import cancelimg from "../../assets/community/cancel.png";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChartInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Oche China",
      avatar: "OC",
      text: "Lorem ipsum dolor sit amet consectetur. Etiam at mollis aenean consequat est. Tortor proin nunc fames semper tristique duisplatea. Morbi fermentum ultricies adipiscing facilisi suspendisse.",
      time: "09:21",
    },

    {
      id: 2,
      sender: "Anang Ayodele",
      avatar: "AA",
      text: "Lorem ipsum dolor sit amet consectetur. Etiam at mollis aenean consequat est. Tortor proin nunc fames semper tristique duisplatea. Morbi fermentum ultricies adipiscing facilisi suspendisse.",
      time: "20:21",
    },
  ]);
  const [reply, setReply] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const handleSend = () => {
    if (reply.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: reply,
        sender: "You",
        replyTo: replyTo,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setReply("");
      setReplyTo(null);
    }
  };

  const replyToMessage = (messageId) => {
    const message = messages.find((msg) => msg.id === messageId);
    setReplyTo(message);
  };

  return (
    <section>
      <div className="flex flex-col gap-[20px] lg:min-w-[632px] font-roboto">
        <div className="p-2 flex justify-between items-center">
          <div className="w-[80%] flex items-center border-[#CECECE] rounded-[4px] border-[1.25px] px-[12px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search keyword"
              className=" py-[11px] w-full outline-none placeholder:font-[400] placeholder:capitalize placeholder:text-btnGreen placeholder:text-[16px]"
            />

            <button aria-label="search-icon">
              <img src={searchimg} alt="" width={25} height={25} />
            </button>
          </div>
          <img src="/bluecommunity.png" alt="" />
        </div>
        <hr className="border-[#CECECE]" />

        <div className="flex flex-col gap-[12px]">
          {messages.map((msg) => (
            <div
              className={`flex items-end gap-[16px]  ${
                msg.sender === "You" ? "justify-end" : ""
              }`}
              key={msg.id}
            >
              {msg.sender !== "You" && (
                <p className="text-[19px] font-[700] py-[6px] px-[8px] font-[roboto] rounded-full bg-[#eaf8fa] flex items-center justify-center">
                  {msg.avatar}
                </p>
              )}

              <div
                className={`flex flex-col rounded-[8px] max-w-[90%] md:max-w-[80%]
                ${
                  msg.sender === "You"
                    ? "bg-[#F7FCFD]"
                    : " border-[1px] border-[#CECECE] "
                }
                `}
              >
                {msg.sender !== "You" && (
                  <div className="flex items-center justify-between py-[4px] px-[12px]">
                    <p className="text-[13px] p-[4px] rounded-[4px] w-fit font-[700] bg-[#EBF8FA]">
                      {msg.sender}
                    </p>
                    <button
                      onClick={() => (
                        console.log(msg.id), replyToMessage(msg.id)
                      )}
                    >
                      <img
                        src={replyimg}
                        height={19}
                        width={17.68}
                        alt="reply"
                      />
                    </button>
                  </div>
                )}

                <div
                  className={`${
                    msg.sender === "You" &&
                    "bg-[#F7FCFD] border-[#CECECE] rounded-[4px] border-[1.25px]"
                  } `}
                >
                  {msg.replyTo && (
                    <div className="p-[10px]">
                      <p className="text-[13px] p-[4px] rounded-[4px] w-fit font-[700] bg-[#EBF8FA]">
                        {msg.replyTo.sender}
                      </p>
                      <p className="text-[13px]">{`${msg.replyTo.text.slice(
                        0,
                        100
                      )}...`}</p>
                    </div>
                  )}

                  <div
                    className={`flex justify-between gap-[14px] p-[8px] ${
                      msg.sender === "You" && "bg-[#EBF8FA]"
                    }`}
                  >
                    <p
                      className="break-words"
                      onClick={() => replyToMessage(msg.id)}
                    >
                      {msg.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 self-end">
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="p-4 bg-white">
          {replyTo && (
            <div className="border-[#CECECE] rounded-[8px] text-[13px] py-[4px] px-[12px] border-[1px]">
              <div className="flex mb-1 justify-between items-center">
                <h1 className="">
                  Reply from:&nbsp;
                  <span className="text-[#333333] font-[700]">
                    {replyTo.sender}
                  </span>
                </h1>
                <button onClick={() => setReplyTo(null)}>
                  <img src={cancelimg} alt="" />
                </button>
              </div>
              <p>{`${replyTo.text.slice(0, 100)}...`}</p>
            </div>
          )}

          <div className="bg-[#37BBCA] py-[24px] px-[32px] rounded-[16px]">
            <div className="flex items-center bg-white pl-[12px] shadow-sm justify-between rounded-[4px] border-[1px] border-[#CECECE]">
              <div className="flex gap-[4px] items-center w-full">
                <img src={paperclip} alt="" />
                <input
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="focus:outline-none placeholder:text-[#848484] w-full bg-red- py-[11px] "
                  placeholder="Type a message..."
                />
              </div>
              <button
                onClick={handleSend}
                className="text-[#2C96A2] text-[24px] rounded-md pr-[12px]"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartInterface;
