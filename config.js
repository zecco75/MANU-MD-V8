/*════════════════════════════════════════════════════════════════════════════
                                                                            
   ⚡️ 𝗠𝗔𝗡𝗨-𝗠𝗗 𝐁𝐎𝐓 - 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 8.0 ⚡️                                     
                                                                            
     🤖 Multi-functional WhatsApp User Bot by Manul Official               
     🔗 GitHub   : https://github.com/manulofficial7                        
     ▶️ YouTube  : https://youtube.com/@ManulOfficialTech                   
     📱 WhatsApp : +94 74 227 4855                                            
                                                                            
   ╭────────────────────────────────────────────────────────────────────╮
//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░
╰────────────────────────────────────────────────────────────────────╯  
                                                                          
════════════════════════════════════════════════════════════════════════════
*/
/**
 * 🧠 Author        : Manul Official
 * 🌐 Project Name  : MANU-MD
 * 🛠 Base Script   : By Manul Official
 * 📝 Description   : MANU-MD is a powerful and customizable WhatsApp bot 
 *                    built for fun, automation, and productivity!
 * 🔒 License       : © 2025 MANU-MD v8.0 - All Rights Reserved
 */
 
 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Put_Your_Session_ID', // &Manu-MD&HY8ShCAZ#TRc0dDJpkIlGMMhmBHYiufqFYqGmAHtZEzKKxoqjl-E) 🤍
PORT: process.env.PORT || '3000'
};
