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


global.devs = "923172290399" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923172290399";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923172290399";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/fa46215b051c183a7b7c0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_16_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgNSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0SU56ZER6KzQ2QkIxd0FyVEhlbFU5NE5vdVdFUG9PYjFmdkRLdDl1MlA0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWbnZnZUV6dFJTcTNacHozMEN5TGlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyYzE5NWM2LWUzZDAtNDA3YS1hZmI0LTA5YTMwZWM5ZDg3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxMjAsXG4gICAgICA3NSxcbiAgICAgIDE5NCxcbiAgICAgIDE1OCxcbiAgICAgIDU1LFxuICAgICAgMTU0LFxuICAgICAgNDYsXG4gICAgICAyMzcsXG4gICAgICA4MixcbiAgICAgIDE2OSxcbiAgICAgIDQ3LFxuICAgICAgMjExLFxuICAgICAgNzEsXG4gICAgICAxMCxcbiAgICAgIDIwMCxcbiAgICAgIDI1NSxcbiAgICAgIDkwLFxuICAgICAgMjA0LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDEzMyxcbiAgICAgIDIyOSxcbiAgICAgIDEzMixcbiAgICAgIDIxLFxuICAgICAgODQsXG4gICAgICAwLFxuICAgICAgNDEsXG4gICAgICAxNTcsXG4gICAgICA2OSxcbiAgICAgIDU3LFxuICAgICAgODIsXG4gICAgICA1NixcbiAgICAgIDE1NCxcbiAgICAgIDE1MyxcbiAgICAgIDE0MCxcbiAgICAgIDIzMCxcbiAgICAgIDEzMCxcbiAgICAgIDE2MSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRHRkxBRExFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzIyOTAzOTk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4ap8JOPsuC9suC+gMWCxYLwnZCu4Y2d1p/Noc2hzZzIpcmRzaLwnZaOxpLJkc2i8JOGqlxcblxcblxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcblxcbuKTtVxcblxcblxcblxcbvCThqnin7XQus2h8J2Wjsmz772H4p+28JOGqlwiLFxuICAgIFwibGlkXCI6IFwiMTkyNzkzMDEyMTEzNjU3OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpNHQvVURFSkxOa2JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVBRNmk2Qk4zU29jK01PWCtpMGFhbm9mYUoxd1h0Z3c4eDY4c2pzNmwxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyL3VBT056Z3RGRDk3R25udTVaMG5CSldGNURYYytVLzlsejJDa3FLd1Q0clhOSGkxbXFkTlg4anc4NW11WVhmSy9KRDdNaDdqMm04L0duUGU2aU9DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPQU4wa0c5R1NzUG5jN2ZjNk5pSjJtWGlENFNXTTRoTkN3dmQ1M1dEYkZ1YXNIYjlMallpUWRGaGpXMUlPRmJXU3MydFFuN2pDMnM1ZmMwcnRSUVRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzIyOTAzOTk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA1MDE5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓄂𓆰卄𝙪z𝙖͢͠ɪғʌꦿ
⟵кɪɴɢ⓵⟶𓆪",
  ownername:process.env.OWNER_NAME|| "𓆩𓏲ིྀłł𝐮፝֟͜͡͡ȥɑ͢𝖎ƒɑ͢𓆪 𓆩⟵к͡𝖎ɳｇ⟶𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
