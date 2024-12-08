const { Client, Intents } = require('discord.js');
const connectDB = require('./db');
const { setupWebhookServer } = require('./webhooks');
const { registerCommands } = require('./commands');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', async () => {
    console.log(`${client.user.tag} is online`);
    connectDB();
    setupWebhookServer();
});

client.login(process.env.DISCORD_TOKEN);
registerCommands(client.user.id);
