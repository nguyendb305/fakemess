import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      vi: '/ve-chung-toi'
    },
    '/contact': {
      vi: '/lien-he'
    },
    '/policy': {
      vi: '/chinh-sach-su-dung'
    },
    '/messenger': {
      vi: '/messenger'
    },
    '/chatgpt': {
      vi: '/chatgpt'
    }
  
  }
});