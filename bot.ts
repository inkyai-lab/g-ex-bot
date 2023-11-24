import { Bot, Keyboard } from "./deps.deno.ts";
// import axiod from "https://deno.land/x/axiod/mod.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "234dc");

// Construct a keyboard.
const keyboard = new Keyboard()
  // .text("🌑 Exchange").row()
  .webApp("🌑 Exchange", "https://guiser.org/swap")
  .text("🆘 Contact Support")
  .resized();

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Trade your favorite cryptos like BTC, ETH, MATIC, XMR, SOL, and thousands more, including those quirky meme tokens, all hassle-free on Telegram!", 
  { reply_markup: keyboard });
});