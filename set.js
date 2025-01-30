const fs = require('fs-extra');
const path = require("path");
const { Sequelize } = require('sequelize');

// Load environment variables if the .env file exists
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtsS0k3TzBoSXhwNHZJSk05R3NiQjFDWWJFcHcyWmVHZGh2M0FYM3psaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWxjWUNsYzdYZDVMSGN1Q3UrOUxQbDZuM1l6S0xDQnJjQVIrM0RFYytFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS2lGRmlvVEFhcHFUTWtZbElLVXRXM2pER2RoMDU3TVZSbWozQlRUK1g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VytnRW41M0FhMEZqbjNCS1Rrb0E0V3JMQTBYK20rZTVWeTYwbiszWkg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGSW8wc1BMRWx6SElFa2FVdEtxNkxrY0V6SzdpM29kQ3dWaDZYMkRVRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1dDJGY2NxSTlHdjBCN1lCQmZNcS9hak5TRkdtSXZxbzcxRXVpN1k4VGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVAyNDBKSVNzclFWbmhyQ0p1dmlFTGdjWWZvTzNEU09obGdDOCtjZ20wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTE2ekJETmQ1eU9wdWM1OGtLUzFUa2NLNWNNU2J2ZE9sQ3dXTzhKSWNnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlnNkZhWS9JRHBqMGxLeTN2Q25oZWc5bDRweUNlWUc4RzRnNXpTT2pNN3hCa3dsSmszR0xmSm0vZWJFSjk3YkxETEVIdHE4NHMxMU9qd0lhRmFHRUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiIwZlJQam5sMzNyMCtGSXdLYVhsSlFJc05aeHlNdUllcFdzVDA5WXFPUncwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTLVJZRlR0dVQ1V294Y1FnYnJ2S0NRIiwicGhvbmVJZCI6IjM2NTAwZDkyLWMwMTQtNGYxOS04NmE4LWMwMzJjNjc4ODIxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmJPbWJJTHZlWndTYnZ1cWZpM0UrQ1Y2aHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2FuZmx2aGFyM3RXY003dWdoOHZHTnZJRHVNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFWRFZRVEI2IiwibWUiOnsiaWQiOiIyNTQ3NDIwMDAxMjQ6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1BWOHQwREVMZis1N3dHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT2lBZWxoSXFEYy9VZElmZWR0bjBVM21YTU9vRTdVd3lrQmcvdlByTDlSOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNDhycDZYb1l5aFp1NmVGWmErZWhQMTBjREl3YjZ6Q1dNYUxhZVhTak9GV08vRWpOMTd5dUVZeGxuMWY0YkR5K3FVRXFIbldhTUVCUnUzQzFQN1hIRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InZQeVV6cFo3SW5MemEwclljdUYrbFhlQ1pBM0RaWkkzZVhpeVJvUWhDMXNFTDR1TGNaRVUxc2t5dWU3eWkwQm5yZHdwR1hFTHU2QTJwZ2xwa29qdkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQyMDAwMTI0OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG9nSHBZU0tnM1AxSFNIM25iWjlGTjVsekRxQk8xTU1wQVlQN3o2eS9VZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODE0NTYwNX0=
    PREFIXES: (process.env.PREFIX || '').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254742000124",
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
    AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
    CHATBOT: process.env.CHAT_BOT || "off",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    A_REACT: process.env.AUTO_REACTION || 'on',
    L_S: process.env.STATUS_LIKE || 'on',
    AUTO_BLOCK: process.env.BLOCK_ALL || 'off',
    URL: process.env.MENU_LINKS || 'https://files.catbox.moe/c2jdkw.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'on',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || '',
    ADM: process.env.ANTI_DELETE || 'on',
    TZ: process.env.TIME_ZONE || 'Africa/Nairobi',
    DP: process.env.STARTING_MESSAGE || "on",
    ANTICALL: process.env.ANTICALL || 'on',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd"
        : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    W_M: null, // Add this line
};

// Watch for changes in this file and reload it automatically
const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updated ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
