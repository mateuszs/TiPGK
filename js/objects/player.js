/**
* Player class definition
*/
Q.Sprite.extend( "Player", {
	init: function( parameters ) {
		this._super( parameters, {
			health: 100,
			asset: "player.png",
		});
		
		this.add( "2d, platformerControls" );
		
		this.on("hit.sprite",function(collision) {
		if(collision.obj.isA("Finish")) {
			this.destroy();
			Q.clearStages();
			Q.stageScene("Endgame");
		}
    });
	}
});