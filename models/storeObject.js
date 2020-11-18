const Renter = require("./renter.js");
const Host = require("./host.js");

module.exports = function(sequelize, DataTypes) {
    const StoreObject = sequelize.define("StoreObject", {
        //foreign key 
    // RenterId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Renter, 
    //         key: 'id'
    //     }
    //     },
   
    RenterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Renters",
        key: 'id',
        allowNull: false
      }
    },
   
    HostId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Hosts",
        key: 'id',
        allowNull: true
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
    }

});
return StoreObject;
};