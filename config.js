//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpjVnUrL2QxYWwra3AwdFA3YnNtcGkzWkRVTjBHRk1PUU4zeGV3NUVuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkpzWlZtRms1cE5aMWJ6OTI2bm5DTEZFWmVyZEJZQVF0YmFkUC83M014bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTlpTVkdpOXFld3k1cEtESXV6enltdzUvbWxjOWtIMzBnR2R4R045NkdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFS1doSldyVEw4dVM4M0RNVDN3Y2NaWXMzUzVXa3o4NFNXNTRzQ2FsL0NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQK0pRRy9zZmJBenZPRGF3L0dIcE1QYVVBUDloY01WV2dSOXRZamozRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wcnV5NUxoVlU0YjlXeWdvYlJjUDVPWTdYaHE0RXpETmcwNWsrRy9xVkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Z0LzNjZjBrdnFReGUxNWxjZEIyUjl6OEdIR2RHTitvZFc5b0JKek9ITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnhXZFhOcHlRL0JtOGk2dDFpN1JERndLVjdDVGU3SnFPK2NKMzhPKzkzRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZIVVQ4RjZtWGdwR0tsUGZacGFNeGNJL25PUi9ab2VnNlpaZDdGSzlmMnJieWJtYWg0TmFvdWhyOG1WRHAvd0pHOVZOd2pRemw1NU9VT1NidzVWVUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6InloRWNzZEJlOUhXbUJRWFd3ZURDaEY3NDRPQUx6MkZHWk9ZekhoUkI1bVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDE1MTU2MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEUxMzVENzZDMTQ3N0U1QTZBQkY3MUFBQ0U0N0E0QTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQyMTMxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDE1MTU2MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTZERUM5RDhGQzY2NzdGMEY5NjI4QjgyNjE0Q0MzRjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQyMTMxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNjhXRE8tV3pRWDZQR0VPNzNRa1U1ZyIsInBob25lSWQiOiI1ZGU1Mjg1Mi03Njc0LTQ3YWMtOTk5OS1iMTNhOWI0NGU2MGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3ZNV1h3Z1pIWXdrb3dPU0VuWldNNDQ2NGowPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl4UnIzTTZtSTJ6YzZjSzMvUWZMMEZEZDduMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1WEhaNzZQNiIsIm1lIjp7ImlkIjoiOTQ3MDE1MTU2MDk6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSEFOU0EgREVXTUlOQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FHMXRVQ0VMR2dxTFVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRkZVT1F4OFdjeldRUExUSUZXVVluU3dMeFppeGF5SzYyZWhkdjhIbHpSVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWsxNzFVcDRRSlZxc3ZEVGQ5QUtCakRqTmtlYldMK0V0MFE5aFJlM0RiczNYV00yZzRjWjZiYXA4ZnpKRkovdmN6d0pxdWtVTWQrSGRsc1o1N0dqQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJVZGdYdTJDV3BpdlE2QmNQUmJDcjJsQU05WnprbDVNVVN0U3pYeTlJRmRrRHhpOWJNNGtJZW96RGJwUjkwVVpQWGtZQjVLR2w5MFQyWVhaR3o0akNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDE1MTU2MDk6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlJWRGtNZkZuTTFrRHkweUJWbEdKMHNDOFdZc1dzaXV0bm9YYi9CNWMwViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQyMTMxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNM2sifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
