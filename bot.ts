import { Bot } from "https://deno.land/x/grammy@v1.11.0/mod.ts";
import { Composer, Context, InlineKeyboard,NextFunction } from "./deps.ts";
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
const bot = new Bot(Deno.env.get('BOT_TOKEN')!);





bot.command("about", (ctx) => {
  ctx.reply("Bu bot <b>TUIT TEAM</b> boti  hisoblanadi", {
    parse_mode: "HTML",
  });
});




export const message = `<b>Hurmatli guruh a'zosi...</b> ` +
  `\n` +
  `\n` +
  `Iltimos qoidalarga oz bo'lsada vaqt ajratishni unutmang, bu muhim! Ushbu guruhda quyidagi harakatlar taqiqlanadi:` +
  `\n` +
  `\n` +
  `<code>* Besabab bir-birini kamsitish yoki so'kinish</code>` +
  `\n` +
  `<code>* Sababsiz guruhga spam yozaverish yoki tashash</code>` +
  `\n` +
  `<code>* So'ralgan narsani yana qayta ezmalash</code> ` +
  `\n` +
  `<code>* Administratorlarga nisbatan juddayam qattiq kritika</code>` +
  `\n` +
  `<code>* Faoliyat ustidan shikoyat qilaverish yoki nolish</code>` +
  `\n` +
  `\n` +
  `<b>Ushbu qoidalarni doimiy tarzda buzish, butunlay ban yoki bir necha ogohlantirishlirga olib keladi!</b>`;

  export const keyboar = new InlineKeyboard().url(
    `Guruhga qaytish`,
    `https://t.me/tatu_tuit_hub`,
  );
  
  bot.command("rules", async (ctx) => {
    await ctx.reply(message, {
      parse_mode: "HTML",
      reply_markup: keyboar,
    });
  });
  



export const keyboard = new InlineKeyboard().url(
  "TEAM",
  "https://t.me/tatu_tuit_hub"
);
bot.command("start", (ctx) => {
  ctx.reply(
    `Assalamu alaykum ${
      ctx!.from!.first_name
    } <b>TUIT TEAM </b> ga xush kelibsiz`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
});

bot.on("message:text", async (ctx) => {
  if (ctx?.message?.from?.username) {
    if (
      ctx?.message?.from?.username === "Channel_Bot"
    ) {
      await ctx.deleteMessage()
    }
  }
})
bot.on("channel_post", (ctx) => {
  console.log("Type:", ctx.chat!.type, " with ID of:", ctx.chat!.id);
})
bot.start();
