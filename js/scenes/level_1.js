/**
* Level 1 scene
*/
Q.scene( "Level_1", function( stage ) {
	Q.state.set("score", 0);
	
	stage.insert( new Q.Repeater({ 
		asset: "level_1_background.jpg",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1 
	}));
	
	var player = new Q.Player({
		x: 50,
		y: 176,
	});
	
	stage.insert( player );
	
	stage.insert(new Q.Gem({ x: 304, y: 128 }));
	stage.insert(new Q.Gem({ x: 368, y: 128 }));
	stage.insert(new Q.Gem({ x: 432, y: 128 }));
	stage.insert(new Q.Gem({ x: 496, y: 128 }));
	
	stage.insert(new Q.Spike({ x: 48, y: 304 }));
	stage.insert(new Q.Spike({ x: 544, y: 368 }));
	
	stage.insert(new Q.Finish({ x: 900, y: 368}));
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_1.json",
        sheet:     "tiles" 
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = -200;
    stage.viewport.scale = 1.0;
});