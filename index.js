/**
 * DiscordJS - v13
 * Handler de Slash Commands
 */

require("dotenv").config();

const Discord = require("discord.js");
const { join } = require("path");
const { readdirSync } = require("fs");

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS
    ]
});

const dirName = `./${process.env.FOLDER_NAME}`;
const commandFolder = readdirSync(join(dirName));

client.on("ready", () => {
    console.log(`${client.user.tag} iniciado em ${client.guilds.cache.size} servidores!`);

    client.user.setActivity({ name: "kevin;#4505", type: "WATCHING" });

    const guild = client.guilds.cache.get(process.env.GUILD_ID);

    let commands;

    if (guild) {
        commands = guild.commands;
    
    } else {
        commands = client.application.commands;
    }

    for (const folder of commandFolder) {
        const commandFile = readdirSync(`${dirName}/${folder}`).filter(file => file.endsWith(".js"));
    
        for (const file of commandFile) {
            const command = require(`${dirName}/${folder}/${file}`);
            
                commands.create({
                    name: command.name,
                    description: command.description,
                    options: command.options 
                });

                client.on("interactionCreate", async (interaction) => {
                    if (!interaction.isCommand()) return;

                    command.run(client, interaction);
                });
        }
    }
});

client.login(process.env.TOKEN);
