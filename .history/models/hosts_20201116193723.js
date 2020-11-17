const { SELECT } = require("sequelize/types/lib/query-types");
const { INTEGER } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Host = sequelize.define("Host", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false}, 
    email:{
        type: DataTypes.TEXT,
        allowNull: false,
        isEmail: true,
        unique: true}, 
    spaceType: {
        type: DataTypes.TEXT}, 
    zipCode: {
        type: DataTypes.INTEGER,
        isNumeric: true,
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

return Host;
};