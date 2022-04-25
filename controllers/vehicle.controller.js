const vehicleService = require( '../services/vehicle.service' );

class VehicleController {
	async onboard( req, res ) {
		const {driverId, vehicleId} = req.body;

		if ( typeof driverId !== 'number' || typeof vehicleId !== 'number' ) {
			res.status( 400 );
			return res.send( 'driverId and vehicleId need to be integers.' );
		}

		const {status, data, message} = await vehicleService.onboard( vehicleId, driverId );

		res.status( status );

		res.json( {message, data} );
	}
}

module.exports = VehicleController;