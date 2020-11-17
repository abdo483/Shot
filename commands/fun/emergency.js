const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    name: "emergency",
    category: "fun",
    description: "emergency meeting",
    usage: "Emergency <Text>",
    run: async (client, message, args) => {

        //Start

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        if (Text.length > 500) return message.channel.send(`Text Limit - 500`);

        let Link = `https://vacefron.nl/api/emergencymeeting?text=${Text}`;

        let Embed = new MessageEmbed()
        .setColor(Color)
        .setImage(Link)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};
