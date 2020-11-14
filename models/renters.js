module.exports = function(sequelize, DataTypes) {
   const Renter = sequelize.define("Renter", {
   name: {
      type: DataTypes.TEXT,
      allowNull: false}, 
   email:{
      type: DataTypes.TEXT,
      allowNull: false,
      isEmail: true,
      unique: true} 
   });

Renter.associate = function (models) {
   Renter.hasMany (model.Objects , {
      onDelete:"cascade"
   });
};

return Renter;
};
