/**
* Level 1 scene
*/
Q.scene( "Level_1", function( stage ) {
	stage.insert( new Q.Repeater({ 
		asset: "level_1_background.jpg",
	    speedX: 0.5,     
	    speedY: 0.5,      
	    scale: 1 
	}));
	
	Q.state.set( "healths", 5 );
	
	var player = new Q.Player();
	var enemySoldier = new Q.EnemySoldier();
	
	stage.insert( player );
	stage.insert( enemySoldier );
	
	stage.collisionLayer( new Q.TileLayer({ 
		dataAsset: "level_1.json",
        sheet:     "tiles" 
	}));
	
	stage.add( "viewport" ).follow( player, { x:true, y:false } );
	
	stage.viewport.offsetX = 0;
    stage.viewport.scale = 1.0;
	
	Q.stageScene( "Stats", 1 );
});