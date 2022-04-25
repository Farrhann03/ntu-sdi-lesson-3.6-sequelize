const Vehicle = require( '../models/Vehicle' );
const Driver = require( '../models/Driver' );

module.exports = {
	onboard: async ( vehicleId, driverId ) => {

		const result = {
			status: null,
			message: null,
			data: null,
		};

		const vehicle = await Vehicle.findByPk( vehicleId );
		const driver = await Driver.findByPk( driverId );

		if ( ! vehicle ) {
			result.status = 404;
			result.message = `Couldn't find the vehicle with id ${vehicleId}`;
			return result;
		}

		if ( vehicle.driverId ) {
			result.status = 400;
			result.message = `Vehicle#${vehicleId} already has a driver.`;
			return result;
		}

		if ( ! driver ) {
			result.status = 404;
			result.message = `Couldn't find the driver with id ${driverId}`;
			return result;
		}

		vehicle.driverId = driver.id;
		await vehicle.save();

		result.status = 200;
		result.message = 'Onboard successful';
		result.data = vehicle;

		return result;
	}
};