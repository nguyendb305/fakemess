# Contributing to FakeMess

Thank you for your interest in contributing to FakeMess! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- Use the bug report template when creating a new issue
- Include detailed steps to reproduce the bug
- Include screenshots if applicable
- Specify your environment (browser, OS, etc.)

### Suggesting Features

- Check if the feature has already been suggested
- Use the feature request template
- Provide a clear description of the feature
- Explain why this feature would be useful
- Include any relevant examples

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes
4. Run tests and ensure they pass
5. Update documentation if necessary
6. Submit a pull request

### Development Setup

1. Fork and clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Use Tailwind CSS for styling

### Commit Messages

- Use clear and descriptive commit messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep the first line under 50 characters
- Use the body to explain what and why (not how)

Example:
```
Add dark mode support for ChatGPT generator

- Implement dark mode toggle
- Add dark theme styles
- Update color scheme
```

### Testing

- Test your changes thoroughly
- Ensure the app works in different browsers
- Test responsive design
- Verify internationalization
- Check accessibility

### Documentation

- Update README.md if necessary
- Add comments to complex code
- Update translation files if adding new text
- Document any new environment variables

## Getting Help

- Check the [documentation](https://fakemess.com)
- Open an issue for questions
- Contact the maintainer at nguyenbdangg@gmail.com

## License

By contributing to FakeMess, you agree that your contributions will be licensed under the project's MIT License. 