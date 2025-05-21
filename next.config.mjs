import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin'
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=()'
              }
            ]
          }
        ]
      }
};

export default withNextIntl(nextConfig);
