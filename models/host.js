module.exports = function(sequelize, DataTypes) {
	const Host = sequelize.define("Host", {
		name: {
			type: DataTypes.TEXT,
		},
		email: {
			type: DataTypes.STRING(155),
			isEmail: true,
			unique: true,
		},
		spaceType: {
			type: DataTypes.TEXT,
		},
		zipCode: {
			type: DataTypes.INTEGER,
			isNumeric: true,
			allowNull: false,
		},
		length: {
			type: DataTypes.INTEGER,
			isNumeric: true,
			allowNull: false,
		},
		width: {
			type: DataTypes.INTEGER,
			isNumeric: true,
			allowNull: false,
		},
		height: {
			type: DataTypes.INTEGER,
			isNumeric: true,
			allowNull: false,
		},
		volume: {
			type: DataTypes.VIRTUAL,
			get() {
				return this.length * this.height * this.width;
			},
			set(value) {
				throw new Error("Do not try to set the volume value!");
			},
		},
	});

	Host.associate = function(models) {
		// We're saying that a Host should belong to many
		// A Object can't be created without an Author due to the foreign key constraint

	};
	return Host;
};
