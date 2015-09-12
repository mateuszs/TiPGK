/**
* Portal class definition
*/
Q.Sprite.extend( "Portal", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "portal.png",
		});

		this.on( "hit", this, "collision" );		
		
	},
	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {	
			Q.clearStages();
			Q.stageScene('Lvl1');
		}
	}
});