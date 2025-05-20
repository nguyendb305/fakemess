import ChatGPTGenerator from "./chatgptGenerator";
import ChatGPTContent from "./chatgptContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fake ChatGPT Generator - Create Realistic AI Conversation Screenshots",
  description: "Create authentic-looking ChatGPT conversation screenshots with our free online tool. Perfect for educational content, social media posts, and technical documentation. Features code block formatting, markdown support, and realistic AI responses.",
  keywords: [
    "fake chatgpt generator",
    "chatgpt screenshot maker",
    "ai conversation generator",
    "fake chatgpt conversations",
    "chatgpt mockup",
    "ai chat generator",
    "chatgpt screenshot creator",
    "fake ai conversations",
    "chatgpt conversation maker",
    "code block generator"
  ].join(", "),
  openGraph: {
    title: "Fake ChatGPT Generator - Create Realistic AI Conversation Screenshots",
    description: "Create authentic-looking ChatGPT conversation screenshots with our free online tool. Features code block formatting, markdown support, and realistic AI responses.",
    type: "website",
    url: "https://fakemess.com/chatgpt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fake ChatGPT Generator Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake ChatGPT Generator - Create Realistic AI Conversation Screenshots",
    description: "Create authentic-looking ChatGPT conversation screenshots with our free online tool. Features code block formatting and markdown support.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://fakemess.com/chatgpt",
    languages: {
      'en': 'https://fakemess.com/chatgpt',
      'vi': 'https://fakemess.com/vi/chatgpt',
      'x-default': 'https://fakemess.com/chatgpt'
    }
  },
  category: "web tools",
  authors: [{ name: "FakeMess Team" }],
  creator: "FakeMess",
  publisher: "FakeMess",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function ChatGPT() {
  return (
    <div className="min-h-screen">
      {/* Generator Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <ChatGPTGenerator />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <ChatGPTContent />
      </div>
    </div>
  );
}
