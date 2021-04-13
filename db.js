const { decodeBase64 } = require('bcryptjs');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('event', 'postgres', 'RomeoOhRomeo', {
    host: 'localhost',
    dialect:'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('Connected to event postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;