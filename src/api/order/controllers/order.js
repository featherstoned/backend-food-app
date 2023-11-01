"use strict";
const stripe = require("stripe")("sk_test_51Ny2fbC4boavpkWBKWEvwCpwetaP8pbiknOBFK6vll9AuUpVsr69sewbpYEcfmj6AXQpXhtqV4VYDqHXFcTEf3Nz00Pcbn7Uc6");

/**
 *  order controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    
    if (!user) {
      return ctx.unauthorized("You are not authorized!");
    }

    const { address, amount, dishes, token, city, state } =
      ctx.request.body.data;

    try {
      // Charge the customer
      await stripe.charges.create({
        amount: amount,
        currency: "usd",
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        source: token,
      });

      // Create the order
      const order = await strapi.service("api::order.order").create({
        data: {
          amount,
          address,
          dishes,
          city,
          state,
          token,
          user: ctx.state.user.id,
        },
      });

      console.log(ctx.request.body.data);
      console.log(ctx.state.user.id);
      console.log("order controller");

      return order;
    } catch (err) {
      // return 500 error
      console.log("err", err);
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the charge" },
        address,
        amount,
        dishes,
        token,
        city,
        state,
      };
    }
  },
}));