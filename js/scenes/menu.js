/**
* Menu sene
*/
Q.scene( "Menu", function( stage ) {
	var container = stage.insert( new Q.UI.Container({
		x: (Q.width - 300) / 2, 
		y: 20, 
		fill: "rgba(0,255,0,0.5)"
	}));

		
	var buttonStartTMX = container.insert( new Q.UI.Button({
		x: 150,
		y: 90,
		fill: "#CCCCCC",
		label: "Start Game"
	}));


	buttonStartTMX.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Map" );
	});

	container.fit( 20 );
});