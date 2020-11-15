module.exports = function(sequelize, DataTypes) {
    const Object = sequelize.define("Object", {
        //foreign key 
    RenterId: {
        type: DataTypes.INTEGER,
        references: {
            model: Renter, 
            key: 'id'
        }
        },
    name: {
        type: DataTypes.TEXT,
        allowNull: false}, 
    length: {
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    width:{
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    height:{
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    volume: {
        type: DataTypes.VIRTUAL,
        get() {return this.length * this.height * this.width;},
        set(value) {throw new Error('Do not try to set the volume value!');}
    }, 
    HostId: {
        type: DataTypes.INTEGER,
        references: {
            model: Host, 
            key: 'id'
        }
        },
});

return Object;
};