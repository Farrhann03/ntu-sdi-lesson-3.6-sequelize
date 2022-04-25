const express = require( 'express' );


const router = express.Router();

router.get( '/protected', (req, res) => {
	res.send( 'You called a protected route.' );
} );


module.exports = router;