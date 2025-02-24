//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "233502079511";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdHK3BJd1RrZG4yTVRNSUIzN21jZVhwZmIyY0xqSmpzVTMwUUhlQWpVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlpsd3M5NTQ2bklIMzhvYWFxa3E2ZXBTQjAyVXZuSjljZWNKQ3ZLbk1FND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RFR3UDk2L01CZFFhRVJzZzFsd1VlbnNCSUt3a0dIRkpTa3dGZmg0am04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiVGhSQVkrVzVHUDhsQ3NMTmdEcnVybWRLZXZQemVWRlhEVk9BRWVRclhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMK3lsS2FWMENNY0cxZWJLRjdNeTFrdDJyTnk1cU0yWmdueE9EcFlnRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNMTzR2V3JaK1NnOTVPNVpGY0ladlBzUTcyM0p0NU4xN29PMER5SkRrVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5Wb0dqdkFzNVlDT3k2ZjNMNDdtYWt5OU1WN3RNRzI5aGM2NDZsd3hFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE9ncHRwd2pSOWFneitJS0huVFQ2Tm43QXFHanoxZFJZMW02Z0FUT2J3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJpN0Q3aUp6UDZzUVlNL2s4WnlQYnJNS3VoT0xWd29mUnZNcmxMLzhYckhaWVh6Q2NabGsvWEhYamZTM3Bobk83bTlVeGRuSGZUU1hWMjA0YTBrbkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJHejl0OUhzb2MvSlBTMHRhbG5uM0p0WXNjWDRXaHBhR1dYRVJKUk1ENWNnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5WDhBZzJ5aFF1MjhaZjhBeGk1M3R3IiwicGhvbmVJZCI6ImM2ZTI5M2Y5LWI4ZjAtNGE5Zi04MzBkLWQ5OWU3ZWEzY2U2OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWE1RdVZyR2ZaY0UyRWJsMVgyblFpRjExY2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHk1bEJVdFNyUWpuL29DWHFoV3ZGSFBWSXlZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdBTVJMUVNKIiwibWUiOnsiaWQiOiIyMzM1MDIwNzk1MTE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNUyBHUkFQSElYIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcmMzSU1DRU82YnBMd0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwUVFRcXplNitHTzFwN2JoalRWOEJZUTlpQ3ZuZ1FNYTI4dXZNWmdoWEhvPSIsImFjY291bnRTaWduYXR1cmUiOiJOT3RBSVVqV1VFcjNta0h3OCtlMmZra1RaZHNEdzNSTk1tdElkZTROYXJNVmNPMWtyQngxVFlIQktyVzNtOFBraEh1SmNsejR3Q1E0NnhtVUc5WHZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVDVyOFNGL0ZyYmJESit3MzdWY3RLWVRFVHVKNzJNMDZONDF6MTNCcHNTQyt4SVRzc2p6Z015SmZNMTdVSndwSThIYWNCWU9ocE9xcElPSmg3Z3RqQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1MDIwNzk1MTE6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkRUVFS3MzdXZoanRhZTI0WTAxZkFXRVBZZ3I1NEVER3R2THJ6R1lJVng2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MDM1MjYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNSayJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
