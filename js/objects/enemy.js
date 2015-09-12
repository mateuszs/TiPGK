/**
* Enemies class definition
*/
Q.Sprite.extend( "EnemySoldier", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "enemy.jpeg",
			vx: 100
		});
		
		this.add( "2d, aiBounce" );
	},
	
	step: function( dt ) {
		this.stage.collide( this );
	}
});

Q.Sprite.extend( "Spike", {
	init: function( parameters ) {
		this._super( parameters, {
			sheet: "tiles_castle",
			frame: 226
		});
    
		this.add( "2d" );
		
		this.on("bump.left,bump.right,bump.bottom,bump.top",function(collision) {
			if(collision.obj.isA("Player")) {
				Q.clearStages();
				Q.stageScene("Menu");
			}
		});
	}
});


