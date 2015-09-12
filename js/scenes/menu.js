/**
* Menu sene
*/
Q.scene( "Menu", function( stage ) {
	var container = stage.insert( new Q.UI.Container({
		x: (Q.width - 300) / 2, 
		y: 20, 
		fill: "rgba(0,255,0,0.5)"
	}));
		
	var buttonStart = container.insert( new Q.UI.Button({
		x: 150,
		y: 30,
		fill: "#CCCCCC",
		label: "Start Game"
	}));
		
	var buttonStartTMX = container.insert( new Q.UI.Button({
		x: 150,
		y: 90,
		fill: "#CCCCCC",
		label: "Level TMX"
	}));

	buttonStart.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Level_1" );
	});

	buttonStartTMX.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Lvl1" );
	});

	container.fit( 20 );
});