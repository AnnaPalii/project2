module.exports = function(sequelize, DataTypes) {
    const Object = sequelize.define("Object", {
        //foreign key 
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
});

Post.associate = function(models) {
    // We're saying that a Object should belong to an Author
    // A Object can't be created without an Author due to the foreign key constraint
    Object.belongsTo(models.Renters, {
    foreignKey: {
        allowNull: false
    }
    });
};
return Object;
};