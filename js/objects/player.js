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
	}
});