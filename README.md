# FakeMess - Fake Message Generator

A free, open-source web application for creating realistic chat screenshots. Create fake ChatGPT conversations and Facebook Messenger chats with ease.

![Behind the Scenes Meme](https://github.com/nguyendb305/fakemess/blob/main/public/self-texting-behind-the-scene.jpg)  
###No more self-texting! FakeMess lets you create both sides of a chat in one place.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🌟 Features

- **ChatGPT Generator**
  - Create realistic ChatGPT conversation screenshots
  - Customizable user and AI messages
  - Dark/Light mode support

- **Messenger Generator**
  - Generate authentic Facebook Messenger screenshots
  - Customizable chat bubbles and timestamps
  - Multiple message types support
  - Realistic UI elements

- **Additional Features**
  - Multi-language support (English, Vietnamese)
  - Responsive design
  - No data storage (privacy-focused)
  - Free to use

## 🚀 Live Demo

Visit [FakeMess](https:www//fakemess.com) to try it out!

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [html2canvas](https://html2canvas.hertzen.com/) - Screenshot generation
- [Lucide Icons](https://lucide.dev/) - Icons

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/nguyenbdangg/fakegpt.git
cd fakegpt
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

### ChatGPT Generator
1. Navigate to `/chatgpt`
2. Enter your conversation
3. Customize the appearance
4. Click "Generate Screenshot"

### Messenger Generator
1. Navigate to `/messenger`
2. Add messages to the conversation
3. Customize the chat appearance
4. Click "Generate Screenshot"

## 🌐 Internationalization

The application supports multiple languages:
- English (default)
- Vietnamese

To add a new language:
1. Add the locale to `i18n/routing.ts`
2. Create a new messages file in `messages/`
3. Add translations for all keys

## ⚠️ Disclaimer

This tool is intended for:
- Educational purposes
- Content creation
- Design mockups
- Testing and development

Please use responsibly and ethically. Do not use this tool to:
- Create misleading content
- Impersonate others
- Spread misinformation
- Engage in fraudulent activities

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- Email: nguyenbdangg@gmail.com
- GitHub: [@nguyenbdangg](https://github.com/nguyendb305)
- Website: [FakeMess](https:www//fakemess.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [next-intl](https://next-intl-docs.vercel.app/) for internationalization
- All contributors and users of the project
