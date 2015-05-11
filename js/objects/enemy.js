/**
* Enemy class definition
*/
Q.Sprite.extend( "Spike", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "spike.png"
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