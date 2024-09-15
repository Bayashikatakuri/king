//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdJdFdTbzFSSEkzVkFvb0pZb1c1eUJ1SEduRzRwNjB3SHpORmFPeU0yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajRpckNLekQ2WEpuN1ZGRGptT1FsSW5VMURQZXZNNXhxR3dNVFQ3djdpST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT21lQlBKVWJmMDNqdnBSczUwM2VOMVE2TXVPOU16R3JiQk1maTc4aVZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ZDBtTzlyQ2g1eC9wWHBKcEV5RTJUbzdyYnNJZWk3ZWNLSkl6WHYrY2hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPazJqVmo0YWY0WFRSM3p4WTJPRlZJY0cwOGVVUGM1UTdqaEhLL3VXRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYaittb1JkWHhuTWxSOWwyRXVGbFRMVjljZ0hVQzA2RlFCbWJhUFhWMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUk0U0F0eWR2Wk1qNXNaZU9iNCtIY1VXM0RxNnFHWUltcENjZExWNHluQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVyYlVNcTBiOUVqeGljL0RyT2ViWkpKYlU1WVJXc25sRWp1Z0czWWNSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngzR0VsVTVZUng2Y0tJWjdHSWUvc1BCZFpIM1MvbkJaQ1gyRjN2eS9aQk5aK08zQ3RydWR1NTRKU0RBV0xmRG1wd2dtaFYvcGZkdTZHeWQ1VUl5dER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IjN2TUo3V2hTYUpMRlcvVlc5L21Kc1NPN1BGbXhBQW9EeDRkeEpWcHQ1Wjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0MjY2NTY3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRjQwRUJCMzI4REQ1MDc2NTVGOTBEQzJDQUExMUMwQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NDAxMDI4fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxLUVCdkpCUlJKeXlFVE1nOGx4UGlBIiwicGhvbmVJZCI6IjM4Zjc5ZmViLTUyNjctNGM3Ny04ZjRhLTQ4OTFkYmQyZDlmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6OElOOWhkWVJDeTByQ1lBZGF4ekNtZ3hFZFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHpTR3BsenFkYmdsOEVRS1lIdStRZ0VwYkgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlBWTU1VzYzIiwibWUiOnsiaWQiOiIyMzQ3MDQyNjY1Njc5OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktpbmcuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKanltY01IRVBLVG03Y0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQNlB3dVp4WHRQQnhiMUhPZkFNRWZzMDhLalFpY01Fdm5TV1pDVnlaQUFjPSIsImFjY291bnRTaWduYXR1cmUiOiJ0VzgxQkZMalUxdU84OU5XVGdMSnFiNk5YSFlnMjI2ak85YVVjTGJ4TVp0cWdYci9HRHRoanZNYUxjUGxlZ3ptR3d6T0RTanQ4N3VHNGhkSmZzemZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL29wYWNTZWR3NnJtd3hwWWY2WXVoaFpyTXcweHJXczJ0V0N5WGk3aGdCNkNUNG9Ib2JFbDNCY0c2WTVtelBscDBiY1doYW9Eb2NJWUxBYjB0SE5MQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQyNjY1Njc5OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQrajhMbWNWN1R3Y1c5Unpud0RCSDdOUENvMEluREJMNTBsbVFsY21RQUgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0MDEwMjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2pRIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
