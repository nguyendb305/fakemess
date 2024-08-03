"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import * as htmlToImage from "html-to-image";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaMicrophone } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Navbar from "@/components/sections/navbar";
import { useLocale, useTranslations } from "next-intl";

const Home = () => {
  const [messages, setMessages] = useState([
    { role: "user", text: "" },
    { role: "chatgpt", text: "" },
  ]);
  const [imageTheme, setImageTheme] = useState("light");
  const [avatar, setAvatar] = useState<File | null>(null);
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAddMessage = () => {
    if (messages.length < 4) {
      setMessages([
        ...messages,
        { role: "user", text: "" },
        { role: "chatgpt", text: "" },
      ]);
    }
  };

  const handleChangeMessage = (index: number, text: string) => {
    const newMessages = [...messages];
    newMessages[index].text = text;
    setMessages(newMessages);
  };

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleGenerateImage = async () => {
    if (conversationRef.current) {
      const dataUrl = await htmlToImage.toPng(conversationRef.current, {
        backgroundColor: imageTheme === "light" ? "#ffffff" : "#000000",
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "fakegpt.jpg";
      link.click();
    }
  };

  const handleCopyToClipboard = async () => {
    if (conversationRef.current) {
      const blob = await htmlToImage.toBlob(conversationRef.current, {
        backgroundColor: imageTheme === "light" ? "#ffffff" : "#000000",
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

  const getAvatarSrc = () => {
    if (imageTheme === "light") {
      return "/gpt-avatar.jpg";
    } else {
      return "/gpt-avatar-dark.jpg";
    }
  };

  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <main className="flex-grow">
      <Navbar />
      <div className="bg-white text-black">
        <div className="container p-4">
          <h1 className="text-3xl mb-4">{t("title")}</h1>
          <p className="mb-4">{t("description")}</p>
          <div className="md:flex md:space-x-4 md:gap-4">
            <div className="md:w-1/2 mb-4 bg-gray-50 p-4 border border-gray-200 shadow-xs rounded-md">
              <h2 className="my-2 font-bold text-xl">{t("table1.input")}</h2>
              <p className="mb-2 text-sm">{t("table1.description")}</p>
              {messages.map((message, index) => (
                <div key={index} className="mb-2 bg-white">
                  <Textarea
                    placeholder={`${t("table1.message")} ${index + 1} (${
                      message.role
                    })`}
                    value={message.text}
                    onChange={(e) => handleChangeMessage(index, e.target.value)}
                  />
                </div>
              ))}
              {messages.length < 4 && (
                <Button variant="outline" onClick={handleAddMessage}>
                  {t("table1.addmsg")}
                </Button>
              )}
              {/* <div className="my-4">
              <label>Upload Avatar:</label>
              <Input type="file" onChange={handleUploadAvatar} />
            </div> */}
            </div>
            <div className="md:w-1/2 mb-4 bg-gray-50 p-4 border border-gray-200 shadow-xs rounded-md">
              <h2 className="my-2 font-bold text-xl">{t("table2.output")}</h2>
              <div className="my-4 flex gap-2">
                <label>Dark mode</label>
                <Switch
                  checked={imageTheme === "dark"}
                  onCheckedChange={() =>
                    setImageTheme(imageTheme === "light" ? "dark" : "light")
                  }
                />
              </div>

              <div
                ref={conversationRef}
                className={`px-4 pt-4 pb-2 border rounded-xl shadow-sm ${
                  imageTheme === "light"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <div className="flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-lg text-token-text-secondary"
                  >
                    <path
                      fill="currentColor"
                      d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                    ></path>
                  </svg>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-lg">ChatGPT</span>
                    <FaAngleRight className="text-sm text-gray-400" />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="icon-xl-heavy"
                  >
                    <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                  </svg>
                </div>
                {messages.map((message, index) =>
                  message.text ? (
                    <div
                      key={index}
                      className={`my-4 flex items-start tracking-tight ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "chatgpt" && (
                        <img
                          src={getAvatarSrc()}
                          alt="ChatGPT Avatar"
                          className="w-8 h-8 mr-2"
                        />
                      )}

                      <div
                        className={`${
                          message.role === "user"
                            ? `py-2 px-4 rounded-3xl max-w-[75%] ${
                                imageTheme === "light"
                                  ? "bg-gray-100"
                                  : "bg-gray-800"
                              }`
                            : "mr-2"
                        }`}
                      >
                        <p>{message.text}</p>
                      </div>
                    </div>
                  ) : null
                )}
                <div className="flex justify-between pt-2">
                  <div className="flex items-center">
                    <div
                      className={` rounded-full p-[3px] mr-2 ${
                        imageTheme === "light"
                          ? "bg-gray-100 text-gray-500"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      <HiPlusSm className="text-2xl" />
                    </div>
                  </div>
                  <div
                    className={`flex  border  rounded-2xl w-full justify-between p-2 ${
                      imageTheme === "light"
                        ? "bg-white text-gray-600 border-gray-300"
                        : "bg-black text-gray-400 border-gray-500"
                    }`}
                  >
                    <span className="mx-1 text-sm">
                      {t("table2.messagePlaceholder")}
                    </span>
                    <div>
                      <FaMicrophone className="text-xl" />
                    </div>
                  </div>
                  <div className="ml-2 flex items-center">
                    <TbHeadphonesFilled
                      className={`text-3xl ${
                        imageTheme === "light"
                          ? " text-gray-600 "
                          : " text-gray-400 "
                      }`}
                    />
                  </div>
                </div>
              </div>

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

export default Home;
