// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
//   {
//     settings: {
//       cors: {
//         enabled: true,
//         origin: ['https://frontend-food-app-six.vercel.app'],
//       },
//     },
//   },
// ];

//& updating to fix middlewares errors
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://frontend-food-app-six.vercel.app', 'https://strapi-g6mo.onrender.com'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
