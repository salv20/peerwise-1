// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

// const ChatInterface = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "Oche China",
//       initials: "OC",
//       content:
//         "Lorem ipsum dolor sit amet consectetur. Etiam at mollis aenean consequat est.",
//       timestamp: "9:21",
//       sentByUser: false,
//     },
//     {
//       id: 2,
//       sender: "Anang Ayodale",
//       initials: "AA",
//       content: "Tortor proin nunc fames semper tristique dui platea.",
//       timestamp: "9:21",
//       sentByUser: false,
//     },
//     {
//       id: 3,
//       sender: "Mike Dan",
//       initials: "MD",
//       content: "Morbi fermentum ultricies adipiscing facilisis suspendisse.",
//       timestamp: "9:21",
//       sentByUser: false,
//     },
//   ]);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           id: prevMessages.length + 1,
//           sender: "You",
//           initials: "Y",
//           content: message,
//           timestamp: "Now",
//           sentByUser: true,
//         },
//       ]);
//       setMessage("");
//     }
//   };

//   return (
//     <div className=" mx-auto min-w-[632px] p-4 rounded-lg shadow">
//       {/* Search bar */}
// <div className="flex items-center w-full mb-4">
//   <div className="flex items-center">
//     <input
//       type="text"
//       placeholder="Search keyword"
//       className="flex-1 py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
//     />
//     <button className=" text-[#2C96A2]">
//       <FaSearch />
//     </button>
//   </div>
//   <img src="/bluecommunity.png" alt="" />
// </div>

//       {/* Chat area */}
//       <div className="h-96 overflow-y-auto bg-white rounded-lg p-4 shadow-inner mb-4">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`flex items-start mb-4 ${
//               msg.sentByUser ? "justify-end" : "justify-start"
//             }`}
//           >
//             {!msg.sentByUser && (
//               <div className="w-8 h-8 rounded-full bg-[#2C96A2] text-white flex items-center justify-center font-bold mr-2">
//                 {msg.initials}
//               </div>
//             )}
//             <div className="max-w-xs">
//               <div
//                 className={`p-3 rounded-lg shadow-md ${
//                   msg.sentByUser
//                     ? "bg-teal-100 text-teal-900"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 <p className="text-sm">{msg.content}</p>
//               </div>
//               <div
//                 className={`text-xs mt-1 ${
//                   msg.sentByUser ? "text-right text-gray-500" : "text-gray-500"
//                 }`}
//               >
//                 {msg.timestamp}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Message input */}
//      <div className="flex items-center">
//         <input
//           type="text"
//           placeholder="Type message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="flex-1 py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="ml-2 bg-[#2C96A2] text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 19l-7-7m0 0l7-7m-7 7h14"
//             />
//           </svg>
//         </button>
//     </div>
//     </div>
//   );
// };

// export default ChatInterface;

const ChartInterface = () => {
  return (
    <section>
      <div className="min-w-[632px] bg-red-500 p-2">
        <div className="w-full flex items-center">
          <input
            type="search"
            name=""
            id=""
            placeholder="messages"
            className="h-11 w-full outline-none bg-transparent indent-[20px] placeholder:font-bold placeholder:capitalize placeholder:text-btnGreen placeholder:text-lg"
          />

          <button aria-label="search-icon">
            <FaSearch className=" text-[36px] w-10 p-2 bg-white rounded-full text-btnGreen" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChartInterface;
