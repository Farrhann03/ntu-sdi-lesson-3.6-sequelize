const {sequelize} = require( '../db' );
const {Model, DataTypes} = require( 'sequelize' );

class Driver extends Model {}

Driver.init(
	// Column config
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		fullName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'full_name',
		},

		carLicenseNo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'car_license_no',
		},

		createdAt: {
			type: DataTypes.DATE,
			field: "created_at",
		},

		updatedAt: {
			type: DataTypes.DATE,
			field: "updated_at",
		},
	},
	// Model config
	{
		sequelize,
		modelName: 'Driver',
		tableName: 'drivers',
	}
);

module.exports = Driver;