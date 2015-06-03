/**
* Player class definition
*/
Q.Sprite.extend( "Player", {
	init: function( parameters ) {
		this._super( parameters, {
			health: 100,
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
		
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});