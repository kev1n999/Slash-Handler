// Exemplo de um avatar command

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Retorna o avatar do usuário mencionado",
    options: [
        {
            name: "usuário",
            description: "Mencione o usuário para ver o avatar",
            type: "USER",
            required: true
        }
    ],

    run: async (client, interaction) => {
        const { commandName, options } = interaction;

        if (commandName === "avatar") {
            const user = options.getUser("usuário");
            const userAvatar = user.displayAvatarURL({ format: "png", size: 1024 });

            const avatarEmbed = new MessageEmbed()

            .setTitle(`:frame_photo: Avatar de ${user.username}`)
            .setDescription(`Clique [aqui](${userAvatar}) para baixar a imagem!`)
            .setImage(userAvatar)
            .setColor("RED")

            await interaction.reply({ embeds: [avatarEmbed] });
        }
    }
}
