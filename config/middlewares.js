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
module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['https://frontend-food-app-six.vercel.app'],
    },
  },
};
