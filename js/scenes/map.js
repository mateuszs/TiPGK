/**
* Level tmx scene
*/
Q.scene( "Map", function( stage ) {
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1 
	}));
	Q.gravityY = 450;
	Q.stageTMX( "map.tmx" , stage);
	stage.insert(new Q.OrbLvl1({
		x: 324,
		y: 160
	}));
	if (Q.state.get("finished") > 0) {
		stage.insert(new Q.OrbLvl2({
			x: 432,
			y: 160
		}));
	}
	
	var player = Q( "Player" ).first();
	
	stage.add( "viewport" ).follow( player, { x:true, y:true } );
	Q.stageScene( "Stats", 1 );
});