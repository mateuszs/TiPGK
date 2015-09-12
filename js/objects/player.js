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
		if( col.obj.isA( "EnemySoldier" ) || col.obj.isA( "Spike" )) {
			Q.state.dec( "healths", 1 );
			this.destroy();
			
			Q.clearStages();
			Q.stageScene('Level_1');			
		}
		
		if( Q.state.get( "healths" ) == 0 ) {
			Q.clearStages();
			Q.stageScene('Endgame');			
		} else {
		
		}
	},
	
	step: function( dt ) {
		this.stage.collide( this );
		
		// if( this.p.vx > 0 ) {
			// this.play( "run_right" );
		// } else if( this.p.vx < 0 ) {
			// this.play( "run_left" );
		// } 		
	}
});

// Q.animations('player', {
	// run_right: { frames: [7,6,5,4,3,2,1], rate: 1/15}, 
	// run_left: { frames: [19,18,17,16,15], rate: 1/15 }
// });