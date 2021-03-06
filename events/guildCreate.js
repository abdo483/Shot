const mongoose = require('mongoose');
const Guild = require('../models/guild');

module.exports = async (client, guild) => {
     guild = new Guild({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name,
        sharedRoleID: 'Role not set',
        ownableRoleID: 'Role not set',
        ownedRoleID: 'Role not set',
        petOwnersRoleID: 'Role not set'
    });

    guild.save()
    .then(result => console.log(result))
    .catch(err => console.error(err));

    console.log('I have joined a new server!');
};