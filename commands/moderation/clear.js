const Discord = require = ('discord.js')

module.exports = {
    name: "clear",
    category: 'info',
    description: 'Clear messages in custom channel by amount.',
    usage: `clear <amout by numbers>`,
    run: async (client, message, args) => {
        let deleteAmount;
        
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('**Please put a number only**') }
        
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('**You do not have permission to use this command**').then(m => m.delete({timeout: 10000}));
        };
    
        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }
        
        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully Deleted** ***${deleteAmount}*** **Messages.**`)
        }
    }
