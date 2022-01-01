# Handler SlashCommands

Uma handler para você organizar seus comandos de barra.

# Versão do discord.js
 
* Versão 13 - v13

# Instalação das Dependências
 
1. Você precisa ter o NodeJS instalado (https://nodejs.org/)
2. Abra a pasta do projeto no terminal 
3. Dentro da pasta, instale com: `npm install discord.js dotenv`

# Configuração

1. Abra o arquivo .env
2. Insira o token do bot que será iniciado (Obs: Não mude o nome das váriaveis no arquivo)
3. Informe o ID do servidor em que os comandos serão executados
4. Informe o nome da pasta em que os comandos serão armazenados

* .env

```env
TOKEN = <TOKEN DO BOT>
GUILD_ID = <ID_DO_SERVIDOR>
FOLDER_NAME = <NOME_DA_PASTA>
```

* Obs: Insira as informações sem "<>"

# Pasta de comandos

Após as configurações, você pode criar as pastas para os seus comandos. 

1. Crie uma pasta com o mesmo nome que você colocou no arquivo ENV (FOLDER_NAME)
2. Dentro desta pasta, crie outras pastas com o nome de categorias (ex: `Utilidades, Moderação, Economia`)
3. Após isso, apenas crie os comandos para cada categoria

# Como criar os comandos

* Exemplo de um comando ping

```js
module.exports = {
    name: "ping",
    description: "Responde com pong!",

    run: async (client, interaction) => {
        if (interaction.commandName === "ping") {
            await interaction.reply({ content: "pong!" });
        } 
    }
}
```

Caso queira mais exemplos, dê uma olhada na pasta "Examples".
