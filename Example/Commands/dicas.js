// Um pequeno exemplo de como criar os comandos, espero que você entenda.

/**
 * Primeiramente você deve criar o comando 
 * Depois crie a função do comando
 */

// Exemplo:

/**
 * Aqui um pequeno exemplo de um comando ping
 */

module.exports = {
    name: "ping", // Aqui você coloca o nome do comando
    description: "Responde com pong!", // Aqui você coloca a descrição do comando

    /**
     * Use "run" para adicionar a funcionalidade do comando (O que o comando irá fazer) 
     * Dentro de "run", você coloca todo o código do comando
     */

    // Exemplo:

    run: async (client, interaction) => {
        if (interaction.commandName === "ping") {
            await interaction.reply({ content: "pong!" }); // Irá enviar a mensagem(pong!)
        }
    }
}

/**
 * Um pequeno exemplo de um avatar command
 * Este comando retorna o avatar do usuário que foi mencionado
 */

module.exports = {
    name: "avatar",
    description: "Retorna o avatar do usuário mencionado",

    /**
     * Dentro do paramêtro "options", você coloca as opções do comando
     */

    options: [
        {
            name: "usuário", // Nome da opção
            description: "Mencione o usuário", // Descrição da opção
            type: "USER", // O tipo "USER" permite que você mencione um usuário no comando
            required: true // Use "true" se a opção for necessária, ou "false" se a opção for opcional
        }
    ],

    run: async (client, interaction) => {
        if (interaction.commandName === "avatar") {
            const user = interaction.options.getUser("usuário"); // Captura o avatar do usuário que foi mencionado no comando
            const userAvatar = user.displayAvatarURL({ format: "png", size: 1024 }); // Captura o avatar do usuário 

            await interaction.reply({ content: userAvatar }); // Envia o avatar do usuário
        }
    }
}

/**
 * Avatar command: https://media.discordapp.net/attachments/922453784175714325/926922332193312808/unknown.png
 * Ping command: https://media.discordapp.net/attachments/922453784175714325/926922619511525386/unknown.png
 */
