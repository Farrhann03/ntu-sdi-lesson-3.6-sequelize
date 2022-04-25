const express = require( 'express' );
const VehicleController = require( '../controllers/vehicle.controller' );

const vehicleController = new VehicleController();

const router = express.Router();

router.get( '/protected', (req, res) => {
	res.send( 'You called a protected route.' );
} );

router.post( '/protected/onboard', vehicleController.onboard );

module.exports = router;