/**
* Player class definition
*/
Q.Sprite.extend( "Player", {
	init: function( parameters ) {
		this._super( parameters, {
			healths: 5,
			asset: "player.png",
			x: 200
		});
		
		this.add( "2d, platformerControls" );
		this.on( "hit", this, "collision" );
		
		Q.input.on( "skills", this, "openSkills" );
	},
	
	openSkills: function() {
		Q.stage().pause();
		Q.stageScene( "Skills", 1 );			
	},
	
	collision: function( col ) {
		if( col.obj.isA( "EnemySoldier" )) {
			Q.state.dec( "healths", 1 );
			this.destroy();
		}
		
		if( Q.state.get( "healths" ) == 0 ) {
			
		} else {
		
		};
		
/*		if( col.obj.isA( "Portal" )) {
			this.destroy();
			Q.clearStages();
			Q.stageScene("Endgame");
		}*/
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});