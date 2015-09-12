/**
* Portal class definition
*/
Q.Sprite.extend( "Portal", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "portal.png",
		});
		
		this.add( "2d, platformerControls" );
		this.on( "hit", this, "collision" );		
		
	},
	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {	
			Q.clearStages();
			Q.stageScene('Lvl1');
		}
	}
});