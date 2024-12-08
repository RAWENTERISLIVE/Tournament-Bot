const Tournament = require('../models/Tournament');

module.exports = {
    name: 'list-tournaments',
    description: 'List all tournaments',
    execute: async (interaction) => {
        const tournaments = await Tournament.find();
        if (tournaments.length === 0) {
            return interaction.reply('No tournaments are currently available.');
        }

        const response = tournaments.map((t) => {
            return `**${t.name}**\nGame: ${t.game}\nPrize Money: ₹${t.prizeMoney}`;
        }).join('\n\n');

        await interaction.reply(response);
    },
};
