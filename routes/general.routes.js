const express = require( 'express' );
const router = express.Router();

router.get( '/general', (req, res) => {
	res.send( 'You called a general route.' );
} );

module.exports = router;