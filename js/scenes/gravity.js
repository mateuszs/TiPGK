/**
* Level 1 scene
*/
Q.scene( "gdef", function( stage ) {
	Q.state.set("score", 0);
	
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,
	    speedY: 0.5,
	    scale: 1,
	}));
	
	Q.gravityY += 400;
	
	var player = new Q.Player({
		x: 50,
		y: 130,
	});
	
	stage.insert( player );
	stage.insert(new Q.Finish({ x: 900, y: 256}));
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_0.json",
        sheet:     "tiles",
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = -200;
    stage.viewport.scale = 1.0;
});

Q.scene( "ginc", function( stage ) {
	Q.state.set("score", 0);
	
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,     
	    speedY: 0.5,      
	    scale: 1,
	}));
	
	Q.gravityY += 1000;
	
	var player = new Q.Player({
		x: 50,
		y: 130,
	});
	
	stage.insert( player );
	stage.insert(new Q.Finish({ x: 900, y: 256}));
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_0.json",
        sheet:     "tiles",
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = -200;
    stage.viewport.scale = 1.0;
});

Q.scene( "gdec", function( stage ) {
	Q.state.set("score", 0);
	stage.insert( new Q.Repeater({ 
		asset: "background.png",
	    speedX: 0.5,     
	    speedY: 0.5,      
	    scale: 1,
	}));
	
	Q.gravityY = 200;
	
	var player = new Q.Player({
		x: 50,
		y: 130,
	});
	
	stage.insert( player );
	stage.insert(new Q.Finish({ x: 900, y: 256}));
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_0.json",
        sheet:     "tiles",
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = -200;
    stage.viewport.scale = 1.0;
});