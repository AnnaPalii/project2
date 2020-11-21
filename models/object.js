const Renter = require("./renter.js");
const Host = require("./host.js");

module.exports = function(sequelize, DataTypes) {
    const Object = sequelize.define("Object", {
    name: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT}, 
    length: {
        type: DataTypes.INTEGER,
        isNumeric: true
        }, 
    width:{
        type: DataTypes.INTEGER,
        isNumeric: true
        }, 
    height:{
        type: DataTypes.INTEGER,
        isNumeric: true
        }, 
    volume: {
        type: DataTypes.VIRTUAL,
        get() {return this.length * this.height * this.width;},
        set(value) {throw new Error('Do not try to set the volume value!');}
    }
});
return Object;
};