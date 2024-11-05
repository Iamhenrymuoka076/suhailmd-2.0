const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="henrymuoka03@gmail.com"
global.location="Lagos Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© HENRYTECHINFO" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348149953788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_48_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyYWNDdER3WjhPM3RCVnNZeEg4TTVzd0hEUjkvZlN5MGJoOEhYQngrbFcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5NXE3RU1WeVFHaUNnazBZZ0V5R3VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjZWRjNmJhLWI0YWYtNDk3ZC1iOGFlLTI2ODJjZTFiNjE5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyMjEsXG4gICAgICAxOTUsXG4gICAgICAyMjcsXG4gICAgICAyMjUsXG4gICAgICAyMDEsXG4gICAgICAxODQsXG4gICAgICAxMjcsXG4gICAgICAxMjYsXG4gICAgICAxNDksXG4gICAgICAyMjIsXG4gICAgICAxOTgsXG4gICAgICAyNDgsXG4gICAgICA2OCxcbiAgICAgIDE4OCxcbiAgICAgIDE5MCxcbiAgICAgIDIwMyxcbiAgICAgIDEwNixcbiAgICAgIDE3NixcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDE0MyxcbiAgICAgIDU2LFxuICAgICAgMyxcbiAgICAgIDExNCxcbiAgICAgIDY1LFxuICAgICAgMTU5LFxuICAgICAgMTgwLFxuICAgICAgNDQsXG4gICAgICA3OCxcbiAgICAgIDE5MyxcbiAgICAgIDIyOCxcbiAgICAgIDEzNixcbiAgICAgIDI1NCxcbiAgICAgIDExMCxcbiAgICAgIDM4LFxuICAgICAgMTY1LFxuICAgICAgMjU1LFxuICAgICAgMTQwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjRWRVM2QlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk5NTM3ODg6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzU5NzY2MzY5NTA3NTo5NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK1V6T0FGRU9UUXFia0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlphaTNOUWxXM013dGUvM25BRFU3RWc0Q01WczlObWFvZlJhRVhGTHpta0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOU1EY3B2QXpuRC8rOE1KS29xQVpXQ05nKzdrYTc3TXpjbEoyUGlmREVRbDZoVDBJcitLbW1BTktRcnBRSjRTUUdJdWZFaVd6dzh5ZmRob2tkeXlQREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWm82MUtiZE1yNXIwZlI5aElqblZLMThSRm01amF6MWxEaGFKSFNTdDdKZXdCUVh0bFpzcWcyREJweXd4Uzg0YUdtaEdyb0JXVUNobE5DL0dYUEFLQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTk1Mzc4ODo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDgzMjUyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Henry-XMD",
  ownername:process.env.OWNER_NAME|| "Henry-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
