import { Bot, Keyboard } from "./deps.deno.ts";
// import axiod from "https://deno.land/x/axiod/mod.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "234dc");

const keyboard = new Keyboard()
  .webApp("🪙  Exchange", "https://guiser-reward.web.app").row()
  .webApp("🎁 Token Reward", "https://guiser-reward.web.app").row()
  .text("🆘 Contact Support")
  .resized();

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Trade your favorite cryptos like BTC, ETH, MATIC, XMR, SOL, and thousands more, including those quirky meme tokens, all hassle-free on Telegram!", 
  { reply_markup: keyboard });
});

bot.on('message:text', async (ctx) => {
  try {
      const btnText = ctx.msg.text;
  if ( btnText === "🆘 Contact Support" )  {
    ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @guiser_support"); // Reply to the user with a confirmation message
  } else {
    await ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @guiser_support");
  }
  } catch (error) {
    console.error(error)
  }
  
});

// // Wait for click events with specific callback data.
// bot.callbackQuery("support", async (ctx) => {
//   await ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @askGuiserBot", { reply_markup: keyboard });
// });

