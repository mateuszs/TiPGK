/**
* Enemies class definition
*/
Q.Sprite.extend( "EnemySoldier", {
	init: function( parameters ) {
		this._super( parameters, {
			sprite: "human",
			sheet: "enemysheet",
			vx: 100
		});
		
		this.add( "2d, aiBounce, animation" );
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

Q.Sprite.extend( "Spike", {
	init: function( parameters ) {
		this._super( parameters, {
			sheet: "tiles_castle",
			frame: 226
		});
    
		this.add( "2d" );

	}
});


