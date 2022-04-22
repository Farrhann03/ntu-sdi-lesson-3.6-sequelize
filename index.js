const {testConn} = require( './db' );
const Vehicle = require( './models/Vehicle' );
const Driver = require( './models/Driver' );
const { sequelize } = require('./models/Driver');

async function initiate() {
	// Fail first
	if ( ! await testConn() ) {
		return;
	}

	// await Vehicle.sync( {alter: true} );
	// await Driver.sync( {alter: true} );

	await Vehicles.update( {driverId: 1}, { where: {id: 5} } );

	// Work with Vehicle model over here!
	const result = await Vehicle.findAll( {where: {id:5}, include: Driver} );

	console.log( JSON.parse( JSON.stringify( result ) ) );

}

initiate();