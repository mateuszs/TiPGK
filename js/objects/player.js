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
		if( Q.state.get( "healths" ) == 0 ) {
			Q.clearStages();
			Q.stageScene('Endgame');	
		} 
		
		if( col.obj.isA( "EnemySoldier" ) || col.obj.isA( "Spike" )) {
			Q.state.dec( "healths", 1 );
			this.destroy();
			
			Q.clearStages();
			Q.stageScene('Lvl1');	
		} 
		
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});