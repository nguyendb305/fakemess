import MessengerGenerator from "./messengerGenerator";
import MessengerContent from "./messengerContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fake Messenger Generator - Create Realistic Facebook Messenger Screenshots",
  description: "Create authentic-looking Facebook Messenger screenshots with our free online tool. Perfect for social media content, marketing materials, and design mockups. No installation required, privacy-focused, and easy to use.",
  keywords: [
    "fake messenger generator",
    "facebook messenger screenshot",
    "messenger chat generator",
    "fake chat maker",
    "messenger screenshot creator",
    "facebook chat generator",
    "messenger mockup",
    "fake conversation maker",
    "messenger conversation generator",
    "chat screenshot tool"
  ].join(", "),
  openGraph: {
    title: "Fake Messenger Generator - Create Realistic Facebook Messenger Screenshots",
    description: "Create authentic-looking Facebook Messenger screenshots with our free online tool. Perfect for social media content, marketing materials, and design mockups.",
    type: "website",
    url: "https://fakemess.com/messenger",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Fake Messenger Generator Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake Messenger Generator - Create Realistic Facebook Messenger Screenshots",
    description: "Create authentic-looking Facebook Messenger screenshots with our free online tool. Perfect for social media content and marketing materials.",
    images: ["/og-image.png"] // Same image as OpenGraph
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
    canonical: "https://fakemess.com/messenger"
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

export default function Messenger() {
  return (
    <div className="min-h-screen">
      {/* Generator Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <MessengerGenerator />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <MessengerContent />
      </div>
    </div>
  );
}