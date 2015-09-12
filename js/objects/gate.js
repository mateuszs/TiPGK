/**
* Gate - end level,  class definition
*/
Q.Sprite.extend( "Gate", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "gate.png",
			x: 300
		});
		
		this.add( "2d, platformerControls" );
		this.on( "hit", this, "collision" );
	},

	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {
						
		}
		
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});