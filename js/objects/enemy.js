/**
* Enemies class definition
*/
Q.Sprite.extend( "EnemySoldier", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "enemy.jpeg",
			vx: 100
		});
		
		this.add( "2d, aiBounce" );
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});

// Q.Sprite.extend( "Bullet", {
	// init: function( parameters ) {
		// this._super( parameters, {
			// asset: "bullet.jpeg",
		// });
		
		// this.add( "2d animation" );
	// },
	
	// step: function( dt ) {
		// this.stage.collide( this );
	// }
// });
