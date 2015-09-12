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
			
			Q.clearStages();
			Q.stageScene('Level_1');			
		}
		
		if( Q.state.get( "healths" ) == 0 ) {
			
		} else {
			
		}		
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});