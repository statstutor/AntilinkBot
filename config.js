const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "16479812882" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16479812882";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_29_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6THd4QzNsSllMWGF2UlRua2Z4VlZOTUEzcjFESGFCVFZQZnlNaTh1b0RNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE2NDc5ODEyODgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTQzRjBENDAxNTg0NEJFNzgxMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NTg1NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNjQ3OTgxMjg4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2OTk2RUY3MUY4RkQ2NzM1MDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTU4NTc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkMyTFpLb0dSVFZhVXk1emxFUEZwYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGVlMzNmODMtMzQxMi00OTc2LWJjYWEtNDlkNmZlZjJlMTI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDE5NCxcbiAgICAgIDIxLFxuICAgICAgMzQsXG4gICAgICA1NSxcbiAgICAgIDIyNSxcbiAgICAgIDE2OCxcbiAgICAgIDEzNSxcbiAgICAgIDEyNSxcbiAgICAgIDI1NCxcbiAgICAgIDM3LFxuICAgICAgMTk5LFxuICAgICAgNjEsXG4gICAgICA3MyxcbiAgICAgIDIzNixcbiAgICAgIDY1LFxuICAgICAgMjA4LFxuICAgICAgMjI0LFxuICAgICAgMTU5LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxNjMsXG4gICAgICAyMTQsXG4gICAgICA1NSxcbiAgICAgIDIwNCxcbiAgICAgIDE3MCxcbiAgICAgIDcwLFxuICAgICAgMjA2LFxuICAgICAgMTQwLFxuICAgICAgMTUwLFxuICAgICAgMTU4LFxuICAgICAgMTUxLFxuICAgICAgMTgzLFxuICAgICAgMjEzLFxuICAgICAgMjU1LFxuICAgICAgMTEzLFxuICAgICAgMzAsXG4gICAgICA5MyxcbiAgICAgIDE5NixcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRzdKM1E1M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTY0Nzk4MTI4ODI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjk5NDM1OTI3NTEzNTA6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKYXNvbiAtIFN0YXRzRG9lc250U3Vja1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppVjFxMEJFT3ZRc0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSlVodTVGcG5MRU5obEdQaUZ6MjJBYytnQUJoMVJXZlJYRkhZWGozWmpUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNRnlmbjQza01YV1BIMFJ1K1RoWXdGcitYOTJpdlYyaFI2STNSYUdFSlFqUnpFQ0hoMldiUG53aFA5c2VnbG1EVUtDVUY1MGU5ZjZkREdVV0FOZFJoUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5UlN2Q0JscTh3dnpoYU8yVUV1VmxkaitOUzhuM1R2OHZlUkhBalN6YmlqaWp6Zmp5NlhFMk5xbUgyZ2RxQVZhU2pBRDBQRk44VlZGSmo2Yk9PTzdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNjQ3OTgxMjg4Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTU4NTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkxlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTGUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRcXM0ditvN2h1OGlhaVQ5c2JyZ2pjcnhwbjVJcWZRVFR1RTY1QVVFWHhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2NDIxOTAzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTU4NTc0NzAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
