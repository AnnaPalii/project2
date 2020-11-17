module.exports = function(sequelize, DataTypes) {
   const Renter = sequelize.define("Renter", {
   name: {
      type: DataTypes.TEXT
   }, 
   email:{
      type: DataTypes.STRING(155),
      isEmail: true,
      unique: true} 
   });

Renter.associate = function (models) {
   // We're saying that a Host should belong to many
   // A Object can't be created without an Author due to the foreign key constraint
   Renter.belongsToMany( models.Host, { through: 'Object' });
};
return Renter;
};


