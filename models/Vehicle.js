const {sequelize} = require( '../db' );
const {Model, DataTypes} = require( 'sequelize' );
const Driver = require( './Driver' );

class Vehicle extends Model {}

Vehicle.init(
	// Column config
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		carPlateNo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "car_plate_no",
		},

		driverId: {
			type: DataTypes.INTEGER,
			field:"driver_id"
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
		modelName: 'Vehicle',
		tableName: 'vehicles',
	}
);

Vehicle.belongsTo( Driver, {
	foreignKey: 'driverId',
} )

module.exports = Vehicle;