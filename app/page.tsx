"use client";
import { useTranslations } from "next-intl";
import Navbar from "@/components/sections/navbar";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const t = useTranslations("HomePage");

  const generators = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "Generate fake ChatGPT conversations",
      icon: "/gpt-avatar.jpg",
      path: "/chatgpt",
    },
    // Add more generators here in the future
    // {
    //   id: "messenger",
    //   name: "Facebook Messenger",
    //   description: "Generate fake Facebook Messenger conversations",
    //   icon: "/messenger-icon.png",
    //   path: "/messenger",
    // },
  ];

  return (
    <main className="flex-grow">
      <Navbar />
      <div className="container p-4">
        <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mb-8">{t("description")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((generator) => (
            <Link
              key={generator.id}
              href={generator.path}
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={generator.icon}
                  alt={generator.name}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{generator.name}</h2>
                  <p className="text-gray-600">{generator.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
