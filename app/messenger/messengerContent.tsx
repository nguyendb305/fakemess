"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import * as htmlToImage from "html-to-image";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaPaperPlane, FaMicrophone, FaImage, FaSmile, FaGift, FaThumbsUp } from "react-icons/fa";
import { BsThreeDots, BsChevronDown, BsTelephone, BsCameraVideo, BsDash, BsX } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import Navbar from "@/components/sections/navbar";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type UIMode = "classic" | "modern";

const StickerIcon = () => (
  <svg 
    viewBox="0 0 12 13" 
    width="20" 
    height="20" 
    fill="currentColor" 
    className="text-gray-600"
  >
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <g>
        <path d="M106.617 923.049c-1.583.777-2.986 2.756-3.063 4.32a2.962 2.962 0 0 1-.554 1.6 6.977 6.977 0 0 0 3.76-2.66 6.62 6.62 0 0 0 1.224-4.31c-.335.414-.792.768-1.367 1.05" transform="translate(354 156)" />
        <path d="M101.685 926.713a.513.513 0 0 1-.454.287.495.495 0 0 1-.25-.07 3.42 3.42 0 0 1-1.44-1.657c-.112-.282.011-.609.275-.729.263-.12.567.012.68.294.179.45.529.848.987 1.12.25.149.34.487.202.755M99 922.5c0-.551.449-1 1-1 .551 0 1 .449 1 1a1.001 1.001 0 0 1-2 0m5.5-2c.551 0 1 .449 1 1a1.001 1.001 0 1 1-1-1m-1.908 6.813c.094-1.923 1.704-4.25 3.59-5.188 1.14-.568 1.605-1.391 1.423-2.512l-.015-.084c-.24-1.332-1.533-2.228-2.889-1.992l-6.137 1.062a2.479 2.479 0 0 0-1.622 1.025 2.413 2.413 0 0 0-.403 1.824l1.082 6.023c.214 1.19 1.269 2.029 2.455 2.029.08 0 .161-.013.242-.021 1.37-.267 2.221-1.07 2.274-2.166" transform="translate(354 156)" />
      </g>
    </g>
  </svg>
);

const ArrowDownIcon = () => (
  <svg 
    aria-hidden="true" 
    className="x1i64zmx text-gray-600" 
    height="10" 
    viewBox="0 0 18 10" 
    width="10"
  >
    <path 
      clipRule="evenodd" 
      d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 12 13" width="16" height="16" fill="currentColor" className="text-gray-600">
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
      <path d="M109.492 925.682a1.154 1.154 0 0 0-.443-.81 10.642 10.642 0 0 0-1.158-.776l-.211-.125c-.487-.29-.872-.514-1.257-.511a3.618 3.618 0 0 0-.693.084c-.304.07-.6.302-.88.69a3.365 3.365 0 0 0-.297.494l.449.22-.507-.202-.13-.074a8.53 8.53 0 0 1-3.04-3.043l-.071-.124.019-.057v-.001c.168-.083.334-.183.492-.297.162-.117.552-.432.681-.842.063-.2.075-.407.086-.59l.007-.116c.029-.389-.197-.764-.482-1.237l-.153-.256c-.322-.55-.6-.933-.775-1.158a1.155 1.155 0 0 0-.811-.443c-.36-.031-1.066.01-1.748.608-1.018.896-1.326 2.25-.845 3.714a11.734 11.734 0 0 0 2.834 4.612 11.732 11.732 0 0 0 4.61 2.833c.455.149.897.222 1.32.222.94 0 1.777-.364 2.395-1.067.599-.681.639-1.387.608-1.748" transform="translate(-450 -1073) translate(352.5 157)" />
    </g>
  </svg>
);

const CameraCallIcon = () => (
  <svg viewBox="0 0 12 13" width="16" height="16" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <path d="M461.583 1076.078a.732.732 0 0 0-.774.073l-.612.466a.498.498 0 0 0-.197.398v4.97c0 .157.072.304.197.398l.612.466a.736.736 0 0 0 .774.073.749.749 0 0 0 .417-.677v-5.49a.75.75 0 0 0-.417-.677m-4.562-1.557h-5.043A1.98 1.98 0 0 0 450 1076.5v6.021a1.98 1.98 0 0 0 1.978 1.979h5.043a1.98 1.98 0 0 0 1.979-1.979v-6.021a1.98 1.98 0 0 0-1.978-1.979" />
    </g>
  </svg>
);

const MinimizeIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <path fillRule="nonzero" d="M452.25 1080.5h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5z" />
    </g>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <g fillRule="nonzero">
        <path d="m98.095 917.155 7.75 7.75a.75.75 0 0 0 1.06-1.06l-7.75-7.75a.75.75 0 0 0-1.06 1.06z" transform="translate(353.5 159)" />
        <path d="m105.845 916.095-7.75 7.75a.75.75 0 1 0 1.06 1.06l7.75-7.75a.75.75 0 0 0-1.06-1.06z" transform="translate(353.5 159)" />
      </g>
    </g>
  </svg>
);

const MicrophoneIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <g transform="translate(353.5 156)">
        <path fillRule="nonzero" d="M102 926.75 102 929 103 929 103 926.75z" />
        <path fillRule="nonzero" d="M100.5 929.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z" />
        <path d="M102.5 925a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-1.5 1.5" />
        <path fillRule="nonzero" d="M102.5 925.5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v4a2 2 0 0 1-2 2zm0-1a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1z" />
        <path fillRule="nonzero" d="M105.5 923v.5a3 3 0 1 1-6 0v-.5a.5.5 0 0 0-1 0v.5a4 4 0 1 0 8 0v-.5a.5.5 0 0 0-1 0z" />
      </g>
    </g>
  </svg>
);

const ImageUploadIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <g>
        <path d="M99.825 918.322a2.55 2.55 0 0 1 .18-.712l-.489.043a1.601 1.601 0 0 0-.892.345 1.535 1.535 0 0 0-.557 1.321l.636 7.275c.01.12.186.123.199.003l.923-8.275zm4.67 1.591a1 1 0 1 1-1.991.175 1 1 0 0 1 1.991-.175m3.099 1.9a.422.422 0 0 0-.597-.05l-1.975 1.69a.288.288 0 0 0-.032.404l.442.526a.397.397 0 0 1-.606.51l-1.323-1.576a.421.421 0 0 0-.58-.063l-1.856 1.41-.265 2.246c-.031.357.173 1.16.53 1.19l6.345.397c.171.014.395-.02.529-.132.132-.111.38-.49.396-.661l.405-4.239-1.413-1.652z" transform="translate(352 156.5)" />
        <path fillRule="nonzero" d="m107.589 928.97-6.092-.532a1.56 1.56 0 0 1-1.415-1.687l.728-8.328a1.56 1.56 0 0 1 1.687-1.416l6.091.533a1.56 1.56 0 0 1 1.416 1.687l-.728 8.328a1.56 1.56 0 0 1-1.687 1.415zm.087-.996.06.002a.561.561 0 0 0 .544-.508l.728-8.328a.56.56 0 0 0-.507-.604l-6.09-.533a.56.56 0 0 0-.605.507l-.728 8.328a.56.56 0 0 0 .506.604l6.092.532z" transform="translate(352 156.5)" />
      </g>
    </g>
  </svg>
);

const GifIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <path d="M460.25 1079a.75.75 0 0 1 0 1.5h-.75v1.25a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-.75v1h.75zm-2.75 2.75a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 1.5 0v4.5zm-2-.623a.747.747 0 0 1-.166.471c-.47.582-1.104.902-1.785.902-1.405 0-2.627-1.345-2.627-3s1.221-3 2.627-3a2.2 2.2 0 0 1 1.415.526.75.75 0 0 1-.957 1.155.713.713 0 0 0-.458-.181c-.495 0-1.049.641-1.049 1.5s.553 1.5 1.049 1.5a.716.716 0 0 0 .451-.177v-1.19a.75.75 0 0 1 1.5 0v1.494zm6.44-3.272c-.067-.835-.145-1.332-.416-1.916a3.458 3.458 0 0 0-1.58-1.505l-.026-.008c-.475-.213-.917-.276-1.792-.345a28.09 28.09 0 0 0-4.253 0c-.769.06-1.279.116-1.883.381a3.465 3.465 0 0 0-1.542 1.537l-.012.034c-.235.499-.309.985-.376 1.825a25.389 25.389 0 0 0 0 3.287c.067.836.146 1.334.416 1.916.326.629.884 1.17 1.532 1.486a.597.597 0 0 0 .049.02l.024.007c.476.213.918.276 1.793.345a28.103 28.103 0 0 0 4.253 0c.768-.06 1.278-.116 1.883-.381a3.469 3.469 0 0 0 1.542-1.538l.012-.034c.235-.497.308-.983.376-1.824.072-.936.072-2.349 0-3.285v-.002z" />
    </g>
  </svg>
);

const EmojiIcon = () => (
  <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="text-gray-600">
    <g fillRule="evenodd" transform="translate(-450 -1073)">
      <path d="M458.508 1078.5a1 1 0 1 1-.015-2.002 1 1 0 0 1 .015 2.002m-.037 1.668c-.324.91-1.273 1.832-2.46 1.832h-.002c-1.2 0-2.157-.922-2.48-1.832a.5.5 0 1 1 .942-.335c.204.573.835 1.167 1.538 1.167h.001c.692 0 1.315-.593 1.519-1.168a.5.5 0 0 1 .942.335m-5.971-2.667a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3.5-3.5a5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5" />
    </g>
  </svg>
);

const LikeIcon = () => (
  <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" className="text-[#0084ff]">
    <path d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z" />
    <path d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z" />
  </svg>
);

const getMessageBubbleClass = (messages: Array<{ role: string; text: string }>, index: number) => {
  const message = messages[index];
  if (!message.text) return "";

  // Find the start and end of the current message sequence
  let sequenceStart = index;
  let sequenceEnd = index;
  
  // Find start of sequence (first message from same sender)
  while (sequenceStart > 0 && messages[sequenceStart - 1].role === message.role && messages[sequenceStart - 1].text) {
    sequenceStart--;
  }
  
  // Find end of sequence (last message from same sender)
  while (sequenceEnd < messages.length - 1 && messages[sequenceEnd + 1].role === message.role && messages[sequenceEnd + 1].text) {
    sequenceEnd++;
  }

  const isFirstInSequence = index === sequenceStart;
  const isLastInSequence = index === sequenceEnd;
  const isSingleMessage = sequenceStart === sequenceEnd;
  const isUser = message.role === "user";

  // Base classes for the message bubble
  const baseClasses = `px-3 py-2 break-words whitespace-pre-wrap ${
    isUser ? "text-white" : "bg-[#f0f0f0] text-gray-900"
  }`;

  // Border radius logic
  if (isSingleMessage) {
    // Single message: all corners 18px
    return `${baseClasses} rounded-[18px]`;
  }

  if (isUser) {
    // User messages (right side)
    if (isFirstInSequence) {
      // First message: bottom right 4px, others 18px
      return `${baseClasses} rounded-[18px] rounded-br-[4px]`;
    }
    if (isLastInSequence) {
      // Last message: top right 4px, others 18px
      return `${baseClasses} rounded-[18px] rounded-tr-[4px]`;
    }
    // Messages in between: all corners 18px
    return `${baseClasses} rounded-[18px] rounded-r-[4px]`;
  } else {
    // Friend messages (left side)
    if (isFirstInSequence) {
      // First message: bottom left 4px, others 18px
      return `${baseClasses} rounded-[18px] rounded-bl-[4px]`;
    }
    if (isLastInSequence) {
      // Last message: top left 4px, others 18px
      return `${baseClasses} rounded-[18px] rounded-tl-[4px]`;
    }
    // Messages in between: all corners 18px
    return `${baseClasses} rounded-[18px] rounded-l-[4px]`;
  }
};

// Helper function to check if a message is the last in its sequence
const isLastInSequence = (messages: Array<{ role: string; text: string }>, index: number) => {
  if (!messages[index].text) return false;
  
  let sequenceEnd = index;
  while (sequenceEnd < messages.length - 1 && 
         messages[sequenceEnd + 1].role === messages[index].role && 
         messages[sequenceEnd + 1].text) {
    sequenceEnd++;
  }
  return index === sequenceEnd;
};

const MessengerGenerator = () => {
  const [messages, setMessages] = useState([
    { role: "user", text: "", time: "" },
    { role: "friend", text: "", time: "" },
  ]);
  const [friendName, setFriendName] = useState("John Doe");
  const [friendAvatar, setFriendAvatar] = useState<File | null>(null);
  const [userAvatar, setUserAvatar] = useState<File | null>(null);
  const [uiMode, setUiMode] = useState<UIMode>("modern");
  const [showActiveStatus, setShowActiveStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState("Active now");
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAddMessage = () => {
    if (messages.length < 12) {
      setMessages([
        ...messages,
        { role: "user", text: "", time: "" },
      ]);
    }
  };

  const handleChangeMessage = (index: number, field: "text" | "time", value: string) => {
    const newMessages = [...messages];
    newMessages[index][field] = value;
    setMessages(newMessages);
  };

  const handleChangeMessageRole = (index: number, newRole: "user" | "friend") => {
    const newMessages = [...messages];
    newMessages[index].role = newRole;
    setMessages(newMessages);
  };

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>, type: "friend" | "user") => {
    if (e.target.files && e.target.files[0]) {
      if (type === "friend") {
        setFriendAvatar(e.target.files[0]);
      } else {
        setUserAvatar(e.target.files[0]);
      }
    }
  };

  const handleGenerateImage = async () => {
    if (conversationRef.current) {
      const dataUrl = await htmlToImage.toPng(conversationRef.current, {
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "fake-messenger.jpg";
      link.click();
    }
  };

  const handleCopyToClipboard = async () => {
    if (conversationRef.current) {
      const blob = await htmlToImage.toBlob(conversationRef.current, {
        backgroundColor: "#ffffff",
      });
      if (blob) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        } catch (error) {
          console.error("Failed to copy image to clipboard", error);
        }
      }
    }
  };

  const getAvatarSrc = (type: "friend" | "user") => {
    if (type === "friend") {
      return friendAvatar ? URL.createObjectURL(friendAvatar) : "/messenger-avatar.jpg";
    }
    return userAvatar ? URL.createObjectURL(userAvatar) : "/messenger-user-avatar.jpg";
  };

  const t = useTranslations("HomePage.messenger");
  const locale = useLocale();

  const renderClassicUI = () => (
    <div
      ref={conversationRef}
      className="bg-white border rounded-xl shadow-sm overflow-hidden"
    >
      {/* Classic Messenger Header */}
      <div className="bg-[#0084ff] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={getAvatarSrc("friend")}
            alt="Friend Avatar"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <h3 className="font-semibold">{friendName}</h3>
            {showActiveStatus && (
              <p className="text-sm text-blue-100">{activeStatus}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-blue-600 rounded-full">
            <BsThreeDots className="text-xl" />
          </button>
        </div>
      </div>

      {/* Classic Messages */}
      <div className="p-4 bg-[#f0f2f5] min-h-[400px]">
        {messages.map((message, index) => {
          if (!message.text) return null;
          
          const showTime = index === 0 || 
            (messages[index - 1] && 
             messages[index - 1].time !== message.time);

          return (
            <div key={index}>
              {showTime && message.time && (
                <div className="flex justify-center my-2">
                  <span className="text-xs text-gray-500 bg-[#f0f2f5] px-2 py-1 rounded-full font-medium">
                    {message.time}
                  </span>
                </div>
              )}
              <div className={`my-2 flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}>
                {message.role === "friend" && (
                  <Image
                    src={getAvatarSrc("friend")}
                    alt="Friend Avatar"
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8 object-cover mr-2"
                  />
                )}
                <div className="flex flex-col max-w-[70%]">
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.role === "user"
                        ? "bg-[#0084ff] text-white rounded-tr-none"
                        : "bg-white text-black rounded-tl-none"
                    }`}
                  >
                    <p className="break-words whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
                {message.role === "user" && (
                  <Image
                    src={getAvatarSrc("user")}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8 object-cover ml-2"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Classic Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaPaperPlane className="text-gray-500" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder={t("table2.messagePlaceholder")}
              className="w-full bg-transparent outline-none"
              disabled
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <IoMdSend className="text-[#0084ff] text-xl" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderModernUI = () => (
    <div
      ref={conversationRef}
      className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col w-[338px] h-[443px] mx-auto relative"
    >
      {/* Gradient Background - Single source of gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgb(170,0,255)] to-[rgb(8,102,255)] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Modern Messenger Header */}
      <div className="bg-white border-b p-2 flex items-center justify-between h-[60px] relative">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src={getAvatarSrc("friend")}
              alt="Friend Avatar"
              width={32}
              height={32}
              className="rounded-full w-8 h-8 object-cover"
            />
            <div>
              <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">{friendName}</h3>
              {showActiveStatus && (
                <p className="text-[13px] text-gray-500">{activeStatus}</p>
              )}
            </div>
            <div className="[&>svg]:text-[rgb(170,0,255)]">
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(170,0,255)]">
            <PhoneIcon />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(170,0,255)]">
            <CameraCallIcon />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(170,0,255)]">
            <MinimizeIcon />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(170,0,255)]">
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Modern Messages */}
      <div className="flex-1 p-1.5 bg-white overflow-y-auto h-[323px] relative">
        {messages.map((message, index) => {
          if (!message.text) return null;
          
          const showTime = index === 0 || 
            (messages[index - 1] && 
             messages[index - 1].time !== message.time);

          // Calculate gradient position based on scroll position
          const messageContainer = document.querySelector('.overflow-y-auto');
          const containerHeight = messageContainer?.clientHeight || 323;
          const scrollTop = messageContainer?.scrollTop || 0;
          const messageElement = messageContainer?.children[index] as HTMLElement;
          const messageTop = messageElement?.offsetTop || 0;
          const messageBottom = messageTop + (messageElement?.offsetHeight || 0);
          
          // Calculate the position in the viewport
          const viewportPosition = (messageTop + messageBottom) / 2 / containerHeight;
          const gradientPosition = Math.max(0, Math.min(1, viewportPosition));
          
          // Smooth gradient calculation
          const gradientColor = `rgb(${
            Math.round(170 * (1 - gradientPosition) + 0 * gradientPosition)
          }, ${
            Math.round(0 * (1 - gradientPosition) + 112 * gradientPosition)
          }, ${
            Math.round(255 * (1 - gradientPosition) + 246 * gradientPosition)
          })`;

          const showAvatar = isLastInSequence(messages, index);

          return (
            <div key={index}>
              {showTime && message.time && (
                <div className="flex justify-center my-2">
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full font-medium">
                    {message.time}
                  </span>
                </div>
              )}
              <div className={`my-0.5 text-[15px] flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}>
                {message.role === "friend" && showAvatar && (
                  <div className="flex items-end">
                    <Image
                      src={getAvatarSrc("friend")}
                      alt="Friend Avatar"
                      width={28}
                      height={28}
                      className="rounded-full w-7 h-7 object-cover mr-2"
                    />
                  </div>
                )}
                {message.role === "friend" && !showAvatar && (
                  <div className="w-9" /> /* Spacer for avatar width (28px) + margin (8px) */
                )}
                <div className="flex flex-col max-w-[70%]">
                  <div 
                    className={getMessageBubbleClass(messages, index)}
                    style={message.role === "user" ? { backgroundColor: gradientColor } : undefined}
                  >
                    <p className="break-words whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
                {message.role === "user" && !showAvatar && (
                  <div className="w-9" /> /* Spacer for avatar width (28px) + margin (8px) */
                )}
                {message.role === "user" && showAvatar && (
                  <div className="flex items-end">
                    <Image
                      src={getAvatarSrc("user")}
                      alt="User Avatar"
                      width={28}
                      height={28}
                      className="rounded-full w-7 h-7 object-cover ml-2"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Input Area */}
      <div className="py-3 px-1 bg-white border-t h-[60px] relative">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 flex-shrink-0">
            <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(0,112,246)]">
              <MicrophoneIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(0,112,246)]">
              <ImageUploadIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(0,112,246)]">
              <StickerIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full [&>svg]:text-[rgb(0,112,246)]">
              <GifIcon />
            </button>
          </div>
          <div className="flex-1 bg-[#f0f2f5] rounded-full p-1 pl-2 flex items-center min-w-0">
            <input
              type="text"
              placeholder="Aa"
              className="flex-1 bg-transparent outline-none min-w-0"
              disabled
            />
            <button className="p-1 hover:bg-gray-200 rounded-full flex-shrink-0 [&>svg]:text-[rgb(0,112,246)]">
              <EmojiIcon />
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0 [&>svg]:text-[rgb(0,112,246)]">
            <LikeIcon />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex-grow">
      <Navbar />
      <div className="bg-white text-black">
        <div className="container p-4">
          <div className="mb-4">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to generators
            </Link>
          </div>
          <h1 className="text-3xl mb-4">{t("title")}</h1>
          <p className="mb-4">{t("description")}</p>
          <div className="md:flex md:space-x-4 md:gap-4">
            <div className="md:w-1/2 mb-4 bg-gray-50 p-4 border border-gray-200 shadow-xs rounded-md">
              <h2 className="my-2 font-bold text-xl">{t("table1.input")}</h2>
              <p className="mb-2 text-sm">{t("table1.description")}</p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">{t("table1.friendName")}</label>
                <Input
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  placeholder={t("table1.friendNamePlaceholder")}
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">{t("table1.activeStatus")}</label>
                  <Switch
                    checked={showActiveStatus}
                    onCheckedChange={setShowActiveStatus}
                  />
                </div>
                {showActiveStatus && (
                  <Input
                    value={activeStatus}
                    onChange={(e) => setActiveStatus(e.target.value)}
                    placeholder={t("table1.activeStatusPlaceholder")}
                  />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">{t("table1.friendAvatar")}</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadAvatar(e, "friend")}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">{t("table1.userAvatar")}</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadAvatar(e, "user")}
                />
              </div>

              {messages.map((message, index) => (
                <div key={index} className="mb-4 bg-white p-3 rounded-md border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <select
                      value={message.role}
                      onChange={(e) => handleChangeMessageRole(index, e.target.value as "user" | "friend")}
                      className="text-sm border rounded px-2 py-1"
                    >
                      <option value="user">{t("table1.user")}</option>
                      <option value="friend">{t("table1.friend")}</option>
                    </select>
                    <span className="text-sm text-gray-500">
                      {t("table1.message")} {index + 1}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Textarea
                        placeholder={t("table1.messagePlaceholder")}
                        value={message.text}
                        onChange={(e) => handleChangeMessage(index, "text", e.target.value)}
                      />
                    </div>
                    <div className="w-32">
                      <Input
                        type="text"
                        placeholder={t("table1.timePlaceholder")}
                        value={message.time}
                        onChange={(e) => handleChangeMessage(index, "time", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {messages.length < 12 && (
                <Button variant="outline" onClick={handleAddMessage}>
                  {t("table1.addmsg")}
                </Button>
              )}
            </div>

            <div className="md:w-1/2 mb-4 bg-gray-50 p-4 border border-gray-200 shadow-xs rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">{t("table2.output")}</h2>
                <div className="flex gap-2">
                  <Button
                    variant={uiMode === "classic" ? "default" : "outline"}
                    onClick={() => setUiMode("classic")}
                    size="sm"
                  >
                    {t("table1.classicMode")}
                  </Button>
                  <Button
                    variant={uiMode === "modern" ? "default" : "outline"}
                    onClick={() => setUiMode("modern")}
                    size="sm"
                  >
                    {t("table1.modernMode")}
                  </Button>
                </div>
              </div>
              
              {uiMode === "classic" ? renderClassicUI() : renderModernUI()}

              <p className="my-4 text-sm md:text-md">{t("table2.guide")}</p>

              <div className="flex gap-2">
                <Button onClick={handleGenerateImage}>
                  <MdOutlineFileDownload className="mr-1" />
                  {t("table2.downloadBtn")}
                </Button>
                <div className="flex">
                  <Button onClick={handleCopyToClipboard} variant="outline">
                    <IoCopyOutline className="mr-1 font-bold" />
                    {t("table2.copyBtn")}
                  </Button>
                  {copied && (
                    <p className="text-sm text-green-700 ml-2 flex items-center">
                      {t("table2.copyMsg")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MessengerGenerator; 