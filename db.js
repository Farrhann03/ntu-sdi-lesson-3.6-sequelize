const {Sequelize} = require( 'sequelize' );

const sequelize = new Sequelize(
	 'ntu_sdi_c4',
	  'shramee', // Username
	  '', // Password
	   {
		host: 'localhost',
		dialect: 'postgres',
	}
 );

const testConn = async () => {
	try {
		await sequelize.authenticate();
		return true;
	}
	catch ( err ) {
		console.log( `Couldn't connect to the database`, err );
		return false;
	}
};

module.exports = {
	testConn,
	sequelize
};