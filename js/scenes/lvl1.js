/**
* Level tmx scene
*/
Q.scene( "Lvl1", function( stage ) {
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1 
	}));

	Q.state.set( "score", 0 );

	Q.gravityY = 980;
	Q.state.set("js", -400);
	Q.stageTMX( "lvl1.tmx" , stage);
	
	var player = Q( "Player" ).first();
	
	stage.add( "viewport" ).follow( player, { x:true, y:true } );
	Q.stageScene( "Stats", 1 );
});