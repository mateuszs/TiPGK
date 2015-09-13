/**
* Player class definition
*/
Q.Sprite.extend( "Player", {
	init: function( parameters ) {
		this._super( parameters, {
			healths: 5,
			sprite: "human",
			sheet: "playersheet",
			x: 200,
			jumpSpeed: Q.state.get("js") - Q.state.get("skilljs")
		});
		
		this.add( "2d, platformerControls, animation" );
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
			Q.stageScene('Map');	
		}
		
		if( Q.state.get( "healths" ) == 0 ) {
			Q.clearStages();
			Q.stageScene('Endgame');	
			Q.state.set( "healths", 5 );
			Q.state.set( "score", 0 );
			Q.state.set( "finished", 0 );
		} else {

		}
	},
	
	step: function( dt ) {
		this.stage.collide( this );
		if((this.p.vx) > 0 && (this.p.vy == 0)) {
			this.play("run_right");
		} else if((this.p.vx) < 0 && (this.p.vy == 0)) {
			this.play("run_left");
		} else if((this.p.vx) > 0 && (this.p.vy < 0)) {
			this.play("jump_right");
		} else if((this.p.vx) < 0 && (this.p.vy < 0)) {
			this.play("jump_left");
		} else if((this.p.vx) > 0 && (this.p.vy > 0)) {
			this.play("fall_right");
		} else if((this.p.vx) < 0 && (this.p.vy > 0)) {
			this.play("fall_left");
		} else {
			this.play("stand");
		}
	}
});