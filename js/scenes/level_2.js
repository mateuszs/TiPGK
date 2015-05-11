/**
* Level 1 scene
*/
Q.scene( "Level_2", function( stage ) {
	stage.insert( new Q.Repeater({ 
		asset: "level_1_background.jpg",
	    speedX: 0.5,     
	    speedY: 0.5,      
	    scale: 1 
	}));
	
	var player = new Q.Player({
		x: 50,
		y: 130,
	});
	
	var spike = new Q.Spike({
		x: 100,
		y: 130,
	});
	
	stage.insert( player );
	
	stage.insert( spike );
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_2.json",
        sheet:     "tiles_castle",
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = -200;
    stage.viewport.scale = 1.0;
});