/**
* Player class definition
*/
Q.Sprite.extend( "Enemy", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "enemy.jpeg",
		});
		
		this.add( "2d" );
	},
	
	step: function(dt) {
		this.stage.collide( this );
	}
});