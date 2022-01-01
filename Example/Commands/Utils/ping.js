// Exemplo de um comando ping

module.exports = {
    name: "ping",
    description: "Responde com pong!",

    run: async (client, interaction) => {
        if (interaction.commandName === "ping") {
            await interaction.reply({ content: "pong!" });
        }
    }
}