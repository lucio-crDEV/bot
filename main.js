import tmi from 'tmi.js';

const options = {
    identity : {
        username: "PIXIE",
        password: "ppcu7a2vuiyr3b82ycervufvwbo6g6"
    },
    channel: "cookie__soul"
}

const client = new tmi.Client(options)

client.connect().catch(console.error)

client.on('message', (channel, tags, message, self)=>{
    if(self) return

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hola')) {
        const response = `¡Hola, ${tags['display-name']}!`; 
        client.say(channel, response);
    }

    console.log(`${tags['display-name']}: ${message}`);

})