/**
* Level tmx scene
*/
Q.scene( "Level_tmx", function( stage ) {

	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1 
	}));
	
	Q.state.set("score", 0);
	
	Q.stageTMX("level_tmx.tmx", stage);
	
	var player = Q("Player").first();
	
	stage.add( "viewport" ).follow( player, { x:true, y:true } );
	stage.viewport.offsetX = -300;
	stage.viewport.offsetX = -300;
});