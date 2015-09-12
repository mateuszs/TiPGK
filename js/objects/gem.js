/**
* Gem class definition
*/
Q.Sprite.extend( "Gem", {
	init: function( parameters ) {
		this._super( parameters, {
			asset: "gem.png",
			gravity: 0,
		});
    
		this.add( "2d" );
		
		this.on("bump.left,bump.right,bump.bottom,bump.top", function(collision) {
			if(collision.obj.isA("Player")) {
				this.destroy();
				Q.state.inc("score", 50);
			}
		});
	}
});