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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_57_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBSHorTGFYMFFYYTcwUUloS0JvdGYzNExUV3FTSHRhRHA2ZlJQT2UzMFBzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCZnJEZE9pZFQwdXEwRTJVQXZUTEdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkZGJjNTVmLTk0NzUtNDI4OS1iNmY5LTM5MzI4ODlmMGEzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTY3LFxuICAgICAgNTgsXG4gICAgICAyMjksXG4gICAgICAxOTgsXG4gICAgICAxNzQsXG4gICAgICAxNTQsXG4gICAgICAxNTYsXG4gICAgICAyMjksXG4gICAgICAxNjYsXG4gICAgICAyNDksXG4gICAgICAxNjQsXG4gICAgICAxNDEsXG4gICAgICAxOTMsXG4gICAgICAxNDksXG4gICAgICA3MyxcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDYxLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDE3MCxcbiAgICAgIDEwMyxcbiAgICAgIDcxLFxuICAgICAgNjAsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDE0OSxcbiAgICAgIDE4LFxuICAgICAgMjUyLFxuICAgICAgMjcsXG4gICAgICAxOTksXG4gICAgICAxNTcsXG4gICAgICA4NCxcbiAgICAgIDI0NyxcbiAgICAgIDEwNyxcbiAgICAgIDE5OCxcbiAgICAgIDE4NSxcbiAgICAgIDIyMyxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWkJTRVc4TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rVXpPQUZFTldobkxrR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmFpM05RbFczTXd0ZS8zbkFEVTdFZzRDTVZzOU5tYW9mUmFFWEZMem1rQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSb3BRN0M5bTl2Y3VMQUV1QStSTUwvbmVNZlBPd3orVndXenZYbCtzVThuOThMUE5vSVVZM0NLN3RKRGFxYmNTZGdSelFNMCt2R2hDdFkzZzMzaGJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDNTFaZWljZzM5eEZKQ0gvaFR1aUpvYlRPUFlDR1JZckZ3aUgwRHZ2OUtLc3RvUEVGbUJNRlFzTENxd3pQMkxjMnM3dGFKclFUdEROTlFYaXg0Rlppdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjEzNDY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
