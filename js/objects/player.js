/**
* Player class definition
*/
Q.Sprite.extend( "Player", {
	init: function( parameters ) {
		this._super( parameters, {
			health: 100,
			asset: "player.png",
		});
		
		this.add( "2d, platformerControls" );
		this.on( "hit", this, "collision" );
	},
	
	collision: function( col ) {
		console.log( col.obj );
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});