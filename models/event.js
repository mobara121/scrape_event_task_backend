module.exports = function(sequelize, DataTypes){
    const event = sequelize.define('event', {
        event_name: DataTypes.STRING,
        link: DataTypes.STRING,
        date: DataTypes.STRING,
        location: DataTypes.STRING,
        tel: DataTypes.STRING,
    });
    
    return event;
}