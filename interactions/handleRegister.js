const Tournament = require('../models/Tournament');

module.exports = async (interaction) => {
    const tournamentId = interaction.customId.split('_')[1];
    const tournament = await Tournament.findById(tournamentId);

    const name = interaction.fields.getTextInputValue('name');
    const gameId = interaction.fields.getTextInputValue('gameId');
    const contact = interaction.fields.getTextInputValue('contact');

    tournament.participants.push({ name, gameId, contact });
    await tournament.save();

    await interaction.reply({ content: `Registered successfully for ${tournament.name}.`, ephemeral: true });
};
