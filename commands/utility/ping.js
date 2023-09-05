const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Get the ping of the bot!'),
    async execute(interaction) {
        const sent = await interaction.reply({
            content: 'Pinging...',
            fetchReply: true,
            ephemeral: true,
        });
        const ping = sent.createdTimestamp - interaction.createdTimestamp;
        interaction.editReply({
            content: `Roundtrip latency: ${ping}ms`,
            ephemeral: true,
        });
        console.log(`Ping: ${ping}ms`);
    },
};