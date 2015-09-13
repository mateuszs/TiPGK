/**
* Portal class definition
*/
Q.Sprite.extend( "PortalLvl1", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "portal.png",
		});

		this.on( "hit", this, "collision" );		
		
	},
	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {	
			Q.state.set( "finished", 1 );
			Q.clearStages();
			Q.stageScene('Map');
		}
	}
});

Q.Sprite.extend( "PortalLvl2", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "portal.png",
		});

		this.on( "hit", this, "collision" );		
		
	},
	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {	
			Q.state.set( "finished", 2 );
			Q.clearStages();
			Q.stageScene('Map');
		}
	}
});

Q.Sprite.extend( "OrbLvl1", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "orb.png",
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

Q.Sprite.extend( "OrbLvl2", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "orb.png",
		});

		this.on( "hit", this, "collision" );		
		
	},
	
	collision: function( col ) {
		if( col.obj.isA( "Player" )) {	
			Q.clearStages();
			Q.stageScene('Lvl2');
		}
	}
});