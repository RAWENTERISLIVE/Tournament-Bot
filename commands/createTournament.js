const Tournament = require('../models/Tournament');

module.exports = {
    name: 'create-tournament',
    description: 'Create a new tournament',
    options: [
        { name: 'name', type: 'STRING', description: 'Tournament Name', required: true },
        { name: 'game', type: 'STRING', description: 'Game Name', required: true },
        { name: 'prize_money', type: 'INTEGER', description: 'Prize Money', required: true },
        { name: 'max_participants', type: 'INTEGER', description: 'Maximum Participants', required: true },
    ],
    execute: async (interaction) => {
        const name = interaction.options.getString('name');
        const game = interaction.options.getString('game');
        const prizeMoney = interaction.options.getInteger('prize_money');
        const maxParticipants = interaction.options.getInteger('max_participants');

        const tournament = new Tournament({ name, game, prizeMoney, maxParticipants });
        await tournament.save();

        await interaction.reply(`Tournament **${name}** created successfully!`);
    },
};
