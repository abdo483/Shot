const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Random = require("srod-v2");

module.exports = {
    name: "clyde",
    category: "image",
    description: "Generate A Fake Clyde Image!",
    usage: "Clyde <Text>",
    run: async (client, message, args) => {

        //Start

        if (!args[0]) return message.channel.send(`**write any thing example s!clyde Lol**`);

        let Data = await Random.Clyde(args.join(" "), Color);

        return message.channel.send(Data);

        //End

    }
};
