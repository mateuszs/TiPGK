/**
* Level tmx scene
*/
Q.scene( "Lvl2", function( stage ) {
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1 
	}));
	
	Q.state.set( "score", 0 );
	
	Q.gravityY = 300;
	Q.state.set("js", -250);
	Q.stageTMX( "lvl2.tmx" , stage);
	
	var player = Q( "Player" ).first();
	
	stage.add( "viewport" ).follow( player, { x:true, y:true } );
	Q.stageScene( "Stats", 1 );
});