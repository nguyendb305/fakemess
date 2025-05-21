# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Here are the versions that are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of FakeMess seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to nguyenbdangg@gmail.com.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information in your report:
- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English.

## Policy

FakeMess follows the principle of [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).

## What to expect

After you submit a report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release new versions with the fixes
5. Credit you in the release notes (unless you prefer to remain anonymous)

## Security Measures

FakeMess implements the following security measures:

- Client-side only processing (no server-side data storage)
- Rate limiting to prevent abuse
- Input validation and sanitization
- Secure headers
- HTTPS enforcement
- Regular dependency updates
- No sensitive data collection

## Best Practices

When using FakeMess:

1. Keep your browser and operating system updated
2. Use the latest version of FakeMess
3. Report any security issues you discover
4. Use the tool responsibly and ethically
5. Don't use the tool for malicious purposes

## Updates

This security policy may be updated from time to time. The latest version will always be available in the repository. 